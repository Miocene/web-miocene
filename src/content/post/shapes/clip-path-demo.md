<div class="examples-CP">
<div class="example example-CP-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  clip-path: circle(50% at 50% 50%);
}</code></pre>
</div>
<div class="example example-CP-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 2/1;
  background-color: #FFFFFF;
  clip-path: ellipse(50% 50% at 50% 50%);
}</code></pre>
</div>
<div class="example example-CP-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mask {
  width: 100px;
  aspect-ratio: 1/1;
  background-color: #FFFFFF;
  clip-path: polygon(50% 0, 70% 25%, 100% 38%, 
             83% 66%, 81% 100%, 50% 92%, 19% 100%, 
             17% 67%, 0 38%, 30% 25%);
}</code></pre>
</div>
</div>

<style>
  .examples-CP .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-CP .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-CP-1 .block {
    width: 60%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    clip-path: circle(50% at 50% 50%);
  }
  .example-CP-2 .block {
    width: 60%; aspect-ratio: 2/1;
    background-color: light-dark(#333, #fff);
    clip-path: ellipse(50% 50% at 50% 50%);
  }
  .example-CP-3 .block {
    width: 60%; aspect-ratio: 1/1;
    background-color: light-dark(#333, #fff);
    clip-path: polygon(50% 0, 70% 25%, 100% 38%, 83% 66%, 81% 100%, 50% 92%, 19% 100%, 17% 67%, 0 38%, 30% 25%);
  }
</style>