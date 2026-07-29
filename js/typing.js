/* =========================================================
   typing.js — typewriter animation for the hero subtitle
   ========================================================= */

class TypedText {
  constructor(el, phrases, options = {}) {
    this.el = el;
    this.phrases = phrases;
    this.typeSpeed = options.typeSpeed || 55;
    this.deleteSpeed = options.deleteSpeed || 30;
    this.pauseDelay = options.pauseDelay || 1600;
    this.phraseIndex = 0;
    this.charIndex = 0;
    this.deleting = false;
    this.timer = null;
  }

  start() {
    if (!this.el) return;
    this.tick();
  }

  stop() {
    clearTimeout(this.timer);
  }

  tick() {
    const current = this.phrases[this.phraseIndex];
    let delay = this.typeSpeed;

    if (this.deleting) {
      this.charIndex--;
      delay = this.deleteSpeed;
    } else {
      this.charIndex++;
    }

    this.el.textContent = current.substring(0, this.charIndex);

    if (!this.deleting && this.charIndex === current.length) {
      this.deleting = true;
      delay = this.pauseDelay;
    } else if (this.deleting && this.charIndex === 0) {
      this.deleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      delay = 300;
    }

    this.timer = setTimeout(() => this.tick(), delay);
  }
}

window.TypedText = TypedText;
