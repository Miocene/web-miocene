<div class="examples-M">
<div class="example example-M-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  mask-image: linear-gradient(45deg, black 50%, transparent 50%);
}</code></pre>
</div>
<div class="example example-M-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  mask-image: linear-gradient(45deg, black 50%, transparent 50%);
  mask-size: 10px 10px;
}</code></pre>
</div>
<div class="example example-M-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  mask-image: radial-gradient(closest-side, white 100%, transparent 0),
              linear-gradient(45deg, black 50%, transparent 50%);
}</code></pre>
</div>
</div>

<style>
  .examples-M .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-M .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-M-1 .block {
    width: 60%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    mask-image: linear-gradient(45deg, black 50%, transparent 50%);
  }
  .example-M-2 .block {
    width: 60%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    mask-image: linear-gradient(45deg, black 50%, transparent 50%);
    mask-size: 10px 10px;
  }
  .example-M-3 .block {
    width: 60%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    mask-image: radial-gradient(closest-side, white 100%, transparent 0),
                linear-gradient(45deg, black 50%, transparent 50%);
  }
</style>