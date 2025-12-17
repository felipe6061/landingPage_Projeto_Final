
//destacar cards disciplinas e carreiras ao passar o mouse
const cards = document.querySelectorAll(".foto-disciplinas, .foto-carreiras");

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.classList.add("hover");
  });

  card.addEventListener("mouseout", () => {
    card.classList.remove("hover");
  });
});


