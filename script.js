const loadMoreBtn = document.getElementById("loadMore");
const extras = document.querySelectorAll(".extra");
let visible = 0;
const increment = 2;

loadMoreBtn.addEventListener("click", () => {
  for (let i = visible; i < visible + increment && i < extras.length; i++) {
    extras[i].classList.remove("d-none");
  }
  visible += increment;
  if (visible >= extras.length) loadMoreBtn.style.display = "none";
});

const phrases = [
  "Exclusive Painting",
  "Rare Masterpieces",
  "Handcrafted Artwork",
  "Timeless Creations",
];

const hero = document.getElementById("hero-text");
let index = 0;

function renderText(text) {
  hero.innerHTML = "";
  text.split(" ").forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word + " ";
    span.style.color = "#ffb86c"; // warm theme highlight
    hero.appendChild(span);
    setTimeout(() => span.classList.add("show"), i * 140);
  });
}

setInterval(() => {
  index = (index + 1) % phrases.length;
  renderText(phrases[index]);
}, 4200);

// Mouse parallax glow effect
document.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  hero.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`;
  hero.classList.add("glow");

  clearTimeout(hero._t);
  hero._t = setTimeout(() => {
    hero.style.transform = "";
    hero.classList.remove("glow");
  }, 150);
});

// Init
renderText(phrases[index]);

// auto cycle
setInterval(() => {
  index = (index + 1) % phrases.length;
  renderText(phrases[index]);
}, 4200);

// mouse attraction
document.addEventListener("mousemove", (e) => {
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  hero.style.transform = `translate(${x * 0.03}px, ${y * 0.03}px)`;
  hero.classList.add("glow");

  clearTimeout(hero._t);
  hero._t = setTimeout(() => {
    hero.style.transform = "";
    hero.classList.remove("glow");
  }, 150);
});

// init
renderText(phrases[index]);

function renderText(text) {
  hero.innerHTML = "";
  text.split(" ").forEach((word, i) => {
    const span = document.createElement("span");
    span.textContent = word;
    hero.appendChild(span);

    setTimeout(() => span.classList.add("show"), i * 160);
  });
}

const sections = document.querySelectorAll("section.section-animate");

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight - 100 && rect.bottom > 100;
}

function animateSectionsOnce() {
  sections.forEach((section) => {
    // check if already animated
    if (!section.dataset.animated && isInViewport(section)) {
      section.classList.add("show");
      section.dataset.animated = "true"; // mark as animated
    }
  });
}

// init on load
animateSectionsOnce();

// animate on scroll
window.addEventListener("scroll", animateSectionsOnce);

// Show/hide button & scroll to top
const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
