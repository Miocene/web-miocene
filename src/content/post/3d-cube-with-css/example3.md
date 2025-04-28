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