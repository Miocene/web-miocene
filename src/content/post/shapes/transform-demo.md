<div class="examples-T">
<div class="example example-T-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.transform {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  rotate: 45deg;
}</code></pre>
</div>
<div class="example example-T-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.transform {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  transform: skew(10deg);
}</code></pre>
</div>
</div>

<style>
  .examples-T .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-T .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-T-1 .block {
    width: 30%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    rotate: 45deg;
  }
  .example-T-2 .block {
    width: 30%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    transform: skew(10deg);
  }
</style>