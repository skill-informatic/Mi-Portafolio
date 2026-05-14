const openModal = document.querySelector("#cv");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("click modal");
  modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});
