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
