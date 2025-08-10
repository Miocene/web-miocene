<div class="example example1">
  <div class="example__view">
    <div class="chicken">
      <!-- head	 -->
      <div class="cube chicken__head">
        <div>
          <div class="shadow"></div>
        </div>
        <div class="shadow"></div>
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
      </div>
      <div class="cube chicken__tail">
        <div></div>
      </div>
      <div class="cube chicken__wing chicken__wing-left">
        <div></div>
      </div>
      <div class="cube chicken__wing chicken__wing-right">
        <div></div>
      </div>
      <!-- legs	 -->
      <div class="cube chicken__knee chicken__knee-right">
        <div></div>
      </div>
      <div class="cube chicken__knee chicken__knee-left">
        <div></div>
      </div>
      <div class="cube chicken__foot chicken__foot-right">
        <div></div>
      </div>
      <div class="cube chicken__foot chicken__foot-left">
        <div></div>
      </div>
      <div class="cube chicken__finger chicken__finger-one">
        <div>
          <div class="shadow"></div>
        </div>
      </div>
      <div class="cube chicken__finger chicken__finger-two">
        <div>
          <div class="shadow"></div>
        </div>
      </div>
      <div class="cube chicken__finger chicken__finger-three">
        <div>
          <div class="shadow"></div>
        </div>
      </div>
      <div class="cube chicken__finger chicken__finger-four">
        <div>
          <div class="shadow"></div>
        </div>
      </div>
      <!-- shadow	-->
      <div class="chicken__shadow"></div>
    </div>
  </div>
  <details class="example__code">
    <summary>See animation madness to make this chicken <strong>just</strong> jump</summary>
    <pre><code class="language-css">@keyframes head {
  0%, 85%, 100% { translate: 0em 0em 0em; }
  20%, 80% { translate: 0em 0em -1em; }
  50%, 60% { translate: 0em 0em 5em; }
}
@keyframes beak {
  0%, 85%, 100% { translate: 2em 7em 4em; }
  20%, 80% { translate: 2em 7em 3em; }
  50%, 60% { translate: 2em 7em 8em; }
}
@keyframes wattle {
  0%, 85%, 100% { translate: 2em 7em 2em; }
  20%, 80% { translate: 2em 7em 1em; }
  50%, 60% { translate: 2em 7em 6em; }
}
@keyframes comb {
  0%, 85%, 100% { translate: 2em 2em 8em; }
  20%, 80% { translate: 2em 2em 7em; }
  50%, 60% { translate: 2em 2em 13em; }
}
@keyframes body {
  0%, 85%, 100% { translate: 0em -3em -5em; }
  20%, 80% { translate: 0em -3em -6em; }
  50%, 60% { translate: 0em -3em 0em; }
}
@keyframes tail {
  0%, 85%, 100% { translate: 1em -5em -5em; }
  20%, 80% { translate: 1em -5em -6em; }
  50%, 60% { translate: 1em -5em 0em; }
}
@keyframes wing-left {
  0%, 85%, 100% { translate: -2em 0em -4em; }
  20%, 80% { translate: -2em 0em -5em; }
  50%, 60% { translate: -2em 0em 1em; }
}
@keyframes wing-right {
  0%, 85%, 100% { translate: 6em 0em -4em; }
  20%, 80% { translate: 6em 0em -5em; }
  50%, 60% { translate: 6em 0em 1em; }
}
@keyframes knee-right {
  0%, 20%, 80%, 100% { translate: 5em 2em -8em; }
  50%, 60% { translate: 5em 2em -3em; }
}
@keyframes knee-left {
  0%, 20%, 80%, 100% { translate: 0em 2em -8em; }
  50%, 60% { translate: 0em 2em -3em; }
}
@keyframes foot-right {
  0%, 20%, 80%, 100% { translate: 4em 1em -9em; }
  50%, 60% { translate: 4em 1em -4em; }
}
@keyframes foot-left {
  0%, 20%, 80%, 100% { translate: -1em 1em -9em; }
  50%, 60% { translate: -1em 1em -4em; }
}
@keyframes finger-one {
  0%, 20%, 80%, 100% { translate: -1em 4em -9em; }
  50%, 60% { translate: -1em 4em -4em; }
}
@keyframes finger-two {
  0%, 20%, 80%, 100% { translate: 1em 4em -9em; }
  50%, 60% { translate: 1em 4em -4em; }
}
@keyframes finger-three {
  0%, 20%, 80%, 100% { translate: 4em 4em -9em; }
  50%, 60% { translate: 4em 4em -4em; }
}
@keyframes finger-four {
  0%, 20%, 80%, 100% { translate: 6em 4em -9em; }
  50%, 60% { translate: 6em 4em -4em; }
}</code></pre>
  </details>
</div>

<style>
  .example1 .example__view {
    aspect-ratio: 1;
    background-color: #fff0ea;
  }

  .example1 .chicken, .example1 .chicken *, .example1 .chicken *::before, .example1 .chicken *::after {
    content: '';
    position: absolute;
    transform-style: preserve-3d;
    transform-origin: top left;
  }

  .example1 .chicken {
    --red: #FF5E5B;
    --white: #FFFFFF;
    --orange: #ff945b;
    --light: #FFF4CD;
    --shadow: color-mix(in srgb, #c07d9e, #000000 50%);

    font-size: min(2vw, 2vh);
    top: 50%; left: 50%;

    transform-origin: 3em 2em;
    transform: translate(-2em, -2em) rotateX(65deg) rotateZ(45deg);
  }



  /* basic smart cube */
  .example1 .cube {
    width: var(--x); height: var(--y);
    background-color: color-mix(in srgb, var(--color) 50%, #333333);
  }
  .example1 .cube::before {
    width: 100%; height: var(--z);
    background-color: color-mix(in srgb, var(--color) 70%, #333333);
    transform-origin: top center;
    rotate: x 90deg;
  }
  .example1 .cube::after {
    width: 100%; height: var(--z);
    background-color: color-mix(in srgb, var(--color) 90%, white);
    translate: 0 var(--y);
    transform-origin: top center;
    rotate: x 90deg;
  }
  .example1 .cube > div:nth-child(1) {
    width: 100%; height: 100%;
    background-color: var(--color);
    translate: 0 0 var(--z);
  }
  .example1 .cube > div:nth-child(1)::before {
    width: var(--z); height: 100%;
    background-color: color-mix(in srgb, var(--color) 90%, #333333);
    transform-origin: left center;
    rotate: y 90deg;
  }
  .example1 .cube > div:nth-child(1)::after {
    width: var(--z); height: 100%;
    background-color: color-mix(in srgb, var(--color) 90%, #333333);
    transform-origin: left center;
    rotate: y 90deg;
    translate: var(--x);
  }



  @property --a {
    syntax: "<number>";
    inherits: false;
    initial-value: 0;
  }
  /* head */
  .example1 .chicken__head {
    --x: 6em; --y: 7em; --z: 8em;
    --color: var(--white);
    translate: 0em 0em calc(0em + var(--a) * 1em);
    animation: example1-1 3s -.1s infinite;
  }
  @keyframes example1-1 {
    0%, 85%, 100% { --a: 0; }
    20%, 80% { --a: -1; }
    50%, 60% { --a: 5; }
  }
  @keyframes example1-2 {
    0%, 20%, 80%, 100% { --a: 0; }
    50%, 60% { --a: 5; }
  }
  .example1 .chicken__head > div::before,
  .example1 .chicken__head > div::after {
    background-image: linear-gradient(black, black);
    background-position: 2em 4em;
    background-size: 1em 1em;
    background-repeat: no-repeat;
  }

  .example1 .chicken__beak {
    --x: 2em; --y: 3em; --z: 2em;
    translate: 2em 7em calc(4em + var(--a) * 1em);
    --color: var(--orange);
    animation: example1-1 3s -.2s infinite;
  }

  .example1 .chicken__wattle {
    --x: 2em; --y: 2em; --z: 2em;
    translate: 2em 7em calc(2em + var(--a) * 1em);
    --color: var(--red);
    animation: example1-1 3s -.3s infinite;
  }

  .example1 .chicken__comb {
    --x: 2em; --y: 4em; --z: 2em;
    translate: 2em 2em calc(8em + var(--a) * 1em);
    --color: var(--red);
    animation: example1-1 3s -.2s infinite;
  }



  /* body */
  .example1 .chicken__body {
    --x: 6em; --y: 10em; --z: 5em;
    translate: 0em -3em calc(-5em + var(--a) * 1em);
    --color: var(--white);
    animation: example1-1 3s infinite;
  }

  .example1 .chicken__tail {
    --x: 4em; --y: 2em; --z: 5em;
    translate: 1em -5em calc(-5em + var(--a) * 1em);
    --color: var(--white);
    animation: example1-1 3s -.1s infinite;
  }

  .example1 .chicken__wing {
    --x: 2em; --y: 6em; --z: 3em;
    --color: var(--white);
    animation: example1-1 3s -.1s infinite;
  }
  .example1 .chicken__wing-left {
    translate: -2em 0em calc(-4em + var(--a) * 1em);
  }
  .example1 .chicken__wing-right {
    translate: 6em 0em calc(-4em + var(--a) * 1em);
  }

  .example1 .chicken__knee {
    --x: 1em; --y: 1em; --z: 3em;
    --color: var(--orange);
    animation: example1-2 3s -.1s infinite;
  }
  .example1 .chicken__knee-right {
    translate: 5em 2em calc(-8em + var(--a) * 1em);
  }
  .example1 .chicken__knee-left {
    translate: 0em 2em calc(-8em + var(--a) * 1em);
  }

  .example1 .chicken__foot {
    --x: 3em; --y: 3em; --z: 1em;
    --color: var(--orange);
    animation: example1-2 3s -.2s infinite;
  }
  .example1 .chicken__foot-right {
    translate: 4em 1em calc(-9em + var(--a) * 1em);
  }
  .example1 .chicken__foot-left {
    translate: -1em 1em calc(-9em + var(--a) * 1em);
  }

  .example1 .chicken__finger {
    --x: 1em; --y: 2em; --z: 1em;
    --color: var(--orange);
    animation: example1-2 3s -.3s infinite;
  }
  .example1 .chicken__finger-one {
    translate: -1em 4em calc(-9em + var(--a) * 1em);
  }
  .example1 .chicken__finger-two {
    translate: 1em 4em calc(-9em + var(--a) * 1em);
  }
  .example1 .chicken__finger-three {
    translate: 4em 4em calc(-9em + var(--a) * 1em);
  }
  .example1 .chicken__finger-four {
    translate: 6em 4em calc(-9em + var(--a) * 1em);
  }



  /* COLORING */
  .example1 .chicken__head > div,
  .example1 .chicken__comb > div,
  .example1 .chicken__comb::after,
  .example1 .chicken__beak > div {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 0%) !important;
  }
  .example1 .chicken__head::after,
  .example1 .chicken__body::after,
  .example1 .chicken__beak::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 3%) !important;
  }
  .example1 .chicken__wing::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 5%) !important;
  }
  .example1 .chicken__head > div::before,
  .example1 .chicken__head > div::after,
  .example1 .chicken__body > div::before,
  .example1 .chicken__body > div::after,
  .example1 .chicken__comb > div::before,
  .example1 .chicken__comb > div::after,
  .example1 .chicken__beak > div::before,
  .example1 .chicken__beak > div::after,
  .example1 .chicken__finger::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 7%) !important;
  }
  .example1 .chicken__wing > div,
  .example1 .chicken__wattle > div::before,
  .example1 .chicken__wattle > div::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 9%) !important;
  }
  .example1 .chicken__body > div,
  .example1 .chicken__tail > div,
  .example1 .chicken__wing > div::after,
  .example1 .chicken__wattle::after,
  .example1 .chicken__finger > div {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 18%) !important;
  }
  .example1 .chicken__body,
  .example1 .chicken__tail {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 28%) !important;
  }
  .example1 .chicken__finger > div::before,
  .example1 .chicken__finger > div::after,
  .example1 .chicken__foot > div::before,
  .example1 .chicken__foot > div::after,
  .example1 .chicken__knee::after,
  .example1 .chicken__tail > div::before,
  .example1 .chicken__tail > div::after,
  .example1 .chicken__head::before {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 32%) !important;
  }
  .example1 .chicken__foot > div {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 34%) !important;
  }
  .example1 .chicken__knee > div::before,
  .example1 .chicken__knee > div::after,
  .example1 .chicken__wing::before,
  .example1 .chicken__beak {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 42%) !important;
  }
  .example1 .chicken__foot::after,
  .example1 .chicken__wattle,
  .example1 .chicken__knee::before,
  .example1 .chicken__body::before {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 44%) !important;
  }
  .example1 .chicken__foot::before,
  .example1 .chicken__wing,
  .example1 .chicken__tail::before {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 52%) !important;
  }



  /*  shadows  */
  .example1 .chicken__shadow {
    width: 24em; height: 40em;
    transform: translateX(-50%) translateY(-34em) translateZ(-9em);
    filter: blur(2em);
  }
  .example1 .chicken__shadow::before {
    width: 100%; height: 100%;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 75%), transparent);
    clip-path: polygon(12em 39em, 13em 39em, 13em 37em, 17em 37em, 17em 39em, 18em 39em, 21em 36.8em, 21.8em 34.2em, 21.8em 21.9em, 21.8em 21.9em, 22.6em 6.9em, 17.4em 4em, 13.3em 3.9em, 9em 7em, 8.5em 21.9em, 8.2em 34.3em, 9em 36.8em, 11em 39em);
  }
  .example1 .chicken__head > div .shadow {
    top: 0em; left: 2em;
    width: 2em; height: 2em;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 85%), transparent);
  }
  .example1 .chicken__head > .shadow {
    top: 7.01em; left: 2em;
    width: 2em; height: 2.9em;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 85%), transparent);
    rotate: x 90deg;
    translate: 0 0 -0.9em;
  }
  .example1 .chicken__wattle .shadow {
    top: 2.02em; left: 0em;
    width: 2em; height: 2em;
    background: linear-gradient(0deg, color-mix(in srgb, var(--shadow), transparent 80%), transparent 1.5em);
    rotate: x 90deg;
  }
  .example1 .chicken__finger > div .shadow {
    top: 0em; left: 0em;
    width: 1em; height: 1.3em;
    background: linear-gradient(180deg, color-mix(in srgb, var(--shadow), transparent 80%), transparent 1.5em);
  }
</style>