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