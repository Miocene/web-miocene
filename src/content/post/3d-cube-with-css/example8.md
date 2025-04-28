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