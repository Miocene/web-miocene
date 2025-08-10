<div class="example-grid">
<div class="example example4 example4-1">
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
  <div class="example__code"><strong>16</strong> animation declarations to make this chicken <strong>just jump</strong></div>
</div>
<div class="example example4 example4-2">
  <div class="example__view">
    <div class="chicken">
      <!-- body	 -->
      <div class="cube chicken__body">
        <div></div>
        <!-- head	 -->
        <div class="cube chicken__head">
          <div>
            <div class="shadow"></div>
          </div>
          <div class="shadow"></div>
          <div class="cube chicken__beak">
            <div></div>
            <div class="cube chicken__wattle">
              <div></div>
              <div class="shadow"></div>
            </div>
          </div>
          <div class="cube chicken__comb">
            <div></div>
          </div>
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
      </div>
      <!-- legs	 -->
      <div class="cube chicken__knee chicken__knee-right">
        <div></div>
        <div class="cube chicken__foot chicken__foot-right">
          <div></div>
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
        </div>
      </div>
      <div class="cube chicken__knee chicken__knee-left">
        <div></div>
        <div class="cube chicken__foot chicken__foot-left">
          <div></div>
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
        </div>
      </div>
      <!-- shadow	-->
      <div class="chicken__shadow"></div>
    </div>
  </div>
  <div class="example__code"><strong>4</strong> animation declarations to make this chicken jump <strong>and</strong> flap wings</div>
</div>
</div>

<style>
  .example4 .example__view {
    aspect-ratio: 1;
    background-color: #fff0ea;
  }

  .example4 .chicken, .example4 .chicken *, .example4 .chicken *::before, .example4 .chicken *::after {
    content: '';
    position: absolute;
    transform-style: preserve-3d;
    transform-origin: top left;
  }

  .example4 .chicken {
    --red: #FF5E5B;
    --white: #FFFFFF;
    --orange: #ff945b;
    --light: #FFF4CD;
    --shadow: color-mix(in srgb, #c07d9e, #000000 50%);

    font-size: min(1vw, 1vh);
    top: 50%; left: 50%;

    transform-origin: 3em 2em;
    transform: translate(-2em, -2em) rotateX(65deg) rotateZ(45deg);
  }



  /* basic smart cube */
  .example4 .cube {
    width: var(--x); height: var(--y);
    background-color: color-mix(in srgb, var(--color) 50%, #333333);
  }
  .example4 .cube::before {
    width: 100%; height: var(--z);
    background-color: color-mix(in srgb, var(--color) 70%, #333333);
    transform-origin: top center;
    rotate: x 90deg;
  }
  .example4 .cube::after {
    width: 100%; height: var(--z);
    background-color: color-mix(in srgb, var(--color) 90%, white);
    translate: 0 var(--y);
    transform-origin: top center;
    rotate: x 90deg;
  }
  .example4 .cube > div:nth-child(1) {
    width: 100%; height: 100%;
    background-color: var(--color);
    translate: 0 0 var(--z);
  }
  .example4 .cube > div:nth-child(1)::before {
    width: var(--z); height: 100%;
    background-color: color-mix(in srgb, var(--color) 90%, #333333);
    transform-origin: left center;
    rotate: y 90deg;
  }
  .example4 .cube > div:nth-child(1)::after {
    width: var(--z); height: 100%;
    background-color: color-mix(in srgb, var(--color) 90%, #333333);
    transform-origin: left center;
    rotate: y 90deg;
    translate: var(--x);
  }



  .example4 .chicken__head {
    --x: 6em; --y: 7em; --z: 8em;
    --color: var(--white);
  }
  .example4 .chicken__head > div::before,
  .example4 .chicken__head > div::after {
    background-image: linear-gradient(black, black);
    background-position: 2em 4em;
    background-size: 1em 1em;
    background-repeat: no-repeat;
  }
  .example4 .chicken__beak {
    --x: 2em; --y: 3em; --z: 2em;
    --color: var(--orange);
  }
  .example4 .chicken__wattle {
    --x: 2em; --y: 2em; --z: 2em;
    --color: var(--red);
  }
  .example4 .chicken__comb {
    --x: 2em; --y: 4em; --z: 2em;
    --color: var(--red);
  }
  .example4 .chicken__body {
    --x: 6em; --y: 10em; --z: 5em;
    --color: var(--white);
  }
  .example4 .chicken__tail {
    --x: 4em; --y: 2em; --z: 5em;
    --color: var(--white);
  }
  .example4 .chicken__wing {
    --x: 2em; --y: 6em; --z: 3em;
    --color: var(--white);
  }
  .example4 .chicken__knee {
    --x: 1em; --y: 1em; --z: 3em;
    --color: var(--orange);
  }
  .example4 .chicken__foot {
    --x: 3em; --y: 3em; --z: 1em;
    --color: var(--orange);
  }
  .example4 .chicken__finger {
    --x: 1em; --y: 2em; --z: 1em;
    --color: var(--orange);
  }



  /* COLORING */
  .example4 .chicken__head > div:nth-child(1),
  .example4 .chicken__comb > div:nth-child(1),
  .example4 .chicken__comb::after,
  .example4 .chicken__beak > div:nth-child(1) {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 0%) !important;
  }
  .example4 .chicken__head::after,
  .example4 .chicken__body::after,
  .example4 .chicken__beak::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 3%) !important;
  }
  .example4 .chicken__wing::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 5%) !important;
  }
  .example4 .chicken__head > div:nth-child(1)::before,
  .example4 .chicken__head > div:nth-child(1)::after,
  .example4 .chicken__body > div:nth-child(1)::before,
  .example4 .chicken__body > div:nth-child(1)::after,
  .example4 .chicken__comb > div:nth-child(1)::before,
  .example4 .chicken__comb > div:nth-child(1)::after,
  .example4 .chicken__beak > div:nth-child(1)::before,
  .example4 .chicken__beak > div:nth-child(1)::after,
  .example4 .chicken__finger::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 7%) !important;
  }
  .example4 .chicken__wing > div:nth-child(1),
  .example4 .chicken__wattle > div:nth-child(1)::before,
  .example4 .chicken__wattle > div:nth-child(1)::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 9%) !important;
  }
  .example4 .chicken__body > div:nth-child(1),
  .example4 .chicken__tail > div:nth-child(1),
  .example4 .chicken__wing > div:nth-child(1)::after,
  .example4 .chicken__wattle::after,
  .example4 .chicken__finger > div:nth-child(1) {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 18%) !important;
  }
  .example4 .chicken__body,
  .example4 .chicken__tail {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 28%) !important;
  }
  .example4 .chicken__finger > div:nth-child(1)::before,
  .example4 .chicken__finger > div:nth-child(1)::after,
  .example4 .chicken__foot > div:nth-child(1)::before,
  .example4 .chicken__foot > div:nth-child(1)::after,
  .example4 .chicken__knee::after,
  .example4 .chicken__tail > div:nth-child(1)::before,
  .example4 .chicken__tail > div:nth-child(1)::after,
  .example4 .chicken__head::before {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 32%) !important;
  }
  .example4 .chicken__foot > div:nth-child(1) {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 34%) !important;
  }
  .example4 .chicken__knee > div:nth-child(1)::before,
  .example4 .chicken__knee > div:nth-child(1)::after,
  .example4 .chicken__wing::before,
  .example4 .chicken__beak {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 42%) !important;
  }
  .example4 .chicken__foot::after,
  .example4 .chicken__wattle,
  .example4 .chicken__knee::before,
  .example4 .chicken__body::before {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 44%) !important;
  }
  .example4 .chicken__foot::before,
  .example4 .chicken__wing,
  .example4 .chicken__tail::before {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 52%) !important;
  }



  /*  shadows  */
  .example4 .chicken__shadow {
    width: 24em; height: 40em;
    transform: translateX(-50%) translateY(-34em) translateZ(-9em);
    filter: blur(2em);
  }
  .example4 .chicken__shadow::before {
    width: 100%; height: 100%;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 75%), transparent);
    clip-path: polygon(12em 39em, 13em 39em, 13em 37em, 17em 37em, 17em 39em, 18em 39em, 21em 36.8em, 21.8em 34.2em, 21.8em 21.9em, 21.8em 21.9em, 22.6em 6.9em, 17.4em 4em, 13.3em 3.9em, 9em 7em, 8.5em 21.9em, 8.2em 34.3em, 9em 36.8em, 11em 39em);
  }
  .example4 .chicken__head > div .shadow {
    top: 0em; left: 2em;
    width: 2em; height: 2em;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 85%), transparent);
  }
  .example4 .chicken__head > .shadow {
    top: 7.01em; left: 2em;
    width: 2em; height: 2.9em;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 85%), transparent);
    rotate: x 90deg;
    translate: 0 0 -0.9em;
  }
  .example4 .chicken__wattle .shadow {
    top: 2.02em; left: 0em;
    width: 2em; height: 2em;
    background: linear-gradient(0deg, color-mix(in srgb, var(--shadow), transparent 80%), transparent 1.5em);
    rotate: x 90deg;
  }
  .example4 .chicken__finger > div .shadow {
    top: 0em; left: 0em;
    width: 1em; height: 1.3em;
    background: linear-gradient(180deg, color-mix(in srgb, var(--shadow), transparent 80%), transparent 1.5em);
  }


  /* example 1 */
  @property --e4-1 {
    syntax: "<number>";
    inherits: false;
    initial-value: 0;
  }
  .example4-1 .chicken__head {
    translate: 0em 0em calc(0em + var(--e4-1) * 1em);
    animation: example4-1 3s -.05s infinite;
  }
  @keyframes example4-1 {
    0%, 85%, 100% { --e4-1: 0; }
    20%, 80% { --e4-1: -1; }
    50%, 60% { --e4-1: 5; }
  }
  @keyframes example4-2 {
    0%, 20%, 80%, 100% { --e4-1: 0; }
    50%, 60% { --e4-1: 5; }
  }
  .example4-1 .chicken__beak {
    translate: 2em 7em calc(4em + var(--e4-1) * 1em);
    animation: example4-1 3s -.1s infinite;
  }
  .example4-1 .chicken__wattle {
    translate: 2em 7em calc(2em + var(--e4-1) * 1em);
    animation: example4-1 3s -.15s infinite;
  }
  .example4-1 .chicken__comb {
    translate: 2em 2em calc(8em + var(--e4-1) * 1em);
    animation: example4-1 3s -.1s infinite;
  }
  .example4-1 .chicken__body {
    translate: 0em -3em calc(-5em + var(--e4-1) * 1em);
    animation: example4-1 3s infinite;
  }
  .example4-1 .chicken__tail {
    translate: 1em -5em calc(-5em + var(--e4-1) * 1em);
    animation: example4-1 3s -.05s infinite;
  }
  .example4-1 .chicken__wing {
    animation: example4-1 3s -.05s infinite;
  }
  .example4-1 .chicken__wing-left {
    translate: -2em 0em calc(-4em + var(--e4-1) * 1em);
  }
  .example4-1 .chicken__wing-right {
    translate: 6em 0em calc(-4em + var(--e4-1) * 1em);
  }
  .example4-1 .chicken__knee {
    animation: example4-2 3s -.05s infinite;
  }
  .example4-1 .chicken__knee-right {
    translate: 5em 2em calc(-8em + var(--e4-1) * 1em);
  }
  .example4-1 .chicken__knee-left {
    translate: 0em 2em calc(-8em + var(--e4-1) * 1em);
  }
  .example4-1 .chicken__foot {
    animation: example4-2 3s -.1s infinite;
  }
  .example4-1 .chicken__foot-right {
    translate: 4em 1em calc(-9em + var(--e4-1) * 1em);
  }
  .example4-1 .chicken__foot-left {
    translate: -1em 1em calc(-9em + var(--e4-1) * 1em);
  }
  .example4-1 .chicken__finger {
    animation: example4-2 3s -.15s infinite;
  }
  .example4-1 .chicken__finger-one {
    translate: -1em 4em calc(-9em + var(--e4-1) * 1em);
  }
  .example4-1 .chicken__finger-two {
    translate: 1em 4em calc(-9em + var(--e4-1) * 1em);
  }
  .example4-1 .chicken__finger-three {
    translate: 4em 4em calc(-9em + var(--e4-1) * 1em);
  }
  .example4-1 .chicken__finger-four {
    translate: 6em 4em calc(-9em + var(--e4-1) * 1em);
  }

  /* example 2 */
  .example4-2 .chicken__body {
    translate: 0em -3em -5em;
    animation: example4-body 3s infinite;
  }
  @keyframes example4-body {
    0%, 90%, 100% { translate: 0em -3em -5em; }
    20%, 80% { translate: 0em -3em -6em; }
    50%, 60% { translate: 0em -3em 0em; }
  }
  .example4-2 .chicken__head {
    translate: 0em 3em 5em;
  }
  .example4-2 .chicken__beak {
    translate: 2em 7em 4em;
  }
  .example4-2 .chicken__wattle {
    translate: 0em 0em -2em;
  }
  .example4-2 .chicken__comb {
    translate: 2em 2em 8em;
  }
  .example4-2 .chicken__tail {
    translate: -2em -5em -2em;
  }
  .example4-2 .chicken__wing-left {
    translate: -2em 3em 1em;
    transform-origin: top right 3em;
    animation: example4-wing-left 3s -.1s infinite;
  }
  @keyframes example4-wing-left {
    0%, 20%, 100% { rotate: y 0deg; }
    50%, 70% { rotate: y 90deg; }
  }
  .example4-2 .chicken__wing-right {
    translate: 6em 3em 1em;
    transform-origin: top left 3em;
    animation: example4-wing-right 3s -.1s infinite;
  }
  @keyframes example4-wing-right {
    0%, 20%, 100% { rotate: y 0deg; }
    50%, 70% { rotate: y -90deg; }
  }
  .example4-2 .chicken__knee {
    animation: example4-knee 3s infinite;
  }
  @keyframes example4-knee {
    0%, 20%, 80%, 100% { transform: translateZ(0em); }
    50%, 60% { transform: translateZ(5em); }
  }
  .example4-2 .chicken__knee-right {
    translate: 5em 3em -8em;
  }
  .example4-2 .chicken__knee-left {
    translate: 0em 3em -8em;
  }
  .example4-2 .chicken__foot {
    translate: -1em -1em -1em;
  }
  .example4-2 .chicken__finger-one {
    translate: 0em 3em 0em;
  }
  .example4-2 .chicken__finger-two {
    translate: 2em 3em 0em;
  }
</style>