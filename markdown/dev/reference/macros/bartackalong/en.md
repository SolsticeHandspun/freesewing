---
title: bartackAlong
---

The `bartackAlong` macro allows you to add a _bartack_ marker to your sewing pattern.
More specifically, a bartack along a path.
It is provided by the [bartack plugin](/reference/plugins/bartack/).

## Signature

```js
macro('banner', {
  Number angle=0,
  Number density=3,
  Number length=15,
  Path path,
  String prefix='',
  String suffix='',
  Number width=3,
})
```

## Example

<Example caption="Example of the bartackAlong macro">
```js
({ Point, Path, macro, part }) => {

  macro('bartackAlong', { 
    path: new Path()
      .move(new Point(15,15))
      .curve(
        new Point(20, 20),
        new Point(30, 20),
        new Point(35, 15),
      )
  })

  return part
}
```
</Example>

## Configuration

| Property     | Default    | Type       | Description |
|-------------:|------------|------------|-------------|
| `angle`      | `0`        | `number`   | The angle under which to draw the bartack |
| `density`    | `3`        | `number`   | Controls how close the stitches are togeter |
| `length`     | `15`       | `number`   | Length of the bartack |
| `path`       |            | `Path`     | The path the bartack should follow |
| `prefix`     |            | `string`   | A prefix to apply to the names of the generated path and points |
| `suffix`     |            | `string`   | A suffix to apply to the names of the generated path and points |
| `width`      | `3`        | `number`   | Width of the bartack |
