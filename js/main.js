// section animation
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const titles = entry.target.querySelectorAll(".title");
    const spanElements = entry.target.querySelectorAll(
      ".main_greeting span:not(.row)"
    );
    const contact_article = entry.target.querySelector("#contact article");
    const title_area = entry.target.querySelector(".title_area");

    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
      titles.forEach((title) => title.classList.add("slideSide"));
      spanElements.forEach(spanAdd);
      contact_article?.classList.add("transform-none");
      title_area?.classList.add("titleArea_anim");
    } else {
      entry.target.classList.remove("in-view");
      titles.forEach((title) => title.classList.remove("slideSide"));
      spanElements.forEach(spanRemove);
      contact_article?.classList.remove("transform-none");
      title_area?.classList.remove("titleArea_anim");
    }
  });
});

// Observe animated sections
const sections = document.querySelectorAll(".animated-section");
sections.forEach((section) => sectionObserver.observe(section));

// trim and style text
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

// dancing text: email and main greeting elements
const $main_greeting = document.querySelectorAll(".main_greeting");
const $email = document.querySelectorAll(".more a:first-child");
$email.forEach(onTrimText);
$main_greeting.forEach(onTrimText);

// Function to add and remove classes with a delay
function spanAdd(span, index) {
  setTimeout(() => span.classList.add("animate", "shineShadow"), index * 40);
}

function spanRemove(span, index) {
  setTimeout(() => span.classList.remove("animate", "shineShadow"), index * 40);
}

// section - information Image slide
const $slide_img_wrap = document.querySelector(".slide_img_wrap");
const $slide_img = document.querySelectorAll(".slide_img_wrap img");
let totalWidth = 0;

$slide_img.forEach((img) => {
  const img_width = img.width;
  totalWidth += img_width;
  let imgs = img.cloneNode(true);
  $slide_img_wrap.appendChild(imgs);
  $slide_img_wrap.style.width = `${totalWidth}px`;
});

// Scroll Event
function scrollEvent() {
  const education_li = document.querySelectorAll(".education li");
  const skill_ul = document.querySelector(".skill ul");
  const skills = document.querySelectorAll(".skill ul li");
  const second_section = document.querySelector("#about");
  const $topButton = document.querySelector("#topBtn");
  const $email_ = document.querySelector(".more a:first-child");
  const scroll_Y = window.scrollY;
  const spanElements_email = document.querySelectorAll(
    ".more a:first-child span:not(.row)"
  );

  education_li.forEach((li) => {
    if (scroll_Y >= li.offsetTop - 300) {
      li.style.backgroundPositionX = "0%";
    } else {
      li.style.backgroundPositionX = "100%";
    }
  });

  skills.forEach((skill, i) => {
    if (scroll_Y >= skill_ul.offsetTop - 450) {
      setTimeout(() => skill.classList.add("transform-up"), i * 100);
    } else {
      setTimeout(() => skill.classList.remove("transform-up"), i * 100);
    }
  });

  $topButton.style.visibility =
    second_section?.offsetTop < scroll_Y ? "visible" : "hidden";
  $topButton.classList.toggle("fadeIn", second_section?.offsetTop < scroll_Y);

  spanElements_email.forEach((span, index) => {
    const action = scroll_Y >= $email_?.offsetTop - 500 ? spanAdd : spanRemove;
    setTimeout(() => action(span, index), index * 60);
  });
}

window.addEventListener("scroll", scrollEvent);
window.addEventListener("resize", scrollEvent);
window.addEventListener("orientationchange", scrollEvent);
