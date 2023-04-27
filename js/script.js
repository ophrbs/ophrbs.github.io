const menuItems = document.querySelectorAll('.nav-menu a[href^="#"]');

console.log(menuItems);

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToId);
});

// pegar coordenada da seção
function getCoordenada(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

// ir para a seção
function scrollToId(event) {
  event.preventDefault();
  const coordenada = getCoordenada(event.target) - 50;

  scrollToPosition(coordenada);
}

// scroll suave
function scrollToPosition(coordenada) {
  window.scroll({
    top: coordenada,
    behavior: "smooth",
  });
}

// animação scroll
const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(function () {
      animeScroll();
    }, 150)
  );
}
