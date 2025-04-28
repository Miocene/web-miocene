<div class="examples-BG">
<div class="example example-BG-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.background {
  width: 100px;
  aspect-ratio: 1/1;
  background-image: linear-gradient(0deg, #FFFFFF 2px, transparent 2px 4px);
  background-size: 100% 4px;
}</code></pre>
</div>
<div class="example example-BG-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.background {
  width: 100px;
  aspect-ratio: 1/1;
  background-image: radial-gradient(closest-side, #FFFFFF 100%, transparent 0);
  background-size: 10px 10px;
}</code></pre>
</div>
<div class="example example-BG-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.background {
  width: 100px;
  aspect-ratio: 1/1;
  background-image: conic-gradient(#FFFFFF 45deg, transparent 45deg 135deg,
                    #FFFFFF 135deg 225deg, transparent 225deg 315deg, #FFFFFF 315deg);
  background-size: 10px 10px;
}</code></pre>
</div>
<div class="example example-BG-4">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.background {
  width: 100px;
  aspect-ratio: 1/1;
  background-image: radial-gradient(closest-side, #FFFFFF 100%, transparent 0),
                    radial-gradient(closest-side, #FFFFFF 100%, transparent 0),
                    linear-gradient(#FFFFFF, #FFFFFF);
  background-position: 25% 0px, 75% 0px, 0px 100%;
  background-size: 30% 60%, 30% 60%, 100% 20%;
  background-repeat: no-repeat;
}</code></pre>
</div>
</div>

<style>
  .examples-BG .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-BG .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-BG-1 .block {
    width: 60%; aspect-ratio: 1/1;
    background-image: linear-gradient(0deg, light-dark(#333, #fff) 2px, transparent 2px 4px);
    background-size: 100% 4px;
  }
  .example-BG-2 .block {
    width: 60%; aspect-ratio: 1/1;
    background-image: radial-gradient(closest-side, light-dark(#333, #fff) 100%, transparent 0);
    background-size: 10px 10px;
  }
  .example-BG-3 .block {
    width: 60%; aspect-ratio: 1/1;
    background-image: conic-gradient(light-dark(#333, #fff) 45deg, transparent 45deg 135deg,
                      light-dark(#333, #fff) 135deg 225deg, transparent 225deg 315deg, light-dark(#333, #fff) 315deg);
    background-size: 10px 10px;
  }
  .example-BG-4 .block {
    width: 60%; aspect-ratio: 1/1;
    background-image: radial-gradient(closest-side, light-dark(#333, #fff) 100%, transparent 0),
                      radial-gradient(closest-side, light-dark(#333, #fff) 100%, transparent 0),
                      linear-gradient(light-dark(#333, #fff), light-dark(#333, #fff));
    background-position: 25% 0px, 75% 0px, 0px 100%;
    background-size: 30% 60%, 30% 60%, 100% 20%;
    background-repeat: no-repeat;
  }
</style>