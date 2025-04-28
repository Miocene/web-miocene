<div class="examples-BS">
<div class="example example-BS-1">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.inner-shadows {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  /* there could be any number of shadows */
  box-shadow:
    inset 0 0 0 5px rgba(255 255 255 / .4),
    inset 0 0 0 15px rgba(255 255 255 / .4),
    inset 0 0 0 30px rgba(255 255 255 / .4);
}</code></pre>
</div>
<div class="example example-BS-2">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.shifted-shadow {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  /* there could be any number of shadows */
  box-shadow:
    inset 10px 10px 0 10px rgba(255 255 255 / .4),
    inset 10px 10px 0 20px rgba(255 255 255 / .4),
    inset 10px 10px 0 30px rgba(255 255 255 / .4);
}</code></pre>
</div>
<div class="example example-BS-3">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.outer-shadows {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  /* you can use both inner and outer shadows */
  box-shadow:
    10px 10px 0 10px rgba(255 255 255 / .4),
    10px 10px 0 20px rgba(255 255 255 / .4),
    10px 10px 0 30px rgba(255 255 255 / .4);
}</code></pre>
</div>
<div class="example example-BS-4">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.moon {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  box-shadow:
    inset 50px -40px 0 -20px #FFFFFF;
}</code></pre>
</div>
<div class="example example-BS-5">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.duplication {
  width: 100px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 2px solid #FFFFFF;
  /* shadow could be bigger or smaller
     change the fourth number to do it */
  box-shadow:
    -100px 0 0 10px #FFFFFF,
     100px 0 0 -10px #FFFFFF;
  /* this block doesn't have a background
     but you can't see the shadow through */
}</code></pre>
</div>
<div class="example example-BS-6">
  <div class="example__view">
    <div class="block"></div>
  </div>
  <pre class="example__code"><code class="language-css">.mario {
  width: 10px;
  height: 10px;
  box-shadow: 
    20px 0 #F63911, 30px 0 #F63911, 50px 0 #F63911, 50px 0 #F63911, 60px 0 #F63911, 10px 10px #F63911, 
    20px 10px #F63911, 40px 0px #F63911, 30px 10px #F63911, 40px 10px #F63911, 50px 10px #F63911, 60px 10px #F63911, 
    70px 10px #F63911, 90px 10px #F63911, 10px 20px #8C5610, 20px 20px #8C5610, 30px 20px #8C5610, 10px 30px #8C5610, 
    0px 30px #8C5610, 0px 40px #8C5610, 20px 40px #8C5610, 30px 40px #8C5610, 0px 50px #8C5610, 10px 50px #8C5610,
    10px 30px #FFB56B, 10px 40px #FFB56B, 40px 40px #FFB56B, 40px 30px #FFB56B, 30px 30px #FFB56B, 40px 20px #FFB56B, 
    50px 20px #FFB56B, 50px 30px #FFB56B, 50px 40px #FFB56B, 50px 50px #FFB56B, 40px 50px #FFB56B, 30px 50px #FFB56B, 
    20px 50px #FFB56B, 20px 60px #FFB56B, 30px 60px #FFB56B, 40px 60px #FFB56B, 50px 60px #FFB56B, 60px 60px #FFB56B, 
    70px 60px #FFB56B, 80px 60px #FFB56B, 80px 40px #FFB56B, 60px 40px #FFB56B, 90px 40px #FFB56B, 100px 40px #FFB56B, 
    90px 30px #FFB56B, 80px 30px #FFB56B, 70px 30px #FFB56B, 70px 20px #FFB56B, 60px 20px #000000, 60px 30px #000000, 
    70px 40px #000000, 60px 50px #000000, 70px 50px #000000, 80px 50px #000000, 90px 50px #000000, 80px 10px #F63911, 20px 30px #FFB56B;
}</code></pre>
</div>
</div>

<style>
  .examples-BS .example {
    grid-template-columns: 1fr 2fr;
  }
  /* .examples-BS .example__view {
    aspect-ratio: 1/1;
  } */
  .examples-BS .block {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
  }
  .example-BS-1 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 50%;
    color: color-mix(in srgb, light-dark(#333, #fff) 40%, transparent);
    box-shadow: inset 0 0 0 10px currentColor, inset 0 0 0 20px currentColor, inset 0 0 0 30px currentColor;
  }
  .example-BS-2 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 50%;
    color: color-mix(in srgb, light-dark(#333, #fff) 40%, transparent);
    box-shadow: inset 10px 10px 0 10px currentColor, inset 10px 10px 0 20px currentColor, inset 10px 10px 0 30px currentColor;
  }
  .example-BS-3 .block {
    width: 40%; aspect-ratio: 1/1;
    border-radius: 50%;
    color: color-mix(in srgb, light-dark(#333, #fff) 40%, transparent);
    box-shadow: 10px 10px 0 10px currentColor, 10px 10px 0 20px currentColor, 10px 10px 0 30px currentColor;
  }
  .example-BS-4 .block {
    width: 60%; aspect-ratio: 1/1;
    border-radius: 50%;
    box-shadow: inset 50px -40px 0 -20px light-dark(#333, #fff);
  }
  .example-BS-5 .block {
    width: 30%; aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid light-dark(#333, #fff);
    box-shadow: -50px 0 0 10px light-dark(#333, #fff), 50px 0 0 -10px light-dark(#333, #fff);
  }
  .example-BS-6 .block {
    width: 10px; height: 10px;
    font-size: 10px;
    box-shadow: 
      -3em -4em #F63911, -2em -4em #F63911, 0 -4em #F63911, 0 -4em #F63911, 1em -4em #F63911, -4em -3em #F63911, 
      -3em -3em #F63911, -1em -4em #F63911, -2em -3em #F63911, -1em -3em #F63911, 0 -3em #F63911, 1em -3em #F63911, 
      2em -3em #F63911, 4em -3em #F63911, -4em -2em #8C5610, -3em -2em #8C5610, -2em -2em #8C5610, -4em -1em #8C5610, 
      -5em -1em #8C5610, -5em 0 #8C5610, -3em 0 #8C5610, -2em 0 #8C5610, -5em 1em #8C5610, -4em 1em #8C5610,
      -4em -1em #FFB56B, -4em 0 #FFB56B, -1em 0 #FFB56B, -1em -1em #FFB56B, -2em -1em #FFB56B, -1em -2em #FFB56B, 
      0 -2em #FFB56B, 0 -1em #FFB56B, 0 0 #FFB56B, 0 1em #FFB56B, -1em 1em #FFB56B, -2em 1em #FFB56B, 
      -3em 1em #FFB56B, -3em 2em #FFB56B, -2em 2em #FFB56B, -1em 2em #FFB56B, 0 2em #FFB56B, 1em 2em #FFB56B, 
      2em 2em #FFB56B, 3em 2em #FFB56B, 3em 0 #FFB56B, 1em 0 #FFB56B, 4em 0 #FFB56B, 5em 0 #FFB56B, 
      4em -1em #FFB56B, 3em -1em #FFB56B, 2em -1em #FFB56B, 2em -2em #FFB56B, 1em -2em #000000, 1em -1em #000000, 
      2em 0 #000000, 1em 1em #000000, 2em 1em #000000, 3em 1em #000000, 4em 1em #000000, 3em -3em #F63911, -3em -1em #FFB56B;
  }
</style>