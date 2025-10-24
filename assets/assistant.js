/* Simple assistant widget logic - client-side only */
(function(){
  const STORAGE_KEY = 'barber_assistant_state_v1';
  const initial = {opened:false, messages:[{from:'system',text:'Hola 👋 Soy tu asistente de BarberiaGonzalo. ¿En qué puedo ayudarte hoy?'}]};
  let state = (()=>{try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||initial}catch(e){return initial}})();

  function createWidget(){
    // minimized button
    const mini = document.createElement('button'); mini.className='assistant-minimized'; mini.innerText='Ayuda';
    mini.addEventListener('click', ()=>{ state.opened=true; saveState(); render(); window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'}) });

    // full widget
    const w = document.createElement('div'); w.className='assistant-widget';
    w.innerHTML = `
      <div class="assistant-header"><div class="assistant-title">Asistente</div><button class="assistant-close" title="Cerrar">×</button></div>
      <div class="assistant-body">
        <div class="assistant-messages" aria-live="polite"></div>
        <div class="assistant-actions">
          <button class="assist-btn" data-action="services">Ver servicios</button>
          <button class="assist-btn" data-action="booking">Reservar cita</button>
          <button class="assist-btn" data-action="photos">Ver fotos</button>
          <button class="assist-btn" data-action="contact">Contactar</button>
        </div>
        <div class="assistant-input">
          <input placeholder="Escribe tu pregunta... (ej. horarios)" aria-label="mensaje de ayuda" />
          <button>Enviar</button>
        </div>
      </div>
    `;

    // events
    w.querySelector('.assistant-close').addEventListener('click', ()=>{ state.opened=false; saveState(); render() });
    w.querySelectorAll('.assist-btn').forEach(b=>b.addEventListener('click', onQuick));
    const sendBtn = w.querySelector('.assistant-input button');
    const input = w.querySelector('.assistant-input input');
    sendBtn.addEventListener('click', ()=>{ const text = input.value.trim(); if(!text) return; pushMessage('user',text); input.value=''; replyTo(text); });
    input.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ e.preventDefault(); const text = input.value.trim(); if(!text) return; pushMessage('user',text); input.value=''; replyTo(text); } });

    // append to body and set id for lookups
    document.body.appendChild(mini);
    document.body.appendChild(w);
    w.id = 'assistantRoot';
    return {mini,w};
  }

  function onQuick(e){ const a = e.currentTarget.getAttribute('data-action'); if(a==='booking'){ openBooking() } else if(a==='photos'){ openPhotos() } else if(a==='contact'){ openContact() } else if(a==='services'){ showServices() } }

  function openBooking(){ window.location.href='booking.html' }
  function openPhotos(){ window.location.href='photos.html' }
  function openContact(){ window.location.href='about.html#contact' }

  function showServices(){ pushMessage('system','Ofrecemos:\n- Corte de pelo — 15€\n- Corte de pelo + barba — 18€\n¿Quieres reservar ahora?'); }
  function pushMessage(from,text){ state.messages.push({from,text}); saveState(); renderMessages(); }

  // helper: show a brief typing indicator then replace with the final text
  function pushSystemDelayed(finalText, delay=600){
    state.messages.push({from:'system', text:'Escribiendo...'});
    saveState(); renderMessages();
    setTimeout(()=>{
      // replace last system typing indicator with the real message
      for(let i=state.messages.length-1;i>=0;i--){ if(state.messages[i].from==='system'){ state.messages.splice(i,1); break } }
      state.messages.push({from:'system', text:finalText});
      saveState(); renderMessages();
    }, delay);
  }

  function replyTo(text){
    const q = (text||'').toLowerCase();

    // greetings
    if(/^(hola|buenas|buenos d[ií]as|buenas tardes|buenas noches|hey)\b/.test(q)){
      return pushSystemDelayed('¡Hola! ¿En qué puedo ayudarte?',400);
    }
    // hair type / recommendation
    if(/rizado|rizos|rizo|curly/.test(q)){
      const reply = 'Si tienes el pelo rizado te recomiendo cortes que respeten la textura: por ejemplo un degradado corto con la parte superior ligeramente más larga y texturizada, o un corte a tijera en capas para definir los rizos. Evita cortes demasiado cortos en la parte superior si quieres volumen. También recomendamos usar una crema de peinar ligera o aceite para mantener la forma.';
      return pushSystemDelayed(reply,700);
    }

    // direct request for a cut
    if(/me corte|quiero que me cortes|córtame|cortame|necesito un corte/.test(q)){
      const reply = 'Perfecto — podemos reservarte. ¿Prefieres cita por la mañana o por la tarde? Si quieres, dime cuánto quieres de largo o si tienes fotos para mostrar.';
      return pushSystemDelayed(reply,600);
    }

    // beard related
    if(/barba|afeitado|afeitar|arreglo de barba/.test(q)){
      const reply = 'Hacemos arreglo y diseño de barba: perfilado, recorte y mantenimiento. Un servicio combinado (corte + barba) tiene un precio recomendado de 18€. ¿Quieres reservar ese servicio?';
      return pushSystemDelayed(reply,600);
    }

    // prices
    if(/precio|precio(s)?|costo|cuesta|tarifa/.test(q)){
      const reply = 'Nuestros precios habituales:\n- Corte de pelo — 15€\n- Corte de pelo + barba — 18€\nSi necesitas un servicio especial (tintes, tratamientos), consúltanos y te doy un presupuesto.';
      return pushSystemDelayed(reply,500);
    }

    // times / opening hours
    if(/horario|horarios|hora|abrimos|abierto/.test(q)){
      return pushSystemDelayed('Abrimos de 09:00 a 13:00 y 15:00 a 19:00, de lunes a sábado. ¿Quieres que te reserve una cita?',600);
    }

    // photos / gallery
    if(/foto|fotos|galer/i.test(q)){
      pushSystemDelayed('Te llevo a la galería de fotos para que veas ejemplos de cortes.',500);
      setTimeout(openPhotos,800);
      return;
    }

    // booking intent
    if(/reserv|cita|pedir cita|quiero reservar|reservar/.test(q)){
      pushSystemDelayed('Perfecto — te llevo a la página de reservas para elegir fecha y hora.',500);
      setTimeout(openBooking,800);
      return;
    }

    // location
    if(/mapa|dónde|ubic|ubicaci/.test(q)){
      pushSystemDelayed('Estamos en Nevada Shopping, Granada. Te muestro la ubicación en la página Sobre nosotros.',500);
      setTimeout(()=>{ window.location.href='about.html' },800);
      return;
    }

    // small talk and fallback with variety
    const fallbacks = [
      'Interesante — ¿quieres que te recomiende un corte según tu tipo de pelo (rizado, liso, corto, largo)?',
      'Puedo ayudarte a reservar una cita, ver nuestra galería o darte los precios. ¿Qué prefieres?',
      'Si me dices tu tipo de pelo o qué estilo te gusta (ej. corto, degradado, mohawk), te doy recomendaciones.'
    ];
    const pick = fallbacks[Math.floor(Math.random()*fallbacks.length)];
    return pushSystemDelayed(pick,500);
  }

  function renderMessages(){ const root = document.querySelector('#assistantRoot .assistant-messages'); if(!root) return; root.innerHTML=''; state.messages.slice(-8).forEach(m=>{ const d=document.createElement('div'); d.className='assistant-msg '+(m.from==='system'?'system':'user'); if(m.from==='system'){ d.innerHTML = (m.text||'').replace(/\n/g,'<br>'); } else { d.textContent = m.text } root.appendChild(d) }); root.scrollTop = root.scrollHeight; }

  function saveState(){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) }catch(e){} }

  // initial render
  const {mini,w} = createWidget();
  function render(){ if(state.opened){ mini.style.display='none'; w.style.display='block'; } else { mini.style.display='flex'; w.style.display='none'; } renderMessages(); }

  // anchor for contact
  // ensure there's an anchor in about.html for #contact

  saveState();
  render();
  // expose for debugging
  window._barberAssistant = {state,render,pushMessage};
})();
