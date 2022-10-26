# Components

This folder represents an [abstraction layer](https://en.wikipedia.org/wiki/Abstraction_layer) which hides design details underneath a set of reusable public components.

## \_private ("leaky" / non-semantic components)

Similar to `public` and `private` keywords for classes, whether or not we `export` from specific folders can designate the scope of other constructs. We use this idea for components - not exposing certain ones because they break the encapsulation of the overall folder/layer. Mostly, we move components into `_private` if a component "leaks" visual design/CSS details as external options. Here are a couple of "leaky" examples:

- A component inherits CSS
  - This includes `font-family`, `font-size`, `color`, etc. If these values cascade down to our internal elements, that means they can be defined outside of our component as an option. We don't want design outside of our components
- A component and/or its public property/attributes are named after design/CSS details. Examples:
  - `<ui-icon icon="trashcan">`
  - `<ui-text-1rem>`
  - `<ui-text size="1rem">`
  - `<ui-text color="red">`

## Gray Area

If a component and/or its public property/attributes are named after a common design "widget" like `<ui-card>` or `<ui-section type="card">`, it may also be leaky. We know this because "card" doesn't mean anything to a blind person but "section" often does. This idea can be taken pretty far and components will seem more and more generic/abstract (yet still understandable from a page content perspective, if you're doing it right)
