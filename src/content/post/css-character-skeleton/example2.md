<div class="example example2" style="--rotate: 0deg;">
  <div class="example__view">
    <div class="chicken">
      <!-- head	 -->
      <div class="cube chicken__head">
        <div>
          <div class="shadow"></div>
        </div>
        <div class="shadow"></div>
        <div class="cube bone"><div></div></div>
      </div>
      <div class="cube chicken__beak">
        <div></div>
      </div>
      <div class="cube chicken__wattle">
        <div></div>
        <div class="shadow"></div>
      </div>
      <div class="cube chicken__comb">
        <div></div>
      </div>
      <!-- body	 -->
      <div class="cube chicken__body">
        <div></div>
        <div class="cube bone"><div></div></div>
      </div>
      <div class="cube chicken__tail">
        <div></div>
        <div class="cube bone"><div></div></div>
      </div>
      <div class="cube chicken__wing chicken__wing-left">
        <div></div>
        <div class="cube bone"><div></div></div>
      </div>
      <div class="cube chicken__wing chicken__wing-right">
        <div></div>
        <div class="cube bone"><div></div></div>
      </div>
      <!-- legs	 -->
      <div class="cube chicken__knee chicken__knee-right">
        <div></div>
        <div class="cube bone"><div></div></div>
      </div>
      <div class="cube chicken__knee chicken__knee-left">
        <div></div>
        <div class="cube bone"><div></div></div>
      </div>
      <div class="cube chicken__foot chicken__foot-right">
        <div></div>
        <div class="cube bone"><div></div></div>
      </div>
      <div class="cube chicken__foot chicken__foot-left">
        <div></div>
        <div class="cube bone"><div></div></div>
      </div>
      <div class="cube chicken__finger chicken__finger-one">
        <div>
          <div class="shadow"></div>
        </div>
        <div class="cube bone"><div></div></div>
      </div>
      <div class="cube chicken__finger chicken__finger-two">
        <div>
          <div class="shadow"></div>
        </div>
        <div class="cube bone"><div></div></div>
      </div>
      <div class="cube chicken__finger chicken__finger-three">
        <div>
          <div class="shadow"></div>
        </div>
        <div class="cube bone"><div></div></div>
      </div>
      <div class="cube chicken__finger chicken__finger-four">
        <div>
          <div class="shadow"></div>
        </div>
        <div class="cube bone"><div></div></div>
      </div>
      <!-- shadow	-->
      <div class="chicken__shadow"></div>
    </div>
    <div class="controls">
      <label>
        rotate chicken
        <input class="range" type="range" id="E2rotate" name="E2rotate" min="0" max="360" value="0"
          oninput="rotate2()" />
      </label>
    </div>
  </div>
  <pre class="example__code"><code class="language-html"><script type="prism-html-markup"><div class="chicken">
    <div class="chicken__head">
      <div class="chicken__comb"></div>
      <div class="chicken__beak">
        <div class="chicken__wattle"></div>
      </div>
    </div>
    <div class="chicken__tail"></div>
    <div class="chicken__wing-left"></div>
    <div class="chicken__wing-right"></div>
    <div class="chicken__leg-left">
      <div class="chicken__foot">
        <div class="chicken__finger"></div>
        <div class="chicken__finger"></div>
      </div>
    </div>
    <div class="chicken__leg-right">
      <div class="chicken__foot">
        <div class="chicken__finger"></div>
        <div class="chicken__finger"></div>
      </div>
    </div>
  </div></script></code></pre>
</div>

<style>
  .example2 .example__view {
    aspect-ratio: 1;
    background-color: #fff0ea;
  }

  .example2 .chicken, .chicken *, .chicken *::before, .chicken *::after {
    content: '';
    position: absolute;
    transform-style: preserve-3d;
    transform-origin: top left;
  }

  .example2 .chicken {
    --red: #FF5E5B;
    --white: #FFFFFF;
    --orange: #ff945b;
    --light: #FFF4CD;
    --shadow: color-mix(in srgb, #c07d9e, #000000 50%);

    font-size: min(2vw, 2vh);
    top: 50%; left: 50%;

    transform-origin: 3em 2em;
    transform: translate(-2em, -2em) rotateX(65deg) rotateZ(calc(45deg + var(--rotate)));
  }



  /* basic smart cube */
  .example2 .cube {
    width: var(--x); height: var(--y);
    background-color: color-mix(in srgb, var(--color) 50%, #333333);
  }
  .example2 .cube::before {
    width: 100%; height: var(--z);
    background-color: color-mix(in srgb, var(--color) 70%, #333333);
    transform-origin: top center;
    rotate: x 90deg;
  }
  .example2 .cube::after {
    width: 100%; height: var(--z);
    background-color: color-mix(in srgb, var(--color) 90%, white);
    translate: 0 var(--y);
    transform-origin: top center;
    rotate: x 90deg;
  }
  .example2 .cube > div:nth-child(1) {
    width: 100%; height: 100%;
    background-color: var(--color);
    translate: 0 0 var(--z);
  }
  .example2 .cube > div:nth-child(1)::before {
    width: var(--z); height: 100%;
    background-color: color-mix(in srgb, var(--color) 90%, #333333);
    transform-origin: left center;
    rotate: y 90deg;
  }
  .example2 .cube > div:nth-child(1)::after {
    width: var(--z); height: 100%;
    background-color: color-mix(in srgb, var(--color) 90%, #333333);
    transform-origin: left center;
    rotate: y 90deg;
    translate: var(--x);
  }


  /* head */
  .example2 .chicken__head {
    --x: 6em; --y: 7em; --z: 8em;
    --color: var(--white);
    translate: 0em 0em 0em;
  }
  .example2 .chicken__head .bone {
    --x: 1em; --y: 1em; --z: 7em;
    translate: 2.5em 3.5em 0em;
    --color: var(--white);
  }
  .example2 .chicken__head > div::before,
  .example2 .chicken__head > div::after {
    background-image: linear-gradient(black, black);
    background-position: 2em 4em;
    background-size: 1em 1em;
    background-repeat: no-repeat;
  }

  .example2 .chicken__beak {
    --x: 2em; --y: 3em; --z: 2em;
    translate: 2em 7em 4em;
    --color: var(--orange);
  }

  .example2 .chicken__wattle {
    --x: 2em; --y: 2em; --z: 2em;
    translate: 2em 7em 2em;
    --color: var(--red);
  }

  .example2 .chicken__comb {
    --x: 2em; --y: 4em; --z: 2em;
    translate: 2em 2em 8em;
    --color: var(--red);
  }



  /* body */
  .example2 .chicken__body {
    --x: 6em; --y: 10em; --z: 5em;
    translate: 0em -3em -5em;
    --color: var(--white);
  }
  .example2 .chicken__body .bone {
    --x: 1em; --y: 8em; --z: 1em;
    translate: 2em 1em 2em;
    --color: var(--white);
  }

  .example2 .chicken__tail {
    --x: 4em; --y: 2em; --z: 5em;
    translate: 1em -5em -5em;
    --color: var(--white);
  }
  .example2 .chicken__tail .bone {
    --x: 1em; --y: 2em; --z: 1em;
    translate: 1em 0em 2em;
    --color: var(--white);
  }

  .example2 .chicken__wing {
    --x: 2em; --y: 6em; --z: 3em;
    --color: var(--white);
  }
  .example2 .chicken__wing .bone {
    --x: 1em; --y: 1em; --z: 4em;
    translate: 0.5em 2.5em 0em;
    --color: var(--white);
  }
  .example2 .chicken__wing-left {
    translate: -2em 0em -4em;
  }
  .example2 .chicken__wing-right {
    translate: 6em 0em -4em;
  }

  .example2 .chicken__knee {
    --x: 1em; --y: 1em; --z: 3em;
    --color: var(--orange);
  }
  .example2 .chicken__knee .bone {
    --x: 0.5em; --y: 0.5em; --z: 3em;
    translate: 0.25em 0.25em 0em;
    --color: var(--white);
  }
  .example2 .chicken__knee-right {
    translate: 5em 2em -8em;
  }
  .example2 .chicken__knee-left {
    translate: 0em 2em -8em;
  }

  .example2 .chicken__foot {
    --x: 3em; --y: 3em; --z: 1em;
    --color: var(--orange);
  }
  .example2 .chicken__foot .bone {
    --x: 0.5em; --y: 3em; --z: 0.5em;
    translate: 1.25em 0em 0.25em;
    --color: var(--white);
  }
  .example2 .chicken__foot-right {
    translate: 4em 1em -9em;
  }
  .example2 .chicken__foot-left {
    translate: -1em 1em -9em;
  }

  .example2 .chicken__finger {
    --x: 1em; --y: 2em; --z: 1em;
    --color: var(--orange);
  }
  .example2 .chicken__finger .bone {
    --x: 0.5em; --y: 2em; --z: 0.5em;
    translate: 0.25em 0em 0.25em;
    --color: var(--white);
  }
  .example2 .chicken__finger-one {
    translate: -1em 4em -9em;
  }
  .example2 .chicken__finger-two {
    translate: 1em 4em -9em;
  }
  .example2 .chicken__finger-three {
    translate: 4em 4em -9em;
  }
  .example2 .chicken__finger-four {
    translate: 6em 4em -9em;
  }



  /* COLORING */
  .example2 .chicken__head > div {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 0%),
                      transparent 70%) !important;
  }
  .example2 .chicken__comb > div,
  .example2 .chicken__comb::after,
  .example2 .chicken__beak > div {
    background-color: color-mix(in srgb, var(--color), var(--shadow) 0%) !important;
  }
  .example2 .chicken__head::after,
  .example2 .chicken__body::after {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 3%),
                      transparent 70%) !important;
  }
  .example2 .chicken__beak::after {
    background-color: color-mix(in srgb, var(--color), var(--shadow) 3%) !important;
  }
  .example2 .chicken__wing::after {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 5%),
                      transparent 70%) !important;
  }
  .example2 .chicken__head > div::before,
  .example2 .chicken__head > div::after,
  .example2 .chicken__body > div::before,
  .example2 .chicken__body > div::after,
  .example2 .chicken__finger::after {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 7%),
                      transparent 70%) !important;
  }
  .example2 .chicken__comb > div::before,
  .example2 .chicken__comb > div::after,
  .example2 .chicken__beak > div::before,
  .example2 .chicken__beak > div::after {
    background-color: color-mix(in srgb, var(--color), var(--shadow) 7%) !important;
  }
  .example2 .chicken__wing > div {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 9%),
                      transparent 70%) !important;
  }
  .example2 .chicken__wattle > div::before,
  .example2 .chicken__wattle > div::after {
    background-color: color-mix(in srgb, var(--color), var(--shadow) 9%) !important;
  }
  .example2 .chicken__body > div,
  .example2 .chicken__tail > div,
  .example2 .chicken__wing > div::after,
  .example2 .chicken__wing > div::before,
  .example2 .chicken__finger > div {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 18%),
                      transparent 70%) !important;
  }
  .example2 .chicken__wattle::after {
    background-color: color-mix(in srgb, var(--color), var(--shadow) 18%)!important;
  }
  .example2 .chicken__body,
  .example2 .chicken__tail {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 28%),
                      transparent 70%) !important;
  }
  .example2 .chicken__finger > div::before,
  .example2 .chicken__finger > div::after,
  .example2 .chicken__foot > div::before,
  .example2 .chicken__foot > div::after,
  .example2 .chicken__knee::after,
  .example2 .chicken__tail > div::before,
  .example2 .chicken__tail > div::after,
  .example2 .chicken__head::before {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 32%),
                      transparent 70%) !important;
  }
  .example2 .chicken__foot > div {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 34%),
                      transparent 70%) !important;
  }
  .example2 .chicken__knee > div::before,
  .example2 .chicken__knee > div::after,
  .example2 .chicken__wing::before {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 42%),
                      transparent 70%) !important;
  }
  .example2 .chicken__beak {
    background-color: color-mix(in srgb, var(--color), var(--shadow) 42%) !important;
  }
  .example2 .chicken__foot::after,
  .example2 .chicken__knee::before,
  .example2 .chicken__body::before {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 44%),
                      transparent 70%) !important;
  }
  .example2 .chicken__wattle {
    background-color: color-mix(in srgb, var(--color), var(--shadow) 44%) !important;
  }
  .example2 .chicken__foot::before,
  .example2 .chicken__wing,
  .example2 .chicken__tail::before {
    background-color: color-mix(in srgb, 
                      color-mix(in srgb, var(--color), var(--shadow) 52%),
                      transparent 70%) !important;
  }
  .example2 .chicken__head,
  .example2 .chicken__tail::after,
  .example2 .chicken__wing-left > div::after,
  .example2 .chicken__wing-right > div::before {
    background-color: transparent !important;
  }



  /*  shadows  */
  .example2 .chicken__shadow {
    width: 24em; height: 40em;
    transform: translateX(-50%) translateY(-34em) translateZ(-9em);
    filter: blur(2em);
  }
  .example2 .chicken__shadow::before {
    width: 100%; height: 100%;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 75%), transparent);
    clip-path: polygon(12em 39em, 13em 39em, 13em 37em, 17em 37em, 17em 39em, 18em 39em, 21em 36.8em, 21.8em 34.2em, 21.8em 21.9em, 21.8em 21.9em, 22.6em 6.9em, 17.4em 4em, 13.3em 3.9em, 9em 7em, 8.5em 21.9em, 8.2em 34.3em, 9em 36.8em, 11em 39em);
  }
  .example2 .chicken__head > div .shadow {
    top: 0em; left: 2em;
    width: 2em; height: 2em;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 85%), transparent);
  }
  .example2 .chicken__head > .shadow {
    top: 7.01em; left: 2em;
    width: 2em; height: 2.9em;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 85%), transparent);
    rotate: x 90deg;
    translate: 0 0 -0.9em;
  }
  .example2 .chicken__wattle .shadow {
    top: 2.02em; left: 0em;
    width: 2em; height: 2em;
    background: linear-gradient(0deg, color-mix(in srgb, var(--shadow), transparent 80%), transparent 1.5em);
    rotate: x 90deg;
  }
  .example2 .chicken__finger > div .shadow {
    top: 0em; left: 0em;
    width: 1em; height: 1.3em;
    background: linear-gradient(180deg, color-mix(in srgb, var(--shadow), transparent 80%), transparent 1.5em);
  }
</style>

<script>
  const chickenExample2 = document.querySelector('.example2');
  const E2rotate = document.querySelector('#E2rotate');
  
  function rotate2(value) {
    chickenExample2.setAttribute('style',`--rotate: ${E2rotate.value}deg;`);
  }
</script>