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