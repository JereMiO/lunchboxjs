# Lunchbox Wrapper

A Lunchbox app needs to be wrapped in a `Lunchbox` wrapper:

```html
<Lunchbox>
    <!-- Your code -->
</Lunchbox>
```

## Props

The `Lunchbox` component comes with several shortcut props:

| Name                 | Type              | Notes                                                                                                                                                                                                                                                                                                                                                               |
| -------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `background`         | String            | Background color of the renderer.                                                                                                                                                                                                                                                                                                                                   |
| `cameraArgs`         | Array             | Props to pass to the auto-created camera. Ignored if you provide your own camera. Defaults: PerspectiveCamera: `[45, 0.5625, 1, 1000]`, OrthographicCamera: `[]`                                                                                                                                                                                                    |
| `cameraLook`         | Array             | [x, y, z] coordinates to pass to `camera.lookAt`.                                                                                                                                                                                                                                                                                                                   |
| `cameraLookAt`       | Array             | Alias for `cameraLook`.                                                                                                                                                                                                                                                                                                                                             |
| `cameraPosition`     | Array             | [x, y, z] coordinates where the camera should be placed.                                                                                                                                                                                                                                                                                                            |
| `dpr`                | Number            | [Device pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio). Defaults to current display's DPR.                                                                                                                                                                                                                                  |
| `ortho`              | Boolean           | Add or set to `true` to use an orthographic camera. Ignored if you provide your own camera.                                                                                                                                                                                                                                                                         |
| `orthographic`       | Boolean           | Alias of `ortho`.                                                                                                                                                                                                                                                                                                                                                   |
| `r3f`                | Boolean           | Match [react-three-fiber's](https://github.com/pmndrs/react-three-fiber) color settings. (In practice, this usually means softer colors and shadows.) This uses sRGB space and ACESFilmicToneMapping, and sets `ColorManagement.legacyMode` to false. See [here](https://threejs.org/docs/index.html#manual/en/introduction/Color-management) for more information. |
| `rendererProperties` | Object            | Object containing properties to set on renderer.                                                                                                                                                                                                                                                                                                                    |
| `shadow`             | Boolean or Object | Add or set to `true` to enable shadows. Pass an object with property `type` to set [shadow type](https://threejs.org/docs/#api/en/renderers/WebGLRenderer.shadowMap).                                                                                                                                                                                               |
| `sizePolicy`         | String            | Set to `'container'` to make lunchbox fill its containing element instead of forcing fullscreen. See [this PR](https://github.com/breakfast-studio/lunchboxjs/pull/24) for more details.                                                                                                                                                                            |
| `transparent`        | Boolean           | Add or set to true to make the renderer's background transparent.                                                                                                                                                                                                                                                                                                   |
| `updateSource`       | Object            | Set to only rerender when this value changes. See [this PR](https://github.com/breakfast-studio/lunchboxjs/pull/23) for more details.                                                                                                                                                                                                                               |
| `zoom`               | Number            | Set to change an orthographic camera's zoom.                                                                                                                                                                                                                                                                                                                        |

## Examples

-   A renderer with a blue background:

```html
<Lunchbox background="#0000ff">
    <!-- Your code -->
</Lunchbox>
```

-   A renderer with a transparent background:

```html
<Lunchbox transparent>
    <!-- Your code -->
</Lunchbox>
```

-   Soft shadows enabled:

```html
<template>
    <Lunchbox :shadow="{ type: THREE.PCFSoftShadowMap }">
        <!-- Your code -->
    </Lunchbox>
</template>

<script setup>
    import * as THREE from 'three'
</script>
```
