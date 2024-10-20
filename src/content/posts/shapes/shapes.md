---
pubDate: 2023-07-02
title: CSS Shapes
description: "A growing collection of shape tricks, all crafted using pure CSS. Each shape comes with code snippets."
lightImage: "./shapes-light.png"
darkImage: "./shapes-dark.png"
tags: ["CSS art", "Collection"]

showToc: true
---

Hey there, CSS fans! It's a growing collection of shape tricks, all crafted using pure CSS. Each shape comes with code snippets, so you can easily integrate them and experiment with different approaches.

There are many reasons to use CSS shapes instead of SVG, here you can find different examples and useful links.

<!-- There are many reasons to use CSS shapes instead of SVG, here you can find a comparison table of all the approaches listed below, examples and useful links. -->

<!-- toc -->

<!-- 
## Comparison table

|  | [`border-radius`](#border-radius) | [`box-shadow`](#box-shadow) | [`mask`](#mask) | [`clip-path`](#clip-path) | [`background`](#background) | [`transform`](#transform) | [`border`](#border) |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | ╳ | ╳ | ✓ | ✓ | ✓ |
|  | ╳ | ✓ | ✓ | ✓ | ✓ |
|  | ✓ | ╳ | ✓ | ✓ | ✓ |
|  | ✓ | ╳ | ✓ | ✓ | ✓ |
|  | ╳ | ╳ | ✓ | ✓ | ✓ |
|  | ╳ | ╳ | ✓ | ✓ | ✓ |
|  | ╳ | ╳ | ✓ | ✓ | ✓ |
 -->

## Border radius

This property is quite simple but very useful. Unfortunately, it cannot draw a squircle... ***yet***.

<div class="examples-BR">
<div class="example example-BR-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.circle {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.ellipse {
  width: 100px;
  aspect-ratio: 2/1;
  border-radius: 50%;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.sausage {
  width: 100px;
  aspect-ratio: 2/1;
  /* 99em, 100vw, or any other big number */
  border-radius: 99em;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-4">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.semicircle {
  width: 100px;
  aspect-ratio: 2/1;
  /* don't use % here,
     use big number or height */
  border-radius: 50px 50px 0 0;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-5">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.quadrant {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 0 100% 0 0;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-6">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.leaf {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 0 100%;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-7">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.blob {
  width: 100px;
  aspect-ratio: 1/1;
  /* watch https://www.youtube.com/watch?v=Q8HZqdrhlVc
     to see how it works */
  border-radius: 40% 60% 30% 70% / 
                 35% 50% 50% 65%;
  background: #FFFFFF;
}</code></pre>
</div>
</div>

<style>
  .examples-BR .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-BR .example__view {
    aspect-ratio: 1/1;
  }
  .examples-BR .block {
    position: absolute;
    top: 50%; left: 50%;
    background: light-dark(#333, #fff);
    translate: -50% -50%;
  }
  .example-BR-1 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 50%;
  }
  .example-BR-2 .block {
    width: 60%; aspect-ratio: 2/1;
    border-radius: 50%;
  }
  .example-BR-3 .block {
    width: 60%; aspect-ratio: 2/1;
    border-radius: 99em;
  }
  .example-BR-4 .block {
    width: 60%; aspect-ratio: 2/1;  
    border-radius: 99em 99em 0 0;
  }
  .example-BR-5 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 0 100% 0 0;
  }
  .example-BR-6 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 0 100%;
  }
  .example-BR-7 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 40% 60% 30% 70% / 35% 50% 50% 65%;
  }
</style>

## Box-shadow

✅ This property can help you to copy the shape of your block. 

✅ It copies a shape even if the block doesn't have a background.

✅ It draws a shape both inside and ouside of the block.

✅ The shadow could be bigger or smaller than the original block. It controls by the spread value `box-shadow: x y blur spread color`.

✅ There could be any amount of shadows.

⚠️ It copies the shape of the root element. Chindren don't affect the shape of the shadow.

❌ The shadow is not visible behind the root element even if it has no background.

❌ Can't copy the complex shape.

[Pixelate image generator](https://fjolt.com/article/css-pixel-art-generator)

<div class="examples-BS">
<div class="example example-BS-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.inner-shadows {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  /* there could be any number of shadows */
  box-shadow:
    inset 0 0 0 5px rgba(255 255 255 / .4),
    inset 0 0 0 15px rgba(255 255 255 / .4),
    inset 0 0 0 30px rgba(255 255 255 / .4);
}</code></pre>
</div>
<div class="example example-BS-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.shifted-shadow {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  /* there could be any number of shadows */
  box-shadow:
    inset 10px 10px 0 10px rgba(255 255 255 / .4),
    inset 10px 10px 0 20px rgba(255 255 255 / .4),
    inset 10px 10px 0 30px rgba(255 255 255 / .4);
}</code></pre>
</div>
<div class="example example-BS-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.outer-shadows {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  /* you can use both inner and outer shadows */
  box-shadow:
    10px 10px 0 10px rgba(255 255 255 / .4),
    10px 10px 0 20px rgba(255 255 255 / .4),
    10px 10px 0 30px rgba(255 255 255 / .4);
}</code></pre>
</div>
<div class="example example-BS-4">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.moon {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  box-shadow:
    inset 50px -40px 0 -20px #FFFFFF;
}</code></pre>
</div>
<div class="example example-BS-5">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.duplication {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  /* shadow could be bigger or smaller
     change the fourth number to do it */
  box-shadow:
    -100px 0 0 10px #FFFFFF,
     100px 0 0 -10px #FFFFFF;
  /* this block doesn't have a background
     but you can't see the shadow through */
}</code></pre>
</div>
<div class="example example-BS-6">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mario {
  width: 10px;
  height: 10px;
  box-shadow: 
    20px 0 #F63911, 30px 0 #F63911, 50px 0 #F63911, 50px 0 #F63911, 60px 0 #F63911, 10px 10px #F63911, 
    20px 10px #F63911, 40px 0px #F63911, 30px 10px #F63911, 40px 10px #F63911, 50px 10px #F63911, 60px 10px #F63911, 
    70px 10px #F63911, 90px 10px #F63911, 10px 20px #8C5610, 20px 20px #8C5610, 30px 20px #8C5610, 10px 30px #8C5610, 
    0px 30px #8C5610, 0px 40px #8C5610, 20px 40px #8C5610, 30px 40px #8C5610, 0px 50px #8C5610, 10px 50px #8C5610,
    10px 30px #FFB56B, 10px 40px #FFB56B, 40px 40px #FFB56B, 40px 30px #FFB56B, 30px 30px #FFB56B, 40px 20px #FFB56B, 
    50px 20px #FFB56B, 50px 30px #FFB56B, 50px 40px #FFB56B, 50px 50px #FFB56B, 40px 50px #FFB56B, 30px 50px #FFB56B, 
    20px 50px #FFB56B, 20px 60px #FFB56B, 30px 60px #FFB56B, 40px 60px #FFB56B, 50px 60px #FFB56B, 60px 60px #FFB56B, 
    70px 60px #FFB56B, 80px 60px #FFB56B, 80px 40px #FFB56B, 60px 40px #FFB56B, 90px 40px #FFB56B, 100px 40px #FFB56B, 
    90px 30px #FFB56B, 80px 30px #FFB56B, 70px 30px #FFB56B, 70px 20px #FFB56B, 60px 20px #000000, 60px 30px #000000, 
    70px 40px #000000, 60px 50px #000000, 70px 50px #000000, 80px 50px #000000, 90px 50px #000000, 80px 10px #F63911, 20px 30px #FFB56B;
}</code></pre>
</div>
</div>

<style>
  .examples-BS .example {
    grid-template-columns: 1fr 2fr;
  }
  /* .examples-BS .example__view {
    aspect-ratio: 1/1;
  } */
  .examples-BS .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-BS-1 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 50%;
    color: color-mix(in srgb, light-dark(#333, #fff) 40%, transparent);
    box-shadow: inset 0 0 0 10px currentColor, inset 0 0 0 20px currentColor, inset 0 0 0 30px currentColor;
  }
  .example-BS-2 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 50%;
    color: color-mix(in srgb, light-dark(#333, #fff) 40%, transparent);
    box-shadow: inset 10px 10px 0 10px currentColor, inset 10px 10px 0 20px currentColor, inset 10px 10px 0 30px currentColor;
  }
  .example-BS-3 .block {
    width: 40%; aspect-ratio: 1/1;
    border-radius: 50%;
    color: color-mix(in srgb, light-dark(#333, #fff) 40%, transparent);
    box-shadow: 10px 10px 0 10px currentColor, 10px 10px 0 20px currentColor, 10px 10px 0 30px currentColor;
  }
  .example-BS-4 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 50%;
    box-shadow: inset 50px -40px 0 -20px light-dark(#333, #fff);
  }
  .example-BS-5 .block {
    width: 30%; aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid light-dark(#333, #fff);
    box-shadow: -50px 0 0 10px light-dark(#333, #fff), 50px 0 0 -10px light-dark(#333, #fff);
  }
  .example-BS-6 .block {
    width: 10px; height: 10px;
    font-size: 10px;
    box-shadow: 
      -3em -4em #F63911, -2em -4em #F63911, 0 -4em #F63911, 0 -4em #F63911, 1em -4em #F63911, -4em -3em #F63911, 
      -3em -3em #F63911, -1em -4em #F63911, -2em -3em #F63911, -1em -3em #F63911, 0 -3em #F63911, 1em -3em #F63911, 
      2em -3em #F63911, 4em -3em #F63911, -4em -2em #8C5610, -3em -2em #8C5610, -2em -2em #8C5610, -4em -1em #8C5610, 
      -5em -1em #8C5610, -5em 0 #8C5610, -3em 0 #8C5610, -2em 0 #8C5610, -5em 1em #8C5610, -4em 1em #8C5610,
      -4em -1em #FFB56B, -4em 0 #FFB56B, -1em 0 #FFB56B, -1em -1em #FFB56B, -2em -1em #FFB56B, -1em -2em #FFB56B, 
      0 -2em #FFB56B, 0 -1em #FFB56B, 0 0 #FFB56B, 0 1em #FFB56B, -1em 1em #FFB56B, -2em 1em #FFB56B, 
      -3em 1em #FFB56B, -3em 2em #FFB56B, -2em 2em #FFB56B, -1em 2em #FFB56B, 0 2em #FFB56B, 1em 2em #FFB56B, 
      2em 2em #FFB56B, 3em 2em #FFB56B, 3em 0 #FFB56B, 1em 0 #FFB56B, 4em 0 #FFB56B, 5em 0 #FFB56B, 
      4em -1em #FFB56B, 3em -1em #FFB56B, 2em -1em #FFB56B, 2em -2em #FFB56B, 1em -2em #000000, 1em -1em #000000, 
      2em 0 #000000, 1em 1em #000000, 2em 1em #000000, 3em 1em #000000, 4em 1em #000000, 3em -3em #F63911, -3em -1em #FFB56B;
  }
</style>

## Drop shadow

✅ This property can help you to copy the shape of your block.

✅ Can't copy the complex shape.

✅ There could be any amount of shadows.

✅ The shadow is visible behind the root element.

⚠️ It copies all the non-transparent pixels within this block.

⚠️ It copies the shape of the root element and all the chindren inside.

⚠️ Every next `drop-shadow` copies the shape of the original block and all the shadows before.

❌ It draws a shape only ouside of the block.

❌ The shadow could only be the same size as the original block.

<div class="examples-DS">
<div class="example example-DS-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.duplication {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  filter: drop-shadow(0px 40px 0 #FFFFFF);
}</code></pre>
</div>
<div class="example example-DS-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.duplication {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  filter: drop-shadow(0px 40px 0 #00CECB) 
          drop-shadow(40px 0 0 #FF5E5B);
}</code></pre>
</div>
<div class="example example-DS-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.duplication {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  filter: drop-shadow(0px 40px 0 #FF5E5B);
}
.duplication::before {
  content: '';
  display: block;
  width: 90%; aspect-ratio: 1 / 1;
  margin: 5%;
  background-color: #FFFFFF;
  rotate: 45deg;
}</code></pre>
</div>
</div>

<style>
  .examples-DS .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-DS .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-DS-1 .block {
    width: 30%; aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid light-dark(#333, #fff);
    filter: drop-shadow(0px 40px 0 light-dark(#333, #fff));
    translate: -50% -60px;
  }
  .example-DS-2 .block {
    width: 30%; aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid light-dark(#333, #fff);
    filter: drop-shadow(0px 40px 0 #00CECB) drop-shadow(40px 0 0 #FF5E5B);
    translate: -50px -60px;
  }
  .example-DS-3 .block {
    width: 30%; aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid light-dark(#333, #fff);
    filter: drop-shadow(0px 40px 0 #FF5E5B);
    translate: -50% -60px;
  }
  .example-DS-3 .block::before {
    content: '';
    display: block;
    width: 90%; aspect-ratio: 1 / 1;
    margin: 5%;
    background-color: light-dark(#333, #fff);
    rotate: 45deg;
  }
</style>

## Mask

Masks create a clipping region that defines which part of an element should be visible. Parts within the region are shown, while those outside are hidden. If you've eved used a `background` to draw a gradient, you already know how to use `mask`. There are the same family-propeties: `mask-image`, `mask-position`, `mask-size`, `mask-repeat`.

<div class="examples-M">
<div class="example example-M-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  mask-image: linear-gradient(45deg, black 50%, transparent 50%);
}</code></pre>
</div>
<div class="example example-M-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  mask-image: linear-gradient(45deg, black 50%, transparent 50%);
  mask-size: 10px 10px;
}</code></pre>
</div>
<div class="example example-M-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  mask-image: radial-gradient(closest-side, white 100%, transparent 0),
              linear-gradient(45deg, black 50%, transparent 50%);
}</code></pre>
</div>
</div>

<style>
  .examples-M .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-M .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-M-1 .block {
    width: 60%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    mask-image: linear-gradient(45deg, black 50%, transparent 50%);
  }
  .example-M-2 .block {
    width: 60%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    mask-image: linear-gradient(45deg, black 50%, transparent 50%);
    mask-size: 10px 10px;
  }
  .example-M-3 .block {
    width: 60%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    mask-image: radial-gradient(closest-side, white 100%, transparent 0),
                linear-gradient(45deg, black 50%, transparent 50%);
  }
</style>

## Clip path

Masks create a clipping region that defines which part of an element should be visible. Parts within the region are shown, while those outside are hidden.

[Clip-path generator](https://bennettfeely.com/clippy/)

[Clip-path stars generator](https://css-generators.com/starburst-shape/)

[Clip-path wawes generator](https://css-generators.com/wavy-shapes/)

[Clip-path polygons generator](https://css-generators.com/polygon-shape/)

<div class="examples-CP">
<div class="example example-CP-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  clip-path: circle(50% at 50% 50%);
}</code></pre>
</div>
<div class="example example-CP-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 2/1;
  background-color: #FFFFFF;
  clip-path: ellipse(50% 50% at 50% 50%);
}</code></pre>
</div>
<div class="example example-CP-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  clip-path: polygon(50% 0, 70% 25%, 100% 38%, 
             83% 66%, 81% 100%, 50% 92%, 19% 100%, 
             17% 67%, 0 38%, 30% 25%);
}</code></pre>
</div>
</div>

<style>
  .examples-CP .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-CP .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-CP-1 .block {
    width: 60%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    clip-path: circle(50% at 50% 50%);
  }
  .example-CP-2 .block {
    width: 60%; aspect-ratio: 2/1;
    background-color: light-dark(#333, #fff);
    clip-path: ellipse(50% 50% at 50% 50%);
  }
  .example-CP-3 .block {
    width: 60%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    clip-path: polygon(50% 0, 70% 25%, 100% 38%, 83% 66%, 81% 100%, 50% 92%, 19% 100%, 17% 67%, 0 38%, 30% 25%);
  }
</style>

## Background

The most powerful property. You can create a world with just a gradient and one block!

[Gradient patterns](https://css-pattern.com/)

<div class="examples-BG">
<div class="example example-BG-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.background {
  width: 100px;
  aspect-ratio: 1/1;
  background-image: linear-gradient(0deg, #FFFFFF 2px, transparent 2px 4px);
  background-size: 100% 4px;
}</code></pre>
</div>
<div class="example example-BG-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.background {
  width: 100px;
  aspect-ratio: 1/1;
  background-image: radial-gradient(closest-side, #FFFFFF 100%, transparent 0);
  background-size: 10px 10px;
}</code></pre>
</div>
<div class="example example-BG-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.background {
  width: 100px;
  aspect-ratio: 1/1;
  background-image: conic-gradient(#FFFFFF 45deg, transparent 45deg 135deg,
                    #FFFFFF 135deg 225deg, transparent 225deg 315deg, #FFFFFF 315deg);
  background-size: 10px 10px;
}</code></pre>
</div>
<div class="example example-BG-4">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.background {
  width: 100px;
  aspect-ratio: 1/1;
  background-image: radial-gradient(closest-side, #FFFFFF 100%, transparent 0),
                    radial-gradient(closest-side, #FFFFFF 100%, transparent 0),
                    linear-gradient(#FFFFFF, #FFFFFF);
  background-position: 25% 0px, 75% 0px, 0px 100%;
  background-size: 30% 60%, 30% 60%, 100% 20%;
  background-repeat: no-repeat;
}</code></pre>
</div>
</div>

<style>
  .examples-BG .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-BG .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-BG-1 .block {
    width: 60%; aspect-ratio: 1/1;
    background-image: linear-gradient(0deg, light-dark(#333, #fff) 2px, transparent 2px 4px);
    background-size: 100% 4px;
  }
  .example-BG-2 .block {
    width: 60%; aspect-ratio: 1/1;
    background-image: radial-gradient(closest-side, light-dark(#333, #fff) 100%, transparent 0);
    background-size: 10px 10px;
  }
  .example-BG-3 .block {
    width: 60%; aspect-ratio: 1/1;
    background-image: conic-gradient(light-dark(#333, #fff) 45deg, transparent 45deg 135deg,
                      light-dark(#333, #fff) 135deg 225deg, transparent 225deg 315deg, light-dark(#333, #fff) 315deg);
    background-size: 10px 10px;
  }
  .example-BG-4 .block {
    width: 60%; aspect-ratio: 1/1;
    background-image: radial-gradient(closest-side, light-dark(#333, #fff) 100%, transparent 0),
                      radial-gradient(closest-side, light-dark(#333, #fff) 100%, transparent 0),
                      linear-gradient(light-dark(#333, #fff), light-dark(#333, #fff));
    background-position: 25% 0px, 75% 0px, 0px 100%;
    background-size: 30% 60%, 30% 60%, 100% 20%;
    background-repeat: no-repeat;
  }
</style>

## Transform

<div class="examples-T">
<div class="example example-T-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.transform {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  rotate: 45deg;
}</code></pre>
</div>
<div class="example example-T-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.transform {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  transform: skew(10deg);
}</code></pre>
</div>
</div>

<style>
  .examples-T .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-T .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-T-1 .block {
    width: 30%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    rotate: 45deg;
  }
  .example-T-2 .block {
    width: 30%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    transform: skew(10deg);
  }
</style>

## Border

This approach is useful for blocks with no content and plain background.

<div class="examples-B">
<div class="example example-B-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.border {
  border-style: solid;
  border-color: transparent transparent #FFFFFF;
  border-width: 0 50px 100px;
}</code></pre>
</div>
<div class="example example-B-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.border {
  border-style: solid;
  border-color: transparent transparent #FFFFFF;
  border-width: 0 0 100px 100px;
}</code></pre>
</div>
<div class="example example-B-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.border {
  width: 30%;
  border-style: solid;
  border-color: transparent transparent #FFFFFF transparent;
  border-width: 0 20px 100px 20px;
}</code></pre>
</div>
</div>

<style>
  .examples-B .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-B .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50px -50px;
  }
  .example-B-1 .block {
    border-style: solid;
    border-color: transparent transparent light-dark(#333, #fff);
    border-width: 0 50px 100px;
  }
  .example-B-2 .block {
    border-style: solid;
    border-color: transparent transparent light-dark(#333, #fff);
    border-width: 0 0 100px 100px;
  }
  .example-B-3 .block {
    width: 30%;
    border-style: solid;
    border-color: transparent transparent light-dark(#333, #fff) transparent;
    border-width: 0 20px 100px 20px;
  }
</style>
