const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close-btn");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
  });
});

function closeLightbox() {
  lightbox.classList.remove("active");
}

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target !== lightboxImg) {
    closeLightbox();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});
