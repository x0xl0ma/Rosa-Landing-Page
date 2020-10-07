//Select element function

const selectElement = function (element) {
  return document.querySelector(element);
};

const menuToggler = selectElement(".menu-toggle");
const body = selectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

//Scroll reveal

window.sr = ScrollReveal();

sr.reveal(".animated-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animated-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animated-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animated-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
