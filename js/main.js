// ---pull page

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const titles = entry.target.querySelectorAll(".title");
    const spanElements = entry.target.querySelectorAll(
      ".main_greeting span:not(.row)"
    );
    const spanElements_email = entry.target.querySelectorAll(
      ".more a:first-child span:not(.row)"
    );
    const skills = entry.target.querySelectorAll(".skill ul li");
    const contact_article = entry.target.querySelector("#contact article");

    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");

      titles.forEach((title) => {
        if (entry.target.hasChildNodes(".title")) {
          title.classList.add("slideSide");
        }
      });

      spanElements.forEach(spanAdd);
      spanElements_email.forEach(spanAdd);

      // skills.forEach((skill, i) => {
      //   setTimeout(() => {
      //     skill.classList.add("transform-up");
      //   }, i * 150);
      // });
      if (contact_article) {
        contact_article.classList.add("transform-none");
      }
    } else {
      entry.target.classList.remove("in-view");

      titles.forEach((title) => {
        title.classList.remove("slideSide");
      });

      spanElements.forEach(spanRemove);
      spanElements_email.forEach(spanRemove);

      // skills.forEach((skill, i) => {
      //   setTimeout(() => {
      //     skill.classList.remove("transform-up");
      //   }, i * 150);
      // });

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

// section - main, contact text
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

// section - about img slide
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
  const skill_ul = document.querySelector(".skill ul");
  const skills = skill_ul.querySelectorAll("li");
  const second_section = document.querySelector("#about");
  const $topButton = document.querySelector("#topBtn");

  education_li.forEach((li) => {
    // if (li.offsetTop < window.innerHeight + scroll_Y - 200) {
    if (scroll_Y >= li.offsetTop - 300) {
      li.style.backgroundPositionX = "0%";
    } else {
      li.style.backgroundPositionX = "100%";
    }
  });

  skills.forEach((skill, i) => {
    if (scroll_Y >= skill_ul.offsetTop - 450) {
      setTimeout(() => {
        skill.classList.add("transform-up");
      }, i * 100);
    } else {
      setTimeout(() => {
        skill.classList.remove("transform-up");
      }, i * 100);
    }
  });

  if (second_section.offsetTop < scroll_Y) {
    $topButton.classList.add("fadeIn");
    $topButton.style.visibility = "visible";
  } else {
    $topButton.classList.remove("fadeIn");
    $topButton.style.visibility = "hidden";
  }
}
window.addEventListener("scroll", scrollEvent);
window.addEventListener("resize", scrollEvent);
window.addEventListener("orientationchange", scrollEvent);
