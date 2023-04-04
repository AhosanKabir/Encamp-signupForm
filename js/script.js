$(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });


// === for create a modal ====

const openModalBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});