// ---pull page
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const spanElements = entry.target.querySelectorAll(
      ".main_greeting span:not(.row)"
    );
    const spanElements_email = entry.target.querySelectorAll(
      ".more a:first-child span:not(.row)"
    );
    const titles = entry.target.querySelectorAll(".title");
    const contact_article = entry.target.querySelector("#contact article");

    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");

      spanElements.forEach(spanAdd);
      spanElements_email.forEach(spanAdd);

      titles.forEach((title) => {
        if (entry.target.hasChildNodes(".title")) {
          title.classList.add("slideSide");
        }
      });

      if (contact_article) {
        contact_article.classList.add("transform-none");
        console.log(contact_article);
      }
    } else {
      entry.target.classList.remove("in-view");

      spanElements.forEach(spanRemove);
      spanElements_email.forEach(spanRemove);

      titles.forEach((title) => {
        title.classList.remove("slideSide");
      });

      if (contact_article) {
        contact_article.classList.remove("transform-none");
      }
    }
  });
});

const sections = document.querySelectorAll(".animated-section");

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// main, contact text
const $main_greeting = document.querySelectorAll(".main_greeting");
const $email = document.querySelectorAll(".more a:first-child");

function onTrimText(strip) {
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
}

$main_greeting.forEach(onTrimText);
$email.forEach(onTrimText);

function spanAdd(span, index) {
  setTimeout(function () {
    span.classList.add("animate");
  }, index * 60);
}
function spanRemove(span, index) {
  setTimeout(function () {
    span.classList.remove("animate");
  }, index * 60);
}

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
    if (li.offsetTop < window.innerHeight + scroll_Y - 200) {
      li.style.backgroundPositionX = "0%";
    } else {
      li.style.backgroundPositionX = "100%";
    }
  });
}
window.addEventListener("scroll", scrollEvent);
