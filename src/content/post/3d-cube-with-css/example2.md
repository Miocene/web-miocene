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