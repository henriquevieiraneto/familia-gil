document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`Você acessou: ${link.textContent}`);
    });
  });
});
