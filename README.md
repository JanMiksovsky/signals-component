This project demonstrates a minimalist foundation for creating web components, using a handful of building blocks:

1. [Preact Signals](https://preactjs.com/guide/v10/signals/) to track component state.
1. A mixin called [ShadowTemplateMixin](./src/ShadowTemplateMixin.js) that populates the shadow tree for a new component by copying a `template` property.
1. A mixed called [AttributeMarshallingMixin](./src/AttributeMarshallingMixin.js) that invokes property setters when component attributes are set or changed.

A simple [IncrementDecrement](./src/IncrementDecrement.js) component illustrates the use of these building blocks.

[Live demo](https://signals-component.netlify.app/src/index.html)
