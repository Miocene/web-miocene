<div class="examples-B">
<div class="example example-B-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.border {
  border-style: solid;
  border-color: transparent transparent #FFFFFF;
  border-width: 0 50px 100px;
}</code></pre>
</div>
<div class="example example-B-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.border {
  border-style: solid;
  border-color: transparent transparent #FFFFFF;
  border-width: 0 0 100px 100px;
}</code></pre>
</div>
<div class="example example-B-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.border {
  width: 30%;
  border-style: solid;
  border-color: transparent transparent #FFFFFF transparent;
  border-width: 0 20px 100px 20px;
}</code></pre>
</div>
</div>

<style>
  .examples-B .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-B .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50px -50px;
  }
  .example-B-1 .block {
    border-style: solid;
    border-color: transparent transparent light-dark(#333, #fff);
    border-width: 0 50px 100px;
  }
  .example-B-2 .block {
    border-style: solid;
    border-color: transparent transparent light-dark(#333, #fff);
    border-width: 0 0 100px 100px;
  }
  .example-B-3 .block {
    width: 30%;
    border-style: solid;
    border-color: transparent transparent light-dark(#333, #fff) transparent;
    border-width: 0 20px 100px 20px;
  }
</style>