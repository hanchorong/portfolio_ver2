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
