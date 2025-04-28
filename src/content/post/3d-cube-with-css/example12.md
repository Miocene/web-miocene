<div class="example example22">
<div class="example__view">
  <div class="chicken">
    <!-- head	 -->
    <div class="cube chicken__head"><div></div></div>
    <div class="cube chicken__beak"><div></div></div>
    <div class="cube chicken__wattle"><div></div></div>
    <div class="cube chicken__comb"><div></div></div>
  </div>
</div>
</div>

<style>
  .example22 .example__view {
    height: 400px;
    background-color: #333333;
  }

  .example22 .chicken {
    --red: #FF5E5B;
    --white: #FFFFFF;
    --orange: #ff945b;

    font-size: 1em;
    top: 50%; left: 50%;

    transform-style: preserve-3d;
    transform-origin: -1em 2em;
    transform: rotateX(65deg) rotateZ(45deg);
  }
  .example22 .chicken, .example22 .chicken div, .example22 .chicken div::before, .example22 .chicken div::after {
    content: '';
    position: absolute;
    transform-style: preserve-3d;
  }


  /* basic smart cube ---> */
  .example22 .cube {
    width: var(--x); height: var(--y);
    background-color: color-mix(in srgb, var(--color) 50%, #333333);
  }
    .example22 .cube::before {
      width: 100%; height: var(--z);
      background-color: color-mix(in srgb, var(--color) 70%, #333333);
      transform-origin: top center;
      rotate: x 90deg;
    }
    .example22 .cube::after {
      width: 100%; height: var(--z);
      background-color: color-mix(in srgb, var(--color) 90%, white);
      translate: 0 var(--y);
      transform-origin: top center;
      rotate: x 90deg;
    }
    .example22 .cube > div {
      width: 100%; height: 100%;
      background-color: var(--color);
      translate: 0 0 var(--z);
    }
      .example22 .cube > div::before {
        width: var(--z); height: 100%;
        background-color: color-mix(in srgb, var(--color) 90%, #333333);
        transform-origin: left center;
        rotate: y 90deg;
      }
      .example22 .cube > div::after {
        width: var(--z); height: 100%;
        background-color: color-mix(in srgb, var(--color) 90%, #333333);
        transform-origin: left center;
        rotate: y 90deg;
        translate: var(--x);
      }
  /* <--- basic smart cube */


  .example22 .chicken__head {
    --x: 6em; --y: 7em; --z: 8em;
    --color: var(--white);
  }
  .example22 .chicken__head > div::before,
  .example22 .chicken__head > div::after {
    background-image: linear-gradient(black, black);
    background-position: 2em 4em;
    background-size: 1em 1em;
    background-repeat: no-repeat;
  }

  .example22 .chicken__beak {
    --x: 2em; --y: 3em; --z: 2em;
    translate: 2em 15em 4em;
    --color: var(--orange);
    animation: example22ChickenBeak 2s ease infinite alternate;
  }
  @keyframes example22ChickenBeak {
    to { translate: 2em 7em 4em; }
  }

  .example22 .chicken__wattle {
    --x: 2em; --y: 2em; --z: 2em;
    translate: 2em 10em 2em;
    --color: var(--red);
    animation: example22ChickenWattle 2s ease infinite alternate;
  }
  @keyframes example22ChickenWattle {
    to { translate: 2em 7em 2em; }
  }

  .example22 .chicken__comb {
    --x: 2em; --y: 4em; --z: 2em;
    translate: 2em 2em 12em;
    --color: var(--red);
    animation: example22ChickenComb 2s ease infinite alternate;
  }
  @keyframes example22ChickenComb {
    to { translate: 2em 2em 8em; }
  }
</style>