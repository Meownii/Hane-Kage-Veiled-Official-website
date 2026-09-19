/* ==================================================
   EDIT GALLERY ITEMS HERE

   Add future approved artwork by copying the object below and changing
   its title and numbered filename. Keep only finished/current artwork here.
   ================================================== */
const galleryItems = [
  { title: "The Shadow", image: "images/gallery/gallery-01.png" }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("galleryGrid");
  const lightbox = document.getElementById("lightbox");
  if (!grid || !lightbox) return;

  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const closeButton = document.getElementById("lightboxClose");
  let currentIndex = 0;
  let lastFocusedElement = null;

  function showLightboxItem(index) {
    currentIndex = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentIndex];
    lightboxCaption.textContent = `${String(currentIndex + 1).padStart(2, "0")} — ${item.title}`;
    lightboxImage.textContent = "";
    lightboxImage.style.backgroundImage = item.image ? `url("${item.image}")` : "";
    lightboxImage.style.backgroundSize = item.image ? "contain" : "";
    lightboxImage.style.backgroundRepeat = item.image ? "no-repeat" : "";
    lightboxImage.style.backgroundPosition = item.image ? "center" : "";
    lightboxImage.setAttribute("aria-label", item.image ? item.title : `${item.title} placeholder`);
  }

  function openLightbox(index, trigger) {
    lastFocusedElement = trigger;
    showLightboxItem(index);
    lightbox.hidden = false;
    document.body.classList.add("menu-open");
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove("menu-open");
    lastFocusedElement?.focus();
  }

  galleryItems.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-item";
    button.setAttribute("aria-label", `Open ${item.title}`);
    const label = document.createElement("span");
    label.textContent = item.image ? item.title : "";
    if (item.image) {
      button.style.backgroundImage = `url("${item.image}")`;
      button.style.backgroundSize = "contain";
      button.style.backgroundPosition = "center";
      button.style.backgroundRepeat = "no-repeat";
    }
    button.appendChild(label);
    button.addEventListener("click", () => openLightbox(index, button));
    grid.appendChild(button);
  });

  closeButton.addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrevious").addEventListener("click", () => showLightboxItem(currentIndex - 1));
  document.getElementById("lightboxNext").addEventListener("click", () => showLightboxItem(currentIndex + 1));
  lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", event => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") showLightboxItem(currentIndex - 1);
    if (event.key === "ArrowRight") showLightboxItem(currentIndex + 1);

    // Keep keyboard focus inside the open dialog.
    if (event.key === "Tab") {
      const controls = [...lightbox.querySelectorAll("button")];
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
});
