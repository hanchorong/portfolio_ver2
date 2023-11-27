$nav_btn = document.querySelector("nav .mo_div button i");

addEventListener("click", function () {
  $nav_btn.class = "fa-solid fa-xmark";
  console.log($nav_btn.class);
});
