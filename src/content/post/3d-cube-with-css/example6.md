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