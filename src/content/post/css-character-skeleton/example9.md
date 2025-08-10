<div class="example example6" style="--rotate: 0deg;">
  <div class="example__view">
    <div class="mario">
      <!-- body	 -->
      <div class="cube body">
        <div></div>
        <div class="cube">
          <div></div>
        </div>
        <!-- head	 -->
        <div class="cube head">
          <div></div>
          <div class="cube ear-l">
            <div></div>
          </div>
          <div class="cube ear-r">
            <div></div>
          </div>
          <div class="cube eye-l">
            <div></div>
            <div class="cube">
              <div></div>
            </div>
            <div class="cube">
              <div></div>
            </div>
          </div>
          <div class="cube eye-r">
            <div></div>
            <div class="cube">
              <div></div>
            </div>
            <div class="cube">
              <div></div>
            </div>
          </div>
          <div class="cube nose">
            <div></div>
          </div>
          <div class="cube mustache">
            <div></div>
            <div class="cube">
              <div></div>
            </div>
            <div class="cube">
              <div></div>
            </div>
          </div>
          <div class="cube hair">
            <div></div>
            <div class="cube">
              <div></div>
            </div>
            <div class="cube">
              <div></div>
            </div>
            <div class="cube">
              <div></div>
            </div>
          </div>
          <div class="cube hat">
            <div></div>
            <div class="cube">
              <div></div>
            </div>
          </div>
        </div>
        <!-- legs	 -->
        <div class="cube leg-r">
          <div></div>
          <div class="cube knee">
            <div></div>
            <div class="cube foot">
              <div></div>
            </div>
          </div>
        </div>
        <div class="cube leg-l">
          <div></div>
          <div class="cube knee">
            <div></div>
            <div class="cube foot">
              <div></div>
            </div>
          </div>
        </div>
        <!-- arms	 -->
        <div class="cube arm-l">
          <div></div>
          <div class="cube elbow">
            <div></div>
            <div class="cube hand">
              <div></div>
              <div class="cube thumb">
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div class="cube arm-r">
          <div></div>
          <div class="cube elbow">
            <div></div>
            <div class="cube hand">
              <div></div>
              <div class="cube thumb">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- shadow	-->
      <div class="mario__shadow"></div>
    </div>
  </div>
</div>

<style>
  .example6 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .example6 .example__view {
    aspect-ratio: 1;
    transform-style: preserve-3d;
    background-color: #fff0ea;
  }
  .example6 .mario, .example6 .mario *, .example6 .mario *::before, .example6 .mario *::after {
    content: '';
    position: absolute;
    transform-style: preserve-3d;
    transform-origin: top left;
  }

  .example6 .mario {
    --red: #FF5E5B;
    --white: #FFFFFF;
    --orange: #ff945b;
    --light: #FFF4CD;
    --shadow: color-mix(in srgb, #c07d9e, #000000 50%);

    font-size: min(1.5vw, 1.5vh);
    top: 50%; left: 50%;

    transform-origin: 3em 2em;
    transform: translate(-2em, 5em) rotateX(65deg) rotateZ(45deg);
  }



  /* basic smart cube */
  .example6 .cube {
    width: var(--x); height: var(--y);
    background-color: color-mix(in srgb, var(--color) 50%, #333333);
  }
  .example6 .cube::before {
    width: 100%; height: var(--z);
    background-color: color-mix(in srgb, var(--color) 70%, #333333);
    transform-origin: top center;
    rotate: x 90deg;
  }
  .example6 .cube::after {
    width: 100%; height: var(--z);
    background-color: color-mix(in srgb, var(--color) 90%, white);
    translate: 0 var(--y);
    transform-origin: top center;
    rotate: x 90deg;
  }
  .example6 .cube > div:nth-child(1) {
    width: 100%; height: 100%;
    background-color: var(--color);
    translate: 0 0 var(--z);
  }
  .example6 .cube > div:nth-child(1)::before {
    width: var(--z); height: 100%;
    background-color: color-mix(in srgb, var(--color) 90%, #333333);
    transform-origin: left center;
    rotate: y 90deg;
  }
  .example6 .cube > div:nth-child(1)::after {
    width: var(--z); height: 100%;
    background-color: color-mix(in srgb, var(--color) 90%, #333333);
    transform-origin: left center;
    rotate: y 90deg;
    translate: var(--x);
  }



  /* HEAD */
  .example6 .head {
    --x: 10em; --y: 10em; --z: 10em;
    --color: #FCC58C;
    translate: -2em -3em 4em;
  }
  .ear-l {
    --x: 2em; --y: 1em; --z: 3em;
    --color: #FCC58C;
    translate: -2em 6em 3em;
  }
  .ear-r {
    --x: 2em; --y: 1em; --z: 3em;
    --color: #FCC58C;
    translate: 10em 6em 3em;
  }
  .eye-l {
    --x: 1em; --y: 1em; --z: 2em;
    --color: #FFFBFB;
    translate: 2em 10em 4em;

    .cube:nth-child(2) {
      --x: 1em; --y: 1em; --z: 2em;
      --color: #333530;
      translate: 1em 0em 0em;
    }
    .cube:nth-child(3) {
      --x: 2em; --y: 1em; --z: 1em;
      --color: #703332;
      translate: 0em 0em 2em;
    }
  }
  .eye-r {
    --x: 1em; --y: 1em; --z: 2em;
    --color: #FFFBFB;
    translate: 6em 10em 4em;

    .cube:nth-child(2) {
      --x: 1em; --y: 1em; --z: 2em;
      --color: #333530;
      translate: 1em 0em 0em;
    }
    .cube:nth-child(3) {
      --x: 2em; --y: 1em; --z: 1em;
      --color: #703332;
      translate: 0em 0em 2em;
    }
  }
  .nose {
    --x: 4em; --y: 2em; --z: 2em;
    --color: #FCC58C;
    translate: 3em 10em 2em;
  }
  .mustache {
    --x: 6em; --y: 1em; --z: 1em;
    --color: #703332;
    translate: 2em 10em 1em;
    
    .cube {
      --x: 2em; --y: 1em; --z: 2em;
      --color: #703332;

      &:nth-child(2) {
        translate: 5em 0em 1em;
      }
      &:nth-child(3) {
        translate: -1em 0em 1em;
      }
    }
  }
  .hair {
    --x: 12em; --y: 7em; --z: 9em;
    --color: #703332;
    translate: -1em -1em 2em;

    .cube {
      --color: #703332;

      &:nth-child(2) {
        --x: 12em; --y: 3em; --z: 7em;
        translate: 0em 6em 2em;
      }
      &:nth-child(3) {
        --x: 12em; --y: 2em; --z: 6em;
        translate: 0em 8em 3em;
      }
      &:nth-child(4) {
        --x: 12em; --y: 2em; --z: 2em;
        translate: 0em 10em 7em;
      }
    }
  }
  .hat {
    --x: 12em; --y: 11em; --z: 4em;
    --color: #FF0101;
    translate: -1em -1em 10em;

    .cube {
      --x: 12em; --y: 4em; --z: 1em;
      --color: #FF0101;
      translate: 0em 10em 0em;
    }
  }

  /* body */
  .example6 .body {
    --x: 6em; --y: 4em; --z: 6em;
    --color: #FF0101;
    translate: 0em 0em 3em;

    & > .cube:nth-child(2) {
      --x: 6em; --y: 4em; --z: 3em;
      --color: #014DFF;
      translate: 0em 0em -3em;
    }
  }

  /* legs */
  .example6 .leg-r {
    --x: 2em; --y: 2em; --z: 3em;
    --color: #014DFF;
    translate: 4em 1em -5em;
    rotate: x 0deg;
    transform-origin: center center 3em;
  }
  .example6 .leg-l {
    --x: 2em; --y: 2em; --z: 3em;
    --color: #014DFF;
    translate: 0em 1em -5em;
    rotate: x 0deg;
    transform-origin: center center 3em;
  }
  .example6 .knee {
    --x: 2em; --y: 2em; --z: 3em;
    --color: #014DFF;
    translate: 0em 0em -3em;
    transform-origin: bottom center 3em;
    rotate: x 0deg;
  }
  .example6 .foot {
    --x: 2em; --y: 3em; --z: 1em;
    --color: #703332;
    translate: 0em 0em -1em;
    transform-origin: top center 1em;
    rotate: x 0deg;
  }

  /* arms */
  .example6 .arm-l {
    --x: 2em; --y: 2em; --z: 2em;
    --color: #FF0101;
    translate: -2em 1em 1em;
    transform-origin: center right 2em;
    rotate: x 0deg;

    .thumb {
      translate: 0em 2em 1em;
    }
  }
  .example6 .arm-r {
    --x: 2em; --y: 2em; --z: 2em;
    --color: #FF0101;
    translate: 6em 1em 1em;
    transform-origin: center left 2em;
    rotate: x 0deg;

    .thumb {
      translate: 0em 2em 1em;
    }
  }
  .example6 .elbow {
    --x: 2em; --y: 2em; --z: 2em;
    --color: #FF0101;
    translate: 0em 0em -2em;
    transform-origin: top center 2em;
    rotate: x 0deg;
  }
  .example6 .hand {
    --x: 2em; --y: 2em; --z: 2em;
    --color: #FCC58C;
    translate: 0em 0em -2em;
    transform-origin: center center 2em;
    rotate: x 0deg;
  }
  .example6 .thumb {
    --x: 1em; --y: 1em; --z: 1em;
    --color: #FCC58C;
    transform-origin: top center .5em;
    rotate: x 0deg;
  }




  /* COLORING */
  /* .example6 .head > div:nth-child(1),
  .example6 .chicken__comb > div:nth-child(1),
  .example6 .chicken__comb::after,
  .example6 .chicken__beak > div:nth-child(1) {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 0%) !important;
  }
  .example6 .head::after,
  .example6 .body::after,
  .example6 .chicken__beak::after {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 3%) !important;
  }
  .example6 .chicken__wing::after {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 5%) !important;
  }
  .example6 .head > div:nth-child(1)::before,
  .example6 .head > div:nth-child(1)::after,
  .example6 .body > div:nth-child(1)::before,
  .example6 .body > div:nth-child(1)::after,
  .example6 .chicken__comb > div:nth-child(1)::before,
  .example6 .chicken__comb > div:nth-child(1)::after,
  .example6 .chicken__beak > div:nth-child(1)::before,
  .example6 .chicken__beak > div:nth-child(1)::after,
  .example6 .chicken__finger::after {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 7%) !important;
  }
  .example6 .chicken__wing > div:nth-child(1),
  .example6 .chicken__wattle > div:nth-child(1)::before,
  .example6 .chicken__wattle > div:nth-child(1)::after {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 9%) !important;
  }
  .example6 .body > div:nth-child(1),
  .example6 .chicken__wing > div:nth-child(1)::after,
  .example6 .chicken__wattle::after,
  .example6 .chicken__finger > div:nth-child(1) {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 18%) !important;
  }
  .example6 .body {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 28%) !important;
  }
  .example6 .chicken__finger > div:nth-child(1)::before,
  .example6 .chicken__finger > div:nth-child(1)::after,
  .example6 .chicken__foot > div:nth-child(1)::before,
  .example6 .chicken__foot > div:nth-child(1)::after,
  .example6 .chicken__knee::after,
  .example6 .head::before {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 32%) !important;
  }
  .example6 .chicken__foot > div:nth-child(1) {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 34%) !important;
  }
  .example6 .chicken__knee > div:nth-child(1)::before,
  .example6 .chicken__knee > div:nth-child(1)::after,
  .example6 .chicken__wing::before,
  .example6 .chicken__beak {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 42%) !important;
  }
  .example6 .chicken__foot::after,
  .example6 .chicken__wattle,
  .example6 .chicken__knee::before,
  .example6 .body::before {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 44%) !important;
  }
  .example6 .chicken__foot::before,
  .example6 .chicken__wing {
    background-color:  color-mix(in srgb, var(--white), var(--shadow) 52%) !important;
  } */



  /*  shadows  */
  .example6 .mario__shadow {
    width: 24em; height: 40em;
    transform: translateX(-50%) translateY(-34em) translateZ(-9em);
    filter: blur(2em);
  }
  .example6 .mario__shadow::before {
    width: 100%; height: 100%;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 75%), transparent);
    clip-path: polygon(12em 39em, 13em 39em, 13em 37em, 17em 37em, 17em 39em, 18em 39em, 21em 36.8em, 21.8em 34.2em, 21.8em 21.9em, 21.8em 21.9em, 22.6em 6.9em, 17.4em 4em, 13.3em 3.9em, 9em 7em, 8.5em 21.9em, 8.2em 34.3em, 9em 36.8em, 11em 39em);
  }
  .example6 .head > div .shadow {
    top: 0em; left: 2em;
    width: 2em; height: 2em;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 85%), transparent);
  }
  .example6 .head > .shadow {
    top: 7.01em; left: 2em;
    width: 2em; height: 2.9em;
    background: linear-gradient(0deg, color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 85%), transparent);
    rotate: x 90deg;
    translate: 0 0 -0.9em;
  }
</style>