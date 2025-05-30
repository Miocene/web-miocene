<div class="example example20">
  <div class="example__view" style="--color: #333;">
    <div class="cube">
      <div></div>
    </div>
    <div class="controls">
      <div class="color-picker">
        <input type="color" value="333" />
      </div>
    </div>
  </div>
  <pre class="example__code"><code class="language-css">.cube {
  --top-color:    color-mix(in srgb, var(--color) 100%, var(--background));
  --front-color:  color-mix(in srgb, var(--color) 90%, var(--background));
  --bottom-color: color-mix(in srgb, var(--color) 20%, var(--background));
  --back-color:   color-mix(in srgb, var(--color) 60%, var(--background));
  --side-color:   color-mix(in srgb, var(--color) 80%, var(--background));
  background: var(--bottom-color);
}
.cube::before     { background: var(--side-color); }
.cube::after      { background: var(--back-color); }
.cube div         { background: var(--side-color); }
.cube div::before { background: var(--top-color); }
.cube div::after  { background: var(--front-color); }</code></pre>
</div>

<style>
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

    --top-color: color-mix(in srgb, var(--color) 100%, var(--color-bg-primary));
    --front-color: color-mix(in srgb, var(--color) 90%, var(--color-bg-primary));
    --bottom-color: color-mix(in srgb, var(--color) 20%, var(--color-bg-primary));
    --back-color: color-mix(in srgb, var(--color) 60%, var(--color-bg-primary));
    --side-color: color-mix(in srgb, var(--color) 80%, var(--color-bg-primary));
    background: var(--bottom-color);
  }
  @keyframes example20 {
    to { transform: rotateX(75deg) rotateZ(570deg); }
  }
  @media (prefers-color-scheme: dark) {
    .example20 .cube {
      --color: #ffffff;
    }
  }
  @media (prefers-color-scheme: light) {
    .example20 .cube {
      --color: #333333;
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