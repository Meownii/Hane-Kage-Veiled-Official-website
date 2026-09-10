/* ==================================================
   EDIT GALLERY ITEMS HERE

   Replace an empty image value with a relative path, for example:
   image: "images/gallery/gallery-01.jpg"
   Keep image as "" to display a placeholder.
   ================================================== */
const galleryItems = [
  { title: "Concept Art 01", image: "" },
  { title: "Character Drawing 01", image: "" },
  { title: "Production Artwork 01", image: "" },
  { title: "Screenshot 01", image: "" },
  { title: "Official Poster 01", image: "" },
  { title: "Concept Art 02", image: "" }
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
    lightboxImage.textContent = item.image ? "" : "INSERT GALLERY IMAGE HERE";
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
    label.textContent = item.image ? item.title : "INSERT GALLERY IMAGE HERE";
    if (item.image) {
      button.style.backgroundImage = `url("${item.image}")`;
      button.style.backgroundSize = "cover";
      button.style.backgroundPosition = "center";
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
