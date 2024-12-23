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

    this.querySelector("#increment").addEventListener("click", () => {
      this.value += 1;
    });
    this.querySelector("#decrement").addEventListener("click", () => {
      this.value -= 1;
    });

    const valueElement = this.querySelector("#value");
    this.value = valueElement.textContent;
    effect(() => {
      valueElement.textContent = this.value;
    });
  }

  get value() {
    return this.valueSignal.value;
  }
  set value(value) {
    this.valueSignal.value = value;
  }
}

customElements.define("increment-decrement", IncrementDecrement);
