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