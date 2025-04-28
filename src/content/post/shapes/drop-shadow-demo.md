<div class="examples-DS">
<div class="example example-DS-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.duplication {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  filter: drop-shadow(0px 40px 0 #FFFFFF);
}</code></pre>
</div>
<div class="example example-DS-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.duplication {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  filter: drop-shadow(0px 40px 0 #00CECB) 
          drop-shadow(40px 0 0 #FF5E5B);
}</code></pre>
</div>
<div class="example example-DS-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.duplication {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  filter: drop-shadow(0px 40px 0 #FF5E5B);
}
.duplication::before {
  content: '';
  display: block;
  width: 90%; aspect-ratio: 1 / 1;
  margin: 5%;
  background-color: #FFFFFF;
  rotate: 45deg;
}</code></pre>
</div>
</div>

<style>
  .examples-DS .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-DS .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-DS-1 .block {
    width: 30%; aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid light-dark(#333, #fff);
    filter: drop-shadow(0px 40px 0 light-dark(#333, #fff));
    translate: -50% -60px;
  }
  .example-DS-2 .block {
    width: 30%; aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid light-dark(#333, #fff);
    filter: drop-shadow(0px 40px 0 #00CECB) drop-shadow(40px 0 0 #FF5E5B);
    translate: -50px -60px;
  }
  .example-DS-3 .block {
    width: 30%; aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid light-dark(#333, #fff);
    filter: drop-shadow(0px 40px 0 #FF5E5B);
    translate: -50% -60px;
  }
  .example-DS-3 .block::before {
    content: '';
    display: block;
    width: 90%; aspect-ratio: 1 / 1;
    margin: 5%;
    background-color: light-dark(#333, #fff);
    rotate: 45deg;
  }
</style>