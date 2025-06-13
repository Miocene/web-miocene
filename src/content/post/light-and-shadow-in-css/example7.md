<div class="example-grid">
  <div class="example example7" style="--blur: 0;">
    <div class="example__view">
      <div class="block"></div>
      <div class="controls">
        <label>
          blur
          <input class="range" type="range" id="E7blur" name="E7blur" min="0" max="20" value="0"
            oninput="blur7()" />
        </label>
      </div>
    </div>
    <pre class="example__code"><code class="language-css">.shadow {
  clip-path: polygon (...);
  filter: blur();
}</code></pre>
  </div>
  <div class="example example8" style="--blur: 0;">
    <div class="example__view">
      <div class="block"></div>
      <div class="controls">
        <label>
          blur
          <input class="range" type="range" id="E8blur" name="E8blur" min="0" max="20" value="0"
            oninput="blur8()" />
        </label>
      </div>
    </div>
    <pre class="example__code"><code class="language-css">.shadow {
  filter: blur();
}
.shadow::before {
  clip-path: polygon(...);
}</code></pre>
  </div>
</div>

<style>
  .example7 .example__view,
  .example8 .example__view {
    aspect-ratio: 1/1;
  }
  .example7 .block,
  .example8 .block {
    position: absolute;
    top: 50%; left: 50%;
    width: 40%; height: 60%;
    translate: -50% -50%;
  }
  .example7 .block {
    background: var(--color-text-secondary);
    clip-path: polygon(evenodd, 37.5% 36%, 62.5% 36%, 75% 11%, 85.71% 36%, 75% 86%, 62.5% 86%, 62.5% 60.07%, 75% 50.57%, 57.92% 50.57%, 62.5% 60.07%, 62.5% 86%, 37.5% 86%, 37.5% 60.07%, 25% 50.57%, 42.08% 50.57%, 37.5% 60.07%, 37.5% 86%, 25% 86%, 14.29% 36%, 25.9% 11%);
    filter: blur(var(--blur));
  }
  .example8 .block {
    filter: blur(var(--blur));
  }
  .example8 .block::before {
    content: '';
    display: block;
    width: 100%; height: 100%;
    background: var(--color-text-secondary);
    clip-path: polygon(evenodd, 37.5% 36%, 62.5% 36%, 75% 11%, 85.71% 36%, 75% 86%, 62.5% 86%, 62.5% 60.07%, 75% 50.57%, 57.92% 50.57%, 62.5% 60.07%, 62.5% 86%, 37.5% 86%, 37.5% 60.07%, 25% 50.57%, 42.08% 50.57%, 37.5% 60.07%, 37.5% 86%, 25% 86%, 14.29% 36%, 25.9% 11%);
  }
</style>

<script>
  const example7 = document.querySelector('.example7');
  const example8 = document.querySelector('.example8');
  const E7blur = document.querySelector('#E7blur');
  const E8blur = document.querySelector('#E8blur');
  
  function blur7(value) {
    example7.setAttribute('style',`--blur: ${E7blur.value / 10}em;`);
  }
  function blur8(value) {
    example8.setAttribute('style',`--blur: ${E8blur.value / 10}em;`);
  }
</script>