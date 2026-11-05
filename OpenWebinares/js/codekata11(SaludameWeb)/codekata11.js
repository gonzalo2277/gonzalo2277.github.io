let inputName = document.querySelector(".saluda");
let buttonSaluda = document.querySelector(".boton");

buttonSaluda.addEventListener("click", function(event) {
    if (inputName.value !== "") {
        alert("Hola " + inputName.value);
        inputName.value = "";
    }
});