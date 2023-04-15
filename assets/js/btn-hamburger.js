const btnMobile = document.querySelector("#btn-mobile");

btnMobile.addEventListener("click", () => {
  const nav = document.querySelector("#nav");
  nav.classList.toggle("active");
});
