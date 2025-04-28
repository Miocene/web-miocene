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