// main greeting letter
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

// const spanElements = document.querySelectorAll(".main_greeting span:not(.row)");
// spanElements.forEach(function (span, index) {
//   setTimeout(function () {
//     span.classList.toggle("animate");
//   }, index * 15);
// });

// ---pull page

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const spanElements = entry.target.querySelectorAll(
      ".main_greeting span:not(.row)"
    );
    const titles = entry.target.querySelectorAll(".title");

    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");

      spanElements.forEach(function (span, index) {
        setTimeout(function () {
          span.classList.add("animate");
        }, index * 15);
      });

      titles.forEach((title) => {
        if (entry.target.hasChildNodes(".title")) {
          title.classList.add("slideSide");
        }
      });
    } else {
      entry.target.classList.remove("in-view");

      spanElements.forEach(function (span, index) {
        setTimeout(function () {
          span.classList.remove("animate");
        }, index * 15);
      });

      titles.forEach((title) => {
        title.classList.remove("slideSide");
      });
    }
  });
});

const sections = document.querySelectorAll(".animated-section");

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// about img slide
const $slide_img_wrap = document.querySelector(".slide_img_wrap");
const $slide_img = document.querySelectorAll(".slide_img_wrap img");

let totalWidth = 0;

$slide_img.forEach((img) => {
  const img_width = img.width;
  totalWidth += img_width;
  let imgs = img.cloneNode(true);
  $slide_img_wrap.appendChild(imgs);
});
$slide_img_wrap.style.width = `${totalWidth}px`;

// section - information education list
const education_li = document.querySelectorAll(".education li");

function scrollEvent() {
  const scroll_Y = window.scrollY;

  education_li.forEach((li) => {
    console.log(li.offsetTop, window.innerHeight, scroll_Y);
    if (li.offsetTop < window.innerHeight + scroll_Y - 200) {
      console.log("Hmm");
      li.style.backgroundPositionX = "0%";
    } else {
      li.style.backgroundPositionX = "100%";
    }
  });
}
window.addEventListener("scroll", scrollEvent);
