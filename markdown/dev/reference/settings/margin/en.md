---
title: margin
---

The `margin` setting allows you to specify a part margin (in mm).
Each part will have this margin applied. The default is `2mm`.

## Signature

```js
const settings = {
  Number margin=2
}
```

## Example

```js
import { Aaron } from "@freesewing/aaron"

const pattern = new Aaron({
  margin: 5
})
```

## Notes

The _margin_ implies that:

- At the edge of the SVG, the margin will be `margin * 1` (2mm by default)
- Between parts, the margin will be `margin * 2` (4mm by default)

Note that setting the margin to zero (or below) will cause parts to overlap.

In paperless mode, the margin will not go below 10mm.

That is because text is not taken into account when calculating the bounding
box of the part.  Since dimensions are typically the outermost elements in a
paperless part, a too narrow margin would cause the dimension text to get cut
off.
