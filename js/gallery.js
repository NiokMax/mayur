/**
 * Mayur Bikash Gogoi Portfolio - Gallery Lightbox
 * Accessible image modal with keyboard support
 */

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightboxModal = document.querySelector(".lightbox-modal");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxCaption = document.querySelector(".lightbox-caption");
  const closeBtn = document.querySelector(".lightbox-close-btn");

  if (!lightboxModal) return;

  function openLightbox(src, alt, caption) {
    if (lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || "Gallery preview";
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || alt || "";
    }
    lightboxModal.classList.add("active");
    lightboxModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeBtn?.focus();
  }

  function closeLightbox() {
    lightboxModal.classList.remove("active");
    lightboxModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const caption = item.querySelector(".gallery-caption")?.textContent || "";
      if (img) {
        openLightbox(img.src, img.alt, caption);
      }
    });

    // Keyboard support (Enter/Space on focused gallery item)
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", `View ${item.querySelector(".gallery-caption")?.textContent || "image"}`);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const img = item.querySelector("img");
        const caption = item.querySelector(".gallery-caption")?.textContent || "";
        if (img) openLightbox(img.src, img.alt, caption);
      }
    });
  });

  closeBtn?.addEventListener("click", closeLightbox);

  lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightboxModal.classList.contains("active")) {
      closeLightbox();
    }
  });
});
