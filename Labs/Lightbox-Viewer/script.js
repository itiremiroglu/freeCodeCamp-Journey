const images = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

images.forEach((item) => {
    item.addEventListener("click", () => {
        const fullSizeSrc = item.src.replace("-thumbnail", "");
        lightboxImage.src = fullSizeSrc;
        lightboxImage.alt = item.alt;
        lightbox.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});