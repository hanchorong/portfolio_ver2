const $main_greeting = document.querySelectorAll(".main_greeting");

$main_greeting.forEach(function (strip) {
  const rows = strip.innerHTML.trim().split("<br>");
  strip.innerHTML = "";

  rows.forEach(function (row) {
    const rowElement = document.createElement("span");
    rowElement.className = "row";
    strip.appendChild(rowElement);

    const letters = row.trim().split("");

    letters.forEach(function (letter) {
      letter = letter === " " ? "\u00A0" : letter;
      const spanElement = document.createElement("span");
      spanElement.textContent = letter.trim();
      rowElement.appendChild(spanElement);
    });
  });
});

const spanElements = document.querySelectorAll(".main_greeting span:not(.row)");
spanElements.forEach(function (span, index) {
  setTimeout(function () {
    span.classList.toggle("animate");
  }, index * 15);
});

// about img slide

const $slide_img_wrap = document.querySelector(".slide_img_wrap");
const $slide_img = document.querySelectorAll(".slide_img_wrap img");
// const lastImage = $slide_img[$slide_img.length - 1];

let totalWidth = 0;

$slide_img.forEach((img) => {
  const img_width = img.width;
  totalWidth += img_width;
  let imgs = img.cloneNode(true);
  $slide_img_wrap.appendChild(imgs);
});
$slide_img_wrap.style.width = `${totalWidth}px`;

// let firstImg = $slide_img[0].cloneNode(true);
// let firstImg = $slide_img.cloneNode(true);
// $slide_img_wrap.appendChild(firstImg);
