import { effect, signal } from "@preact/signals-core";
import AttributeMarshallingMixin from "./AttributeMarshallingMixin.js";
import ShadowTemplateMixin from "./ShadowTemplateMixin.js";
import { templateFrom } from "./htmlLiterals.js";
import { ids, render, template } from "./internal.js";

export default class IncrementDecrement extends AttributeMarshallingMixin(
  ShadowTemplateMixin(HTMLElement)
) {
  constructor() {
    super();
    this.valueSignal = signal(0);
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }

    // Render template
    super[render]();

    this[ids].increment.addEventListener("click", () => {
      this.value += 1;
    });
    this[ids].decrement.addEventListener("click", () => {
      this.value -= 1;
    });

    effect(() => {
      this[ids].value.textContent = this.value;
    });
  }

  get value() {
    return this.valueSignal.value;
  }
  set value(value) {
    this.valueSignal.value = parseInt(value);
  }

  get [template]() {
    return templateFrom.html`
      <button id="decrement">-</button>
      <span id="value"></span>
      <button id="increment">+</button>
    `;
  }
}

customElements.define("increment-decrement", IncrementDecrement);
