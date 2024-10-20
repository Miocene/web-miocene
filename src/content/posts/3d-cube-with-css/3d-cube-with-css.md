---
pubDate: 2024-10-13
title: 3D Cube With CSS
description: "This tutorial will take you step by step through crafting basic 3D objects — no special tools required. Get ready to create, experiment, and even design your own cubic characters!"
lightImage: "./3d-cube-with-css-light.png"
darkImage: "./3d-cube-with-css-dark.png"
tags: ["3D", "CSS art"]
---

Hey there, CSS fans! This is part of a series where we’ll boost our 3D skills from beginner to advanced. Today, we’re diving into how to create a 3D space and a basic 3D object using CSS.

<details>
  <summary>Watch video</summary>
  
  <iframe width="100%" height="400" src="https://www.youtube.com/embed/dgEHpkm0xTI?si=Uqux71cvzGKPHVfd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

</details>


## The web is flat

We usually rotate something to see that it has volume. And we can do it in CSS! `rotate` [property](https://developer.mozilla.org/en-US/docs/Web/CSS/rotate) or `rotate()` [function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate) can rotate blocks in all three dimensions: x, y, z.

<div class="example-grid">
<div class="example example1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">rotate: x 360deg;</code></pre>
</div>
<div class="example example2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">rotate: y 360deg;</code></pre>
</div>
<div class="example example3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">rotate: z 360deg;</code></pre>
</div>
</div>

<style>
  .example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }
  .example1 .example__view,
  .example2 .example__view,
  .example3 .example__view {
    aspect-ratio: 1/1;
  }
  .example1 .block,
  .example2 .block,
  .example3 .block {
    position: absolute;
    top: 50%; left: 50%;
    width: 60%; aspect-ratio: 1/1;
    background: light-dark(#333, #fff);
    border-radius: 4px;
    translate: -50% -50%;
  }
  .example1 .block {
    animation: example1 5s linear infinite;
  }
  @keyframes example1 {
    to { rotate: x 360deg; }
  }
  .example2 .block {
    animation: example2 5s linear infinite;
  }
  @keyframes example2 {
    to { rotate: y 360deg; }
  }
  .example3 .block {
    animation: example3 5s linear infinite;
  }
  @keyframes example3 {
    to { rotate: z 360deg; }
  }
</style>

But it looks like shrinking without `perspective` [property](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective) or `perspective()` [function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/perspective).

<div class="example-grid">
<div class="example example4">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.parent {
  perspective: 400px;
}
.square {
  rotate: x 360deg;
}</code></pre>
</div>
<div class="example example5">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.parent {
  perspective: 400px;
}
.square {
  rotate: y 360deg;
}</code></pre>
</div>
<div class="example example6">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.parent {
  perspective: 400px;
}
.square {
  rotate: z 360deg;
}</code></pre>
</div>
</div>

<style>
  .example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }
  .example4 .example__view,
  .example5 .example__view,
  .example6 .example__view {
    aspect-ratio: 1/1;
    perspective: 400px;
  }
  .example4 .block,
  .example5 .block,
  .example6 .block {
    position: absolute;
    top: 50%; left: 50%;
    width: 60%; aspect-ratio: 1/1;
    background: light-dark(#333, #fff);
    border-radius: 4px;
    translate: -50% -50%;
  }
  .example4 .block {
    animation: example4 5s linear infinite;
  }
  @keyframes example4 {
    to { rotate: x 360deg; }
  }
  .example5 .block {
    animation: example5 5s linear infinite;
  }
  @keyframes example5 {
    to { rotate: y 360deg; }
  }
  .example6 .block {
    animation: example6 5s linear infinite;
  }
  @keyframes example6 {
    to { rotate: z 360deg; }
  }
</style>

Now, it looks like 3D, but it’s not. It’s a flat projection of a 3D transformation. And it’s ok if you need to transform only one object. But if you need to place a few objects into one 3D space — it won’t work.

<div class="example example7">
  <div class="example__view">
    <div class="block1"></div>
    <div class="block2"></div>
  </div>
  <pre class="example__code"><code class="language-css">.parent {
  perspective: 1000px;
}
.white-square {
  rotate: y 360deg;
}
.red-square {
  rotate: x 360deg;
}</code></pre>
</div>

<style>
  .example7 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .example7 .example__view {
    height: 300px;
    perspective: 1000px;
  }
  .example7 .block1,
  .example7 .block2 {
    position: absolute;
    top: 50%; left: 50%;
    width: 200px; aspect-ratio: 1/1;
    border-radius: 4px;
    translate: -50% -50%;
  }
  .example7 .block1 {
    background: #FF5E5B;
    animation: example71 5s linear infinite;
  }
  .example7 .block2 {
    background: light-dark(#333, #fff);
    animation: example72 5s linear infinite;
  }
  @keyframes example71 {
    to { rotate: x 360deg; }
  }
  @keyframes example72 {
    to { rotate: y 360deg; }
  }
</style>

We can fix it using a `transform-style` [property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style). It says all the direct children of the block should live in one 3D space. **It’s not inheritable, so you need to apply this property to every parent element. Usually, I apply it to all the elements within my 3D scene.

<div class="example example8">
  <div class="example__view">
    <div class="block1"></div>
    <div class="block2"></div>
  </div>
  <pre class="example__code"><code class="language-css">.parent, .parent * {
  transform-style: preserve-3d;
}
.white-square {
  rotate: y 360deg;
}
.red-square {
  rotate: x 360deg;
}</code></pre>
</div>

<style>
  .example8 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .example8 .example__view {
    height: 300px;
    transform-style: preserve-3d;
  }
  .example8 .block1,
  .example8 .block2 {
    position: absolute;
    top: 50%; left: 50%;
    width: 200px; aspect-ratio: 1/1;
    border-radius: 4px;
    translate: -50% -50%;
  }
  .example8 .block1 {
    background: #FF5E5B;
    animation: example81 5s linear infinite;
  }
  .example8 .block2 {
    background: light-dark(#333, #fff);
    animation: example82 5s linear infinite;
  }
  @keyframes example81 {
    to { rotate: x 360deg; }
  }
  @keyframes example82 {
    to { rotate: y 360deg; }
  }
</style>

## Perspective

We can use the `perspective` [property](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective) to change the distance between the user and the (0, 0, 0) point of your 3D scene.

<div class="example example9" style="--perspective: 500px">
  <div class="example__view">
    <div class="block"></div>
    <input class="range" type="range" id="perspective" name="perspective" min="150" max="1000"
           onchange="updatePerspective(this.value)" />
  </div>
</div>

<style>
  .example9 .range {
    position: absolute;
    bottom: 16px; left: 50%;
    translate: -50%;
    z-index: 999;
  }
  .example9 .example__view {
    height: 300px;
    transform-style: preserve-3d;
    perspective: var(--perspective);
  }
  .example9 .block {
    position: absolute;
    top: 50%; left: 50%;
    width: 200px; aspect-ratio: 1/1;
    border-radius: 4px;
    background: light-dark(#333, #fff);
    rotate: x 80deg;
    translate: -50% -50%;
  }
</style>

<script>
  const perspectiveExample = document.querySelector('.example9')
  function updatePerspective(value) {
    perspectiveExample.setAttribute('style',`--perspective: ${value}px`);
  }
</script>

You can experiment with this number to find the best perspective for your scene. For most scenes, I prefer the default one.

Since it’s a distance between the user and the (0, 0, 0) point of your 3D scene, the position of this point makes a big difference for the final picture.

<div class="example example10">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.parent {
  transform-style: preserve-3d;
  perspective: 1000px;
  perspective-origin: center center;
}</code></pre>
</div>

<style>
  .example10 .example__view {
    height: 300px;
    transform-style: preserve-3d;
    perspective: 1000px;
    perspective-origin: center center;
  }
  .example10 .example__view::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 5px; aspect-ratio: 1/1;
    border-radius: 99em;
    background: #FF5E5B;
    translate: -50% -50%;
  }
  .example10 .block {
    position: absolute;
    top: 50%; left: 50%;
    width: 200px; aspect-ratio: 1/1;
    border-radius: 4px;
    background: light-dark(#333, #fff);
    rotate: x 80deg;
    translate: -50% -50%;
    animation: example10 5s linear infinite;
  }
  @keyframes example10 {
    0%, 100% { translate: -100% -100%; }
    25% { translate: 0% -100%; }
    50% { translate: 0% 0%; }
    75% { translate: -100% 0%; }
  }
</style>

## Basic 3D object

It’s time for our first 3D object! Every 3D editor starts from a sphere, cube, or pyramid as a basic shape. However, since CSS is not a 3D tool, we have no 3D objects at all. We need to create them from scratch. And the easiest one is a cube.

The cube object consists of six faces. One div can create three faces: the element itself and two of its pseudo-elements. And we need one more div with its pseudo-elements.

<div class="example example11">
  <div class="example__view">
    <svg width="1322" height="353" viewBox="0 0 1322 353" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" width="200" height="200" rx="40" fill="light-dark(#333, #fff)"/>
      <circle cx="101" cy="100" r="16" fill="light-dark(#fff, #333)"/>
      <rect x="225" width="200" height="200" rx="40" fill="light-dark(#333, #fff)"/>
      <circle cx="296" cy="129" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="354" cy="71" r="16" fill="light-dark(#fff, #333)"/>
      <rect x="449" width="200" height="200" rx="40" fill="light-dark(#333, #fff)"/>
      <circle cx="510" cy="139" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="549" cy="100" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="588" cy="61" r="16" fill="light-dark(#fff, #333)"/>
      <rect x="673" width="200" height="200" rx="40" fill="light-dark(#333, #fff)"/>
      <circle cx="744" cy="129" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="802" cy="129" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="802" cy="71" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="744" cy="71" r="16" fill="light-dark(#fff, #333)"/>
      <rect x="897" width="200" height="200" rx="40" fill="light-dark(#333, #fff)"/>
      <circle cx="958" cy="139" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="1036" cy="139" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="997" cy="100" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="1036" cy="61" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="958" cy="61" r="16" fill="light-dark(#fff, #333)"/>
      <rect x="1121" width="200" height="200" rx="40" fill="light-dark(#333, #fff)"/>
      <circle cx="1190" cy="152" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="1252" cy="152" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="1252" cy="100" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="1252" cy="48" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="1190" cy="100" r="16" fill="light-dark(#fff, #333)"/>
      <circle cx="1190" cy="48" r="16" fill="light-dark(#fff, #333)"/>
      <path d="M1 240V240C1 245.523 5.47715 250 11 250H301.911C310.292 250 318.329 253.329 324.255 259.255V259.255C324.667 259.667 325.333 259.667 325.745 259.255V259.255C331.671 253.329 339.708 250 348.089 250H639C644.523 250 649 245.523 649 240V240" stroke="light-dark(#333, #fff)" stroke-width="2" stroke-linecap="round"/>
      <path d="M673 240V240C673 245.523 677.477 250 683 250H973.911C982.292 250 990.329 253.329 996.255 259.255V259.255C996.667 259.667 997.333 259.667 997.745 259.255V259.255C1003.67 253.329 1011.71 250 1020.09 250H1311C1316.52 250 1321 245.523 1321 240V240" stroke="light-dark(#333, #fff)" stroke-width="2" stroke-linecap="round"/>
      <path d="M301.279 334.8H301.079C299.413 338 296.763 339.6 293.129 339.6C289.963 339.6 287.479 338.417 285.679 336.05C283.913 333.683 283.029 330.367 283.029 326.1C283.029 321.833 283.913 318.517 285.679 316.15C287.479 313.783 289.963 312.6 293.129 312.6C296.763 312.6 299.413 314.2 301.079 317.4H301.279V302H305.279V339H301.279V334.8ZM294.679 336.05C295.579 336.05 296.429 335.933 297.229 335.7C298.029 335.467 298.729 335.133 299.329 334.7C299.929 334.233 300.396 333.683 300.729 333.05C301.096 332.383 301.279 331.617 301.279 330.75V321.45C301.279 320.583 301.096 319.833 300.729 319.2C300.396 318.533 299.929 317.983 299.329 317.55C298.729 317.083 298.029 316.733 297.229 316.5C296.429 316.267 295.579 316.15 294.679 316.15C292.346 316.15 290.529 316.867 289.229 318.3C287.963 319.7 287.329 321.567 287.329 323.9V328.3C287.329 330.633 287.963 332.517 289.229 333.95C290.529 335.35 292.346 336.05 294.679 336.05ZM326.61 307.5C325.443 307.5 324.626 307.267 324.16 306.8C323.693 306.3 323.46 305.683 323.46 304.95V304.15C323.46 303.417 323.693 302.817 324.16 302.35C324.626 301.85 325.443 301.6 326.61 301.6C327.776 301.6 328.593 301.85 329.06 302.35C329.526 302.817 329.76 303.417 329.76 304.15V304.95C329.76 305.683 329.526 306.3 329.06 306.8C328.593 307.267 327.776 307.5 326.61 307.5ZM315.31 335.6H324.61V316.6H315.31V313.2H328.61V335.6H337.31V339H315.31V335.6ZM352.44 339L343.19 313.2H347.24L350.94 324L354.94 335.65H355.14L359.14 324L362.84 313.2H366.79L357.54 339H352.44Z" fill="light-dark(#333, #fff)"/>
      <path d="M973.279 334.8H973.079C971.413 338 968.763 339.6 965.129 339.6C961.963 339.6 959.479 338.417 957.679 336.05C955.913 333.683 955.029 330.367 955.029 326.1C955.029 321.833 955.913 318.517 957.679 316.15C959.479 313.783 961.963 312.6 965.129 312.6C968.763 312.6 971.413 314.2 973.079 317.4H973.279V302H977.279V339H973.279V334.8ZM966.679 336.05C967.579 336.05 968.429 335.933 969.229 335.7C970.029 335.467 970.729 335.133 971.329 334.7C971.929 334.233 972.396 333.683 972.729 333.05C973.096 332.383 973.279 331.617 973.279 330.75V321.45C973.279 320.583 973.096 319.833 972.729 319.2C972.396 318.533 971.929 317.983 971.329 317.55C970.729 317.083 970.029 316.733 969.229 316.5C968.429 316.267 967.579 316.15 966.679 316.15C964.346 316.15 962.529 316.867 961.229 318.3C959.963 319.7 959.329 321.567 959.329 323.9V328.3C959.329 330.633 959.963 332.517 961.229 333.95C962.529 335.35 964.346 336.05 966.679 336.05ZM998.61 307.5C997.443 307.5 996.626 307.267 996.16 306.8C995.693 306.3 995.46 305.683 995.46 304.95V304.15C995.46 303.417 995.693 302.817 996.16 302.35C996.626 301.85 997.443 301.6 998.61 301.6C999.776 301.6 1000.59 301.85 1001.06 302.35C1001.53 302.817 1001.76 303.417 1001.76 304.15V304.95C1001.76 305.683 1001.53 306.3 1001.06 306.8C1000.59 307.267 999.776 307.5 998.61 307.5ZM987.31 335.6H996.61V316.6H987.31V313.2H1000.61V335.6H1009.31V339H987.31V335.6ZM1024.44 339L1015.19 313.2H1019.24L1022.94 324L1026.94 335.65H1027.14L1031.14 324L1034.84 313.2H1038.79L1029.54 339H1024.44Z" fill="light-dark(#333, #fff)"/>
      </svg>
  </div>
</div>

<style>
  .example11 .example__view {
    padding: 10% 10% 5%;
  }
  .example11 svg {
    width: 100%; height: auto;
    margin: auto;
  }
</style>

I keep the root element unchanged and place all the elements on top. 

We need to define their anchor points to place all the elements in the right places. The anchor point controls the direction of the animation. In CSS, it is defined with the `transform-origin` [property](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin). You can use any units you want and place this point anywhere within or outside the block. You can even change the z-axis!

<div class="example-grid">
<div class="example example12">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">transform-origin: 10% 30%;</code></pre>
</div>
<div class="example example13">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">transform-origin: 50% -20px</code></pre>
</div>
</div>

<style>
  .example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  .example-grid .example {
    margin: 0;
  }
  .example12 .example__view,
  .example13 .example__view {
    aspect-ratio: 1/1;
    perspective: 400px;
  }
  .example12 .block,
  .example13 .block {
    position: absolute;
    top: 50%; left: 50%;
    width: 20%; aspect-ratio: 1/1;
    background: light-dark(#333, #fff);
    border-radius: 4px;
    translate: -50% -50%;
  }
  .example12 .block::before,
  .example13 .block::before {
    content: '';
    position: absolute;
    width: 5px; aspect-ratio: 1/1;
    background-color: #FF5E5B;
    border-radius: 50%;
    translate: -50% -50%;
  }
  .example12 .block::before {
    top: 30%; left: 10%;
  }
  .example13 .block::before {
    top: -20px; left: 50%;
  }
  .example12 .block {
    transform-origin: 10% 30%;
    animation: example12 5s linear infinite;
  }
  @keyframes example12 {
    to { rotate: 360deg; }
  }
  .example13 .block {
    transform-origin: 50% -20px;
    animation: example13 5s linear infinite;
  }
  @keyframes example13 {
    to { rotate: 360deg; }
  }
</style>

Now, let’s define anchor points for all the cube faces and rotate them!

<div class="example-grid1">
<div class="example example19">
  <div class="example__view">
    <div class="cube"></div>
  </div>
  <pre class="example__code"><code class="language-css">.cube {
  transform-origin: center center;
}</code></pre>
</div>
<div class="example example14">
  <div class="example__view">
    <div class="cube">
    </div>
  </div>
  <pre class="example__code"><code class="language-css">.cube::before {
  transform-origin: top center;
  rotate: x 90deg;
}</code></pre>
</div>
<div class="example example15">
  <div class="example__view">
    <div class="cube">
    </div>
  </div>
  <pre class="example__code"><code class="language-css">.cube::after {
  transform-origin: center left;
  rotate: y -90deg;
}</code></pre>
</div>
<div class="example example16">
  <div class="example__view">
    <div class="cube">
      <div></div>
    </div>
  </div>
  <pre class="example__code"><code class="language-css">.cube div {
  transform-origin: center right;
  rotate: y 90deg;
}</code></pre>
</div>
<div class="example example17">
  <div class="example__view">
    <div class="cube">
      <div></div>
    </div>
  </div>
  <pre class="example__code"><code class="language-css">.cube div::before {
  transform-origin: bottom center;
  rotate: x 90deg;
}</code></pre>
</div>
<div class="example example18">
  <div class="example__view">
    <div class="cube">
      <div></div>
    </div>
  </div>
  <pre class="example__code"><code class="language-css">.cube div::after {
  transform-origin: left center;
  rotate: y 90deg;
}</code></pre>
</div>
</div>

<style>
  .example-grid1 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  .example-grid1 .example {
    margin: 0;
  }
  .example-grid1 .example__view {
    aspect-ratio: 1/1;
    perspective: 10000px;
    transform-style: preserve-3d;
  }
  .example-grid1 .cube {
    top: 50%; left: 50%;
    width: 30%;
    background-color: light-dark(color(srgb 0.2 0.2 0.2 / 0.2), color(srgb 1 1 1 / 0.2));
    transform-style: preserve-3d;
    translate: -50% 0;
    transform: rotateX(70deg) rotateZ(25deg);
  }
  .example-grid1 .cube,
  .example-grid1 .cube::before,
  .example-grid1 .cube::after,
  .example-grid1 .cube div,
  .example-grid1 .cube div::before,
  .example-grid1 .cube div::after {
    content: '';
    position: absolute;
    aspect-ratio: 1/1;
    transform-style: preserve-3d;
  }
  .example14 .cube::before,
  .example15 .cube::after,
  .example16 .cube div,
  .example17 .cube div::before,
  .example18 .cube div::after,
  .example19 .cube {
    background-color: light-dark(#333, #fff);
  }
  .example15 .cube::before,
  .example16 .cube::before, .example16 .cube::after,
  .example17 .cube::before, .example17 .cube::after, .example17 .cube div,
  .example18 .cube::before, .example18 .cube::after, .example18 .cube div, .example18 .cube div::before {
    background-color: light-dark(color(srgb 0.2 0.2 0.2 / 0.2), color(srgb 1 1 1 / 0.2));
  }
  .example-grid1 .cube::before {
    width: 100%;
    transform-origin: top center;
    rotate: x 90deg;
  }
  .example14 .cube::before {
    rotate: x 0deg;
    background-image: radial-gradient(circle at top center, #FF5E5B 4px, transparent 5px);
    animation: example14 2s ease infinite alternate;
  }
  @keyframes example14 {
    to { rotate: x 90deg; }
  }
  .example-grid1 .cube::after {
    width: 100%;
    transform-origin: center left;
    rotate: y -90deg;
    animation: example15 2s ease infinite alternate;
  }
  .example15 .cube::after {
    background-image: radial-gradient(circle at left center, #FF5E5B 4px, transparent 5px);
    rotate: y 0deg;
  }
  @keyframes example15 {
    to { rotate: y -90deg; }
  }
  .example-grid1 .cube div {
    width: 100%;
    transform-origin: center right;
    rotate: y 90deg;
  }
  .example16 .cube div {
    background-image: radial-gradient(circle at right center, #FF5E5B 4px, transparent 5px);
    rotate: y 0deg;
    animation: example16 2s ease infinite alternate;
  }
  @keyframes example16 {
    to { rotate: y 90deg; }
  }
  .example-grid1 .cube div::before {
    width: 100%;
    transform-origin: bottom center;
    rotate: x 90deg;
  }
  .example17 .cube div::before {
    background-image: radial-gradient(circle at center bottom, #FF5E5B 4px, transparent 5px);
    rotate: x 0deg;
    animation: example17 2s ease infinite alternate;
  }
  @keyframes example17 {
    to { rotate: x 90deg; }
  }
  .example-grid1 .cube div::after {
    width: 100%;
    transform-origin: left center;
    rotate: y 90deg;
  }
  .example18 .cube div::after {
    background-image: radial-gradient(circle at left center, #FF5E5B 4px, transparent 5px);
    rotate: y 0deg;
    animation: example18 2s ease infinite alternate;
  }
  @keyframes example18 {
    to { rotate: y 90deg; }
  }
</style>

## Make it prettier ✨

Let’s make our cube prettier! To change the shades of the faces, we can use the `color-mix` [function](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix). I’ll mix the colors with the background color.

<div class="example example20">
  <div class="example__view">
    <div class="cube">
      <div></div>
    </div>
    <input type="color" id="colorInput" name="colorInput" value="#ffffff" onChange="updateColor(value)" />
  </div>
  <pre class="example__code"><code class="language-css">.cube {
  --top-color:    color-mix(in srgb, var(--main-color) 100%, var(--background));
  --front-color:  color-mix(in srgb, var(--main-color) 90%, var(--background));
  --bottom-color: color-mix(in srgb, var(--main-color) 20%, var(--background));
  --back-color:   color-mix(in srgb, var(--main-color) 60%, var(--background));
  --side-color:   color-mix(in srgb, var(--main-color) 80%, var(--background));
  background: var(--bottom-color);
}
.cube::before     { background: var(--side-color); }
.cube::after      { background: var(--back-color); }
.cube div         { background: var(--side-color); }
.cube div::before { background: var(--top-color); }
.cube div::after  { background: var(--front-color); }</code></pre>
</div>

<style>
  #colorInput {
    position: absolute;
    bottom: 20px; left: 50%;
    translate: -50%;
  }
  .example20 .example__view {
    height: 300px;
    transform-style: preserve-3d;
    perspective: 1000px;
    perspective-origin: center center;
  }
  .example20 .cube {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: min(20%, 200px); aspect-ratio: 1/1;
    transform-style: preserve-3d;
    transform: rotateX(75deg) rotateZ(210deg);
    translate: -50% 0;
    animation: example20 7s linear infinite;

    --top-color: color-mix(in srgb, var(--main-color) 100%, var(--color-bg-primary));
    --front-color: color-mix(in srgb, var(--main-color) 90%, var(--color-bg-primary));
    --bottom-color: color-mix(in srgb, var(--main-color) 20%, var(--color-bg-primary));
    --back-color: color-mix(in srgb, var(--main-color) 60%, var(--color-bg-primary));
    --side-color: color-mix(in srgb, var(--main-color) 80%, var(--color-bg-primary));
    background: var(--bottom-color);
  }
  @keyframes example20 {
    to { transform: rotateX(75deg) rotateZ(570deg); }
  }
  @media (prefers-color-scheme: dark) {
    .example20 .cube {
      --main-color: #ffffff;
    }
  }
  @media (prefers-color-scheme: light) {
    .example20 .cube {
      --main-color: #333333;
    }
  }
  .example20 .cube::before,
  .example20 .cube::after,
  .example20 .cube div,
  .example20 .cube div::before,
  .example20 .cube div::after {
    content: '';
    position: absolute;
    width: 100%; aspect-ratio: 1/1;
    transform-style: preserve-3d;
  }
  .example20 .cube::before {
    background: var(--side-color);
    transform-origin: center right;
    rotate: y 90deg;
  }
  .example20 .cube::after {
    background: var(--back-color);
    transform-origin: bottom center;
    rotate: x -90deg;
  }
  .example20 .cube div {
    background: var(--side-color);
    transform-origin: center left;
    rotate: y -90deg;
  }
  .example20 .cube div::before {
    background: var(--top-color);
    transform-origin: center right;
    rotate: y -90deg;
  }
  .example20 .cube div::after {
    background: var(--front-color);
    transform-origin: top center;
    rotate: x -90deg;
  }
</style>

<script>
  const colorExample = document.querySelector('.example20 .cube');
  const colorInput = document.querySelector('#colorInput');
  function updateColor(value) {
    colorExample.setAttribute('style',`--main-color: ${value}`);
  }
  colorInput.setAttribute('value', getComputedStyle(colorExample).getPropertyValue('--main-color'))
</script>

## Make it smarter 🧠 

Now, we can make this cube a little bit more universal. Let’s create three properties: x, y, and z, which are the cube’s width, height, and depth, and then apply them to our cube’s faces.

Now you can change these numbers and see what happens ✨

<div class="example example21">
<div class="example__view">
    <div class="cube">
      <div></div>
    </div>
    <div class="controls">
      <input class="range" type="range" id="xSize" name="xSize" min="50" max="200" value="100"
            onchange="updateSize()" />
      <input class="range" type="range" id="ySize" name="ySize" min="50" max="200" value="100"
            onchange="updateSize()" />
      <input class="range" type="range" id="zSize" name="zSize" min="10" max="150" value="100"
            onchange="updateSize()" />
    </div>
  </div>
  
  <pre class="example__code"><code class="language-css">.cube             { width: var(--x); height: var(--y); }
.cube::before     { width: var(--z); height: var(--y); }
.cube::after      { width: var(--x); height: var(--z); }
.cube div         { width: var(--z); height: var(--y); }
.cube div::before { width: var(--x); height: var(--y); }
.cube div::after  { width: var(--z); height: var(--x); }</code></pre>
</div>

<style>
  .example21 .controls {
    position: absolute;
    bottom: 20px; left: 50%;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    max-width: 100%;
    width: max-content;
    translate: -50%;
  }
  .example21 .example__view {
    height: 300px;
    transform-style: preserve-3d;
    perspective: 1000px;
    perspective-origin: center center;
  }
  .example21 .cube {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform-origin: top center;
    transform-style: preserve-3d;
    transform: rotateX(75deg) rotateZ(210deg);
    translate: -70% 40%;

    --x: 100px; --y: 100px; --z: 100px;
    width: var(--x); height: var(--y);

    --main-color: light-dark(#333, #fff);
    --top-color: color-mix(in srgb, var(--main-color) 100%, var(--color-bg-primary));
    --front-color: color-mix(in srgb, var(--main-color) 90%, var(--color-bg-primary));
    --bottom-color: color-mix(in srgb, var(--main-color) 20%, var(--color-bg-primary));
    --back-color: color-mix(in srgb, var(--main-color) 60%, var(--color-bg-primary));
    --side-color: color-mix(in srgb, var(--main-color) 80%, var(--color-bg-primary));
    background: var(--bottom-color);
  }
  .example21 .cube::before,
  .example21 .cube::after,
  .example21 .cube div,
  .example21 .cube div::before,
  .example21 .cube div::after {
    content: '';
    position: absolute;
    transform-style: preserve-3d;
  }
  .example21 .cube::before {
    right: 0; top: 0;
    width: var(--z); height: var(--y);
    background: var(--side-color);
    transform-origin: center right;
    rotate: y 90deg;
  }
  .example21 .cube::after {
    right: 0; bottom: 0;
    width: var(--x); height: var(--z);
    background: var(--back-color);
    transform-origin: bottom center;
    rotate: x -90deg;
  }
  .example21 .cube div {
    left: 0; top: 0;
    width: var(--z); height: var(--y);
    background: var(--side-color);
    transform-origin: center left;
    rotate: y -90deg;
  }
  .example21 .cube div::before {
    right: 0; bottom: 0;
    width: var(--x); height: var(--y);
    background: var(--top-color);
    transform-origin: center right;
    rotate: y -90deg;
  }
  .example21 .cube div::after {
    right: 0; top: 0;
    width: var(--z); height: var(--x);
    background: var(--front-color);
    transform-origin: top center;
    rotate: x -90deg;
  }
</style>

<script>
  const sizeExample = document.querySelector('.example21 .cube');
  const xSize = document.querySelector('#xSize');
  const ySize = document.querySelector('#ySize');
  const zSize = document.querySelector('#zSize');
  
  function updateSize(value) {
    sizeExample.setAttribute('style',`--x: ${xSize.value}px; --y: ${ySize.value}px; --z: ${zSize.value}px;`);
  }
</script>

## Make it more creative 🐔

Having a universal cube is a great power. Now we can create anything! Do you know the [Minecraft](https://www.google.com/search?q=Minecraft) game? With the cubes, you can make a world.

But let’s start with an animal. I’ll take a chicken, but you can create any animal you want. I copy-paste the cubes N times and call them semantically. Then, I color them with the right colors and change dimensions.

<div class="example example22">
<div class="example__view">
  <div class="chicken">
    <!-- head	 -->
    <div class="cube chicken__head"><div></div></div>
    <div class="cube chicken__beak"><div></div></div>
    <div class="cube chicken__wattle"><div></div></div>
    <div class="cube chicken__comb"><div></div></div>
  </div>
</div>
</div>

<style>
  .example22 .example__view {
    height: 400px;
    background-color: #333333;
  }

  .example22 .chicken {
    --red: #FF5E5B;
    --white: #FFFFFF;
    --orange: #ff945b;

    font-size: 1em;
    top: 50%; left: 50%;

    transform-style: preserve-3d;
    transform-origin: -1em 2em;
    transform: rotateX(65deg) rotateZ(45deg);
  }
  .example22 .chicken, .example22 .chicken div, .example22 .chicken div::before, .example22 .chicken div::after {
    content: '';
    position: absolute;
    transform-style: preserve-3d;
  }


  /* basic smart cube ---> */
  .example22 .cube {
    width: var(--x); height: var(--y);
    background-color: color-mix(in srgb, var(--color) 50%, #333333);
  }
    .example22 .cube::before {
      width: 100%; height: var(--z);
      background-color: color-mix(in srgb, var(--color) 70%, #333333);
      transform-origin: top center;
      rotate: x 90deg;
    }
    .example22 .cube::after {
      width: 100%; height: var(--z);
      background-color: color-mix(in srgb, var(--color) 90%, white);
      translate: 0 var(--y);
      transform-origin: top center;
      rotate: x 90deg;
    }
    .example22 .cube > div {
      width: 100%; height: 100%;
      background-color: var(--color);
      translate: 0 0 var(--z);
    }
      .example22 .cube > div::before {
        width: var(--z); height: 100%;
        background-color: color-mix(in srgb, var(--color) 90%, #333333);
        transform-origin: left center;
        rotate: y 90deg;
      }
      .example22 .cube > div::after {
        width: var(--z); height: 100%;
        background-color: color-mix(in srgb, var(--color) 90%, #333333);
        transform-origin: left center;
        rotate: y 90deg;
        translate: var(--x);
      }
  /* <--- basic smart cube */


  .example22 .chicken__head {
    --x: 6em; --y: 7em; --z: 8em;
    --color: var(--white);
  }
  .example22 .chicken__head > div::before,
  .example22 .chicken__head > div::after {
    background-image: linear-gradient(black, black);
    background-position: 2em 4em;
    background-size: 1em 1em;
    background-repeat: no-repeat;
  }

  .example22 .chicken__beak {
    --x: 2em; --y: 3em; --z: 2em;
    translate: 2em 15em 4em;
    --color: var(--orange);
    animation: example22ChickenBeak 2s ease infinite alternate;
  }
  @keyframes example22ChickenBeak {
    to { translate: 2em 7em 4em; }
  }

  .example22 .chicken__wattle {
    --x: 2em; --y: 2em; --z: 2em;
    translate: 2em 10em 2em;
    --color: var(--red);
    animation: example22ChickenWattle 2s ease infinite alternate;
  }
  @keyframes example22ChickenWattle {
    to { translate: 2em 7em 2em; }
  }

  .example22 .chicken__comb {
    --x: 2em; --y: 4em; --z: 2em;
    translate: 2em 2em 12em;
    --color: var(--red);
    animation: example22ChickenComb 2s ease infinite alternate;
  }
  @keyframes example22ChickenComb {
    to { translate: 2em 2em 8em; }
  }
</style>

Then, I place these cubes properly to get the final chicken.

<div style="margin-bottom: 40px">
  <p class="codepen" data-height="500" data-default-tab="html,result" data-slug-hash="abgWGPy" data-pen-title="Chicken. Complete 3D CSS Guide Part 1" data-user="miocene" style="height: 500px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 40px 0;">
    <span>See the Pen <a href="https://codepen.io/miocene/pen/abgWGPy">
    Chicken. Complete 3D CSS Guide Part 1</a> by Julia Miocene (<a href="https://codepen.io/miocene">@miocene</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
  </p>
  <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
</div>

Today, we learned how to create a 3D space, a basic 3D object, and a cubic animal. Share your animals on your favorite social media and tag me @julia_miocene.

Don’t forget to keep the web weird.