const DEFAULT_OPTIONS = {
  autoClose: 5000,
  position: 'top-right',
};

class Toast {
  #toastElem;
  #autoCloseTimeout;

  constructor(options) {
    this.#toastElem = document.createElement('div');
    this.#toastElem.classList.add('toast');
    this.update({ ...DEFAULT_OPTIONS, ...options });
  }

  set position(value) {
    const selector = `.toast-container[data-position='${value}']`;
    const container =
      document.querySelector(selector) || createContainer(value);
    container.append(this.#toastElem);
  }

  set text(textValue) {
    this.#toastElem.textContent = textValue;
  }

  set autoClose(duration) {
    // When auto close option is not set
    if (duration === false) {
      return;
    }

    // Clear previous timer's (if any) before setting a new one
    if (this.#autoCloseTimeout !== null) {
      clearTimeout(this.#autoCloseTimeout);
    }

    this.#autoCloseTimeout = setTimeout(() => this.remove(), duration);
  }

  show() {
    // const toastElem = document.createElement('div');
    // toastElem.classList.add('toast');
  }

  update(options) {
    Object.entries(options).forEach(([key, value]) => {
      this[key] = value;
    });
  }

  remove() {
    const container = this.#toastElem.parentElement;
    this.#toastElem.remove();
    if (!container.hasChildNodes()) {
      container.remove();
    }
  }
}

function createContainer(position) {
  const container = document.createElement('div');
  container.classList.add('toast-container');
  container.dataset.position = position;
  document.body.append(container);

  return container;
}

export default Toast;
