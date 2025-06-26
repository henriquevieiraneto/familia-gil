console.log("Bem-vindo ao site da Família Gil!");

// Adiciona um efeito ao clicar nos links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Você clicou em: ${link.textContent}`);
    });
  });
});
