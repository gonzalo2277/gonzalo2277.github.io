/* Simple assistant widget logic - client-side only */
(function(){
  const STORAGE_KEY = 'barber_assistant_state_v1';
  const initial = {opened:false, messages:[{from:'system',text:'Hola 👋 Soy tu asistente de BarberiaGonzalo. ¿En qué puedo ayudarte hoy?'}]};
  let state = (()=>{try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||initial}catch(e){return initial}})();

  function createWidget(){
    // container
    const container = document.createElement('div'); container.id='assistantRoot';
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
    input.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ e.preventDefault(); sendBtn.click() } });

    // append to body
    document.body.appendChild(mini);
    document.body.appendChild(w);
    return {mini,w};
  }

  function onQuick(e){ const a = e.currentTarget.getAttribute('data-action'); if(a==='booking'){ openBooking() } else if(a==='photos'){ openPhotos() } else if(a==='contact'){ openContact() } else if(a==='services'){ showServices() } }

  function openBooking(){ window.location.href='booking.html' }
  function openPhotos(){ window.location.href='photos.html' }
  function openContact(){ window.location.href='about.html#contact' }

  function showServices(){ pushMessage('system','Ofrecemos:\n- Corte de pelo — 15€\n- Corte de pelo + barba — 18€\n¿Quieres reservar ahora?'); }

  function pushMessage(from,text){ state.messages.push({from,text}); saveState(); renderMessages(); }

  function replyTo(text){ // very small heuristic replies
    const q = text.toLowerCase();
    if(q.includes('horario')||q.includes('hora')||q.includes('abrimos')){ pushMessage('system','Abrimos de 09:00 a 13:00 y 15:00 a 19:00, de lunes a sábado. ¿Quieres reservar?') }
    else if(q.includes('precio')||q.includes('costo')||q.includes('cuesta')){ showServices(); }
    else if(q.includes('fotos')||q.includes('cortes')){ pushMessage('system','Puedes ver nuestro trabajo en la sección Fotos. Te llevo allí.'); setTimeout(openPhotos,700) }
    else if(q.includes('reserv')||q.includes('cita')){ pushMessage('system','Perfecto — te llevo a la página de reservas.'); setTimeout(openBooking,700) }
    else if(q.includes('mapa')||q.includes('dónde')||q.includes('ubic')){ pushMessage('system','Estamos en Nevada Shopping, Granada. Puedes ver la ubicación en la página Sobre nosotros.'); setTimeout(()=>{ window.location.href='about.html' },700) }
    else { pushMessage('system','Buena pregunta — si quieres, escríbenos un mensaje desde Contacto o intenta frases como "reservar" o "ver fotos".'); }
  }

  function renderMessages(){ const root = document.querySelector('#assistantRoot .assistant-messages'); if(!root) return; root.innerHTML=''; state.messages.slice(-8).forEach(m=>{ const d=document.createElement('div'); d.className='assistant-msg '+(m.from==='system'?'system':'user'); d.textContent = m.text; root.appendChild(d) }); root.scrollTop = root.scrollHeight; }

  function saveState(){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)) }catch(e){} }

  // initial render
  const {mini,w} = createWidget();
  function render(){ if(state.opened){ mini.style.display='none'; w.style.display='block'; } else { mini.style.display='flex'; w.style.display='none'; } renderMessages(); }

  // anchor for contact
  // ensure there's an anchor in about.html for #contact

  render();
  // expose for debugging
  window._barberAssistant = {state,render,pushMessage};
})();
