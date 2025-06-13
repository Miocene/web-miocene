<div class="example example4" style="--rotate: 0deg;">
  <div class="example__view">
    <div class="chicken">
      <div class="floor"></div>
      <!-- head	 -->
      <div class="cube chicken__head"><div></div></div>
      <div class="cube chicken__beak"><div></div></div>
      <div class="cube chicken__wattle"><div></div></div>
      <div class="cube chicken__comb"><div></div></div>
      <!-- body	 -->
      <div class="cube chicken__body"><div></div></div>
      <div class="cube chicken__tail"><div></div></div>
      <div class="cube chicken__wing chicken__wing-left"><div></div></div>
      <div class="cube chicken__wing chicken__wing-right"><div></div></div>
      <!-- legs	 -->
      <div class="cube chicken__knee chicken__knee-right"><div></div></div>
      <div class="cube chicken__knee chicken__knee-left"><div></div></div>
      <div class="cube chicken__foot chicken__foot-right"><div></div></div>
      <div class="cube chicken__foot chicken__foot-left"><div></div></div>
      <div class="cube chicken__finger chicken__finger-one"><div></div></div>
      <div class="cube chicken__finger chicken__finger-two"><div></div></div>
      <div class="cube chicken__finger chicken__finger-three"><div></div></div>
      <div class="cube chicken__finger chicken__finger-four"><div></div></div>
      <div class="lightsource">
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="lightsource-0">
          <div class="lightsource-1">
            <div class="lightsource-1-1">
              <div class="lightsource-1-1-1">
                <div class="lightsource-1-1-1-1"></div>
              </div>
            </div>
          </div>
          <div class="lightsource-2">
            <div class="lightsource-2-1">
              <div class="lightsource-2-1-1">
                <div class="lightsource-2-1-1-1">
                  <div class="lightsource-2-1-1-1-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="lightsource-3">
            <div class="lightsource-3-1">
              <div class="lightsource-3-1-1"></div>
            </div>
            <div class="lightsource-3-2">
              <div class="lightsource-3-2-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="controls">
    <label>
      rotate chicken
      <input class="range" type="range" id="E4rotate" name="E4rotate" min="0" max="360" value="0"
        oninput="rotate4()" />
    </label>
  </div>
</div>

<style>
  .example4 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  .example4 .example__view {
    aspect-ratio: 1;
    transform-style: preserve-3d;
  }
  .example4 .chicken {
    --red: #FF5E5B;
    --white: #FFFFFF;
    --orange: #ff945b;

    font-size: min(2vw, 2vh);
    top: 50%; left: 50%;

    transform-style: preserve-3d;
    transform: rotateX(65deg) rotateZ(calc(45deg + var(--rotate)));
    translate: 0 -2em;
  }
  .example4 .example__view *, .example4 .example__view *::before, .example4 .example__view *::after {
    content: '';
    position: absolute;
    transform-style: preserve-3d;
    transform-origin: top left;
  }


  /* basic smart cube ---> */
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
    .example4 .cube > div {
      width: 100%; height: 100%;
      background-color: var(--color);
      translate: 0 0 var(--z);
    }
      .example4 .cube > div::before {
        width: var(--z); height: 100%;
        background-color: color-mix(in srgb, var(--color) 90%, #333333);
        transform-origin: left center;
        rotate: y 90deg;
      }
      .example4 .cube > div::after {
        width: var(--z); height: 100%;
        background-color: color-mix(in srgb, var(--color) 90%, #333333);
        transform-origin: left center;
        rotate: y 90deg;
        translate: var(--x);
      }
  /* <--- basic smart cube */


  .example4 .chicken__head {
    --x: 6em; --y: 7em; --z: 8em;
    --color: var(--white);
  }
  .chicken__head > div::before,
  .example4 .chicken__head > div::after {
    background-image: linear-gradient(black, black);
    background-position: 2em 4em;
    background-size: 1em 1em;
    background-repeat: no-repeat;
  }

  .example4 .chicken__beak {
    --x: 2em; --y: 3em; --z: 2em;
    translate: 2em 7em 4em;
    --color: var(--orange);
  }

  .example4 .chicken__wattle {
    --x: 2em; --y: 2em; --z: 2em;
    translate: 2em 7em 2em;
    --color: var(--red);
  }

  .example4 .chicken__comb {
    --x: 2em; --y: 4em; --z: 2em;
    translate: 2em 2em 8em;
    --color: var(--red);
  }

  .example4 .chicken__body {
    --x: 6em; --y: 10em; --z: 5em;
    translate: 0em -3em -5em;
    --color: var(--white);
  }

  .example4 .chicken__tail {
    --x: 4em; --y: 2em; --z: 5em;
    translate: 1em -5em -5em;
    --color: var(--white);
  }

  .example4 .chicken__wing {
    --x: 2em; --y: 6em; --z: 3em;
    --color: var(--white);
  }
    .example4 .chicken__wing-left {
      translate: -2em 0em -4em;
    }
    .example4 .chicken__wing-right {
      translate: 6em 0em -4em;
    }

  .example4 .chicken__knee {
    --x: 1em; --y: 1em; --z: 3em;
    --color: var(--orange);
  }
    .example4 .chicken__knee-right {
      translate: 5em 2em -8em;
    }
    .example4 .chicken__knee-left {
      translate: 0em 2em -8em;
    }

  .example4 .chicken__foot {
    --x: 3em; --y: 3em; --z: 1em;
    --color: var(--orange);
  }
    .example4 .chicken__foot-right {
      translate: 4em 1em -9em;
    }
    .example4 .chicken__foot-left {
      translate: -1em 1em -9em;
    }

  .example4 .chicken__finger {
    --x: 1em; --y: 2em; --z: 1em;
    --color: var(--orange);
  }
    .example4 .chicken__finger-one {
      translate: -1em 4em -9em;
    }
    .example4 .chicken__finger-two {
      translate: 1em 4em -9em;
    }
    .example4 .chicken__finger-three {
      translate: 4em 4em -9em;
    }
    .example4 .chicken__finger-four {
      translate: 6em 4em -9em;
    }


  .example4 .lightsource {
    --side: min(2vw, 2vh);
    --angle: -41.8deg;
    --color: #ffc600;
    top: 0em;
    left: 2em;
    width: calc(var(--side) * 1.62);
    height: calc(var(--side) * 1.54);
    transform-origin: 50% 50%;
    transform: rotateY(0deg) rotateX(-45deg) translateZ(32em);
  }
  .example4 .lightsource div {
    width: var(--side);
    height: calc((sqrt(3) / 2) * var(--side));
  }
  .example4 .lightsource div::before, .example4 .lightsource::before {
    width: 100%; height: 100%;
  }
  .example4 .lightsource::before {
    background-color: color-mix(in srgb, var(--color), black 50%);
    clip-path: polygon(0% 38%, 50% 0%, 100% 38%, 81% 100%, 19% 100%);
  }
  .example4 .lightsource::after {
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background-color: color-mix(in srgb, var(--color), white 70%);
    filter: blur(3vw);
    translate: -50% -50% -0.1px;
  }
  .example4 .lightsource-0 {
    transform: translate(calc(var(--side) * .31), calc(var(--side) * 0.16)) translateZ(calc(var(--side) * -.85)) rotateX(100.7deg);
  }
  .example4 .lightsource-0::before {
    background-color: color-mix(in srgb, var(--color), white 0%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-1 {
    transform: rotateZ(60deg) rotateX(var(--angle));
  }
  .example4 .lightsource-1::before {
    background-color: color-mix(in srgb, var(--color), black 5%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-1-1 {
    transform: rotateZ(60deg) rotateX(var(--angle));
  }
  .example4 .lightsource-1-1::before {
    background-color: color-mix(in srgb, var(--color), white 0%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-1-1-1 {
    left: 50%;
    top: 100%;
    transform: rotateZ(-60deg) rotateX(var(--angle));
  }
  .example4 .lightsource-1-1-1::before {
    background-color: color-mix(in srgb, var(--color), black 5%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-1-1-1-1 {
    transform: rotateZ(60deg) rotateX(var(--angle));
  }
  .example4 .lightsource-1-1-1-1::before {
    background-color: color-mix(in srgb, var(--color), white 0%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-2 {
    left: 50%;
    top: 100%;
    transform: rotateZ(-60deg) rotateX(var(--angle));
  }
  .example4 .lightsource-2::before {
    background-color: color-mix(in srgb, var(--color), black 5%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-2-1 {
    left: 50%;
    top: 100%;
    transform: rotateZ(-60deg) rotateX(var(--angle));
  }
  .example4 .lightsource-2-1::before {
    background-color: color-mix(in srgb, var(--color), white 0%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-2-1-1 {
    transform: rotateZ(60deg) rotateX(var(--angle));
  }
  .example4 .lightsource-2-1-1::before {
    background-color: color-mix(in srgb, var(--color), black 5%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-2-1-1-1 {
    top: 100%;
    left: 50%;
    transform: rotateZ(-60deg) rotateX(var(--angle));
  }
  .example4 .lightsource-2-1-1-1::before {
    background-color: color-mix(in srgb, var(--color), white 0%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-2-1-1-1-1 {
    transform: rotateZ(60deg) rotateX(var(--angle));
  }
  .example4 .lightsource-2-1-1-1-1::before {
    background-color: color-mix(in srgb, var(--color), black 5%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-3 {
    transform: rotateX(calc(180deg - var(--angle)));
  }
  .example4 .lightsource-3::before {
    background-color: color-mix(in srgb, var(--color), white 40%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-3-1 {
    transform: rotateZ(60deg) rotateX(calc(var(--angle) * -1));
  }
  .example4 .lightsource-3-1::before {
    background-color: color-mix(in srgb, var(--color), white 50%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-3-1-1 {
    left: 50%;
    top: 100%;
    transform: rotateZ(-60deg) rotateX(calc(var(--angle) * -1));
  }
  .example4 .lightsource-3-1-1::before {
    background-color: color-mix(in srgb, var(--color), white 55%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-3-2 {
    left: 50%;
    top: 100%;
    transform: rotateZ(-60deg) rotateX(calc(var(--angle) * -1));
  }
  .example4 .lightsource-3-2::before {
    background-color: color-mix(in srgb, var(--color), white 45%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example4 .lightsource-3-2-1 {
    transform: rotateZ(60deg) rotateX(calc(var(--angle) * -1));
  }
  .example4 .lightsource-3-2-1::before {
    background-color: color-mix(in srgb, var(--color), white 50%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }

  .example4 .floor {
    width: 50em; height: 170em;
    background: #84A59D;
    transform: translateX(-50%) translateY(-50%) translateZ(-9em);
  }

  .example4 .lightsource .ray {
    top: 50%; left: 50%;
    width: 1px; height: 50em;
    background: red;
  }
  .example4 .lightsource .ray:nth-child(1) {
    transform: rotateX(-93.2deg) rotateZ(7.6deg) rotateY(45deg);
  }
  .example4 .lightsource .ray:nth-child(2) {
    transform: rotateX(-93.2deg) rotateZ(-8.4deg) rotateY(45deg);
  }
  .example4 .lightsource .ray:nth-child(3) {
    transform: rotateX(-102.9deg) rotateZ(-7.4deg) rotateY(45deg);
  }
  .example4 .lightsource .ray:nth-child(4) {
    transform: rotateX(-83.9deg) rotateZ(-3.2deg) rotateY(45deg);
  }
  .example4 .lightsource .ray:nth-child(5) {
    transform: rotateX(-83.9deg) rotateZ(2.3deg) rotateY(45deg);
  }
  .example4 .lightsource .ray:nth-child(6) {
    transform: rotateX(-75.7deg) rotateZ(-5.7deg) rotateY(45deg);
  }
  .example4 .lightsource .ray:nth-child(7) {
    transform: rotateX(-75.7deg) rotateZ(5.3deg) rotateY(45deg);
  }
</style>

<script>
  const chickenExample4 = document.querySelector('.example4');
  const E4rotate = document.querySelector('#E4rotate');
  
  function rotate4(value) {
    chickenExample4.setAttribute('style',`--rotate: ${E4rotate.value}deg;`);
  }
</script>