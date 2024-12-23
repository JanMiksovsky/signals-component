import { effect, signal } from "@preact/signals-core";

export default class IncrementDecrement extends HTMLElement {
  constructor() {
    super();
    this.valueSignal = signal();
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }

    const increment = this.element("increment");
    const decrement = this.element("decrement");
    const value = this.element("value");

    increment?.addEventListener("click", () => {
      this.value += 1;
    });
    decrement?.addEventListener("click", () => {
      this.value -= 1;
    });

    if (value) {
      this.value = value.textContent;
      effect(() => {
        value.textContent = this.value;
      });
    }
  }

  element(id) {
    const element = this.querySelector(`#${id}`);
    if (!element) {
      console.warn(`Missing element with id "${id}"`, this);
    }
    return element;
  }

  get value() {
    return this.valueSignal.value;
  }
  set value(value) {
    this.valueSignal.value = parseInt(value);
  }
}

customElements.define("increment-decrement", IncrementDecrement);
