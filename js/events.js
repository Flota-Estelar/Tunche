window.addEventListener("load", function () {
  this.setTimeout(() => {
    document.body.classList.remove("loading");
    document.getElementById("fondo-carga").style.display = "none";
  }, 500);
});

const btnAbrirModal = document.querySelector("#btn-abrir-modal");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
const btnCerrarModal2 = document.querySelector("#btn-cerrar-modal2");
const form = document.querySelector("#form-session");
const modal = document.querySelector("#modal");

btnAbrirModal.addEventListener("click", () => {
  modal.showModal();
});

btnCerrarModal.addEventListener("click", () => {
  modal.close();
});

btnCerrarModal2.addEventListener("click", () => {
  if (form.checkValidity()) {
    modal.close();
  }
});
