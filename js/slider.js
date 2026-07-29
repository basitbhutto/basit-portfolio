/* =========================================================
   slider.js — project gallery slider used inside the modal
   ========================================================= */

class GallerySlider {
  constructor({ track, prevBtn, nextBtn, counter }) {
    this.track = track;
    this.prevBtn = prevBtn;
    this.nextBtn = nextBtn;
    this.counter = counter;
    this.images = [];
    this.index = 0;

    this.prevBtn.addEventListener("click", () => this.prev());
    this.nextBtn.addEventListener("click", () => this.next());

    this.track.addEventListener(
      "touchstart",
      (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );
    this.track.addEventListener(
      "touchend",
      (e) => {
        const dx = e.changedTouches[0].screenX - this.touchStartX;
        if (Math.abs(dx) > 40) dx > 0 ? this.prev() : this.next();
      },
      { passive: true }
    );
  }

  load(images, altBase) {
    this.images = images;
    this.index = 0;
    this.track.innerHTML = images
      .map(
        (src, i) =>
          `<img src="${src}" alt="${altBase} screenshot ${i + 1}" loading="${i === 0 ? "eager" : "lazy"}" />`
      )
      .join("");
    this.update();
  }

  update() {
    this.track.style.transform = `translateX(-${this.index * 100}%)`;
    if (this.counter) this.counter.textContent = `${this.index + 1} / ${this.images.length}`;
  }

  next() {
    if (!this.images.length) return;
    this.index = (this.index + 1) % this.images.length;
    this.update();
  }

  prev() {
    if (!this.images.length) return;
    this.index = (this.index - 1 + this.images.length) % this.images.length;
    this.update();
  }
}

window.GallerySlider = GallerySlider;
