// nav hamburger btn
const $nav_btn = document.querySelector("nav .mo_div button");
const $mo_ul = document.querySelector("nav .mo_div ul");
const icon = $nav_btn.querySelector("i");

$nav_btn.addEventListener("click", function () {
  icon.classList.toggle("fa-xmark");
  $mo_ul.classList.toggle("visible");
  // icon.classList.toggle("fa-bars");
  // icon.classList.toggle("fa-xmark");
  // $mo_ul.classList.toggle("visible");
});

// $nav_btn.addEventListener("mouseup", function () {
//   icon.style.transform = "rotate(0deg)";
// });

// 최상단으로 이동 버튼
const $topButton = document.querySelector("#topBtn");

$topButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
