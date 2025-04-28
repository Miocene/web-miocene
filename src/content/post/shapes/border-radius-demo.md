<div class="examples-BR">
<div class="example example-BR-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.circle {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.ellipse {
  width: 100px;
  aspect-ratio: 2/1;
  border-radius: 50%;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.sausage {
  width: 100px;
  aspect-ratio: 2/1;
  /* 99em, 100vw, or any other big number */
  border-radius: 99em;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-4">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.semicircle {
  width: 100px;
  aspect-ratio: 2/1;
  /* don't use % here,
     use big number or height */
  border-radius: 50px 50px 0 0;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-5">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.quadrant {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 0 100% 0 0;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-6">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.leaf {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 0 100%;
  background: #FFFFFF;
}</code></pre>
</div>
<div class="example example-BR-7">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.blob {
  width: 100px;
  aspect-ratio: 1/1;
  /* watch https://www.youtube.com/watch?v=Q8HZqdrhlVc
     to see how it works */
  border-radius: 40% 60% 30% 70% / 
                 35% 50% 50% 65%;
  background: #FFFFFF;
}</code></pre>
</div>
</div>

<style>
  .examples-BR .example {
    grid-template-columns: 1fr 2fr;
  }
  .examples-BR .example__view {
    aspect-ratio: 1/1;
  }
  .examples-BR .block {
    position: absolute;
    top: 50%; left: 50%;
    background: light-dark(#333, #fff);
    translate: -50% -50%;
  }
  .example-BR-1 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 50%;
  }
  .example-BR-2 .block {
    width: 60%; aspect-ratio: 2/1;
    border-radius: 50%;
  }
  .example-BR-3 .block {
    width: 60%; aspect-ratio: 2/1;
    border-radius: 99em;
  }
  .example-BR-4 .block {
    width: 60%; aspect-ratio: 2/1;  
    border-radius: 99em 99em 0 0;
  }
  .example-BR-5 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 0 100% 0 0;
  }
  .example-BR-6 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 0 100%;
  }
  .example-BR-7 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 40% 60% 30% 70% / 35% 50% 50% 65%;
  }
</style>