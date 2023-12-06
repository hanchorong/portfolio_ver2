// nav hamburger btn
const $nav_btn = document.querySelector("nav .mo_div button");
const $toggle_ul = document.querySelector("nav .toggle ul");
const $toggle_li = document.querySelector("nav .toggle ul li");
const icon = $nav_btn.querySelector("i");

$nav_btn.addEventListener("click", function () {
  icon.classList.toggle("fa-xmark");
  $toggle_ul.classList.toggle("visible");
});
//li click했으면 list 접기
$toggle_ul.addEventListener("click", function () {
  icon.classList.toggle("fa-xmark");
  $toggle_ul.classList.toggle("visible");
});

// 최상단으로 이동 버튼
const $topButton = document.querySelector("#topBtn");

$topButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// textarea height
const $textarea = document.querySelectorAll("textarea");

if ($textarea) {
  $textarea.forEach(function (text) {
    text.style.height = "auto";
    text.style.height = text.scrollHeight + "px";

    window.addEventListener("resize", function () {
      text.style.height = "auto";
      text.style.height = text.scrollHeight + "px";
    });
  });
}
