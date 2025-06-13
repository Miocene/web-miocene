<div class="example example6" style="--rotate: 0deg;">
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
      <!-- shadow	 -->
      <div class="chicken__shadow"></div>
      <!-- light	 -->
      <div class="lightsource">
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
        <div class="ray"></div>
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
      <input class="range" type="range" id="E6rotate" name="E6rotate" min="0" max="360" value="0"
        oninput="rotate6()" />
    </label>
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
  }
  .example6 .chicken {
    --red: #FF5E5B;
    --white: #FFFFFF;
    --orange: #ff945b;
    --light:  #FFF4CD;
    --shadow:  #000000;

    font-size: min(2vw, 2vh);
    top: 50%; left: 50%;

    transform-style: preserve-3d;
    transform: rotateX(65deg) rotateZ(calc(45deg + var(--rotate)));
    translate: 0 -2em;
  }
  .example6 .example__view *, .example6 .example__view *::before, .example6 .example__view *::after {
    content: '';
    position: absolute;
    transform-style: preserve-3d;
    transform-origin: top left;
  }


  /* basic smart cube ---> */
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
    .example6 .cube > div {
      width: 100%; height: 100%;
      background-color: var(--color);
      translate: 0 0 var(--z);
    }
      .example6 .cube > div::before {
        width: var(--z); height: 100%;
        background-color: color-mix(in srgb, var(--color) 90%, #333333);
        transform-origin: left center;
        rotate: y 90deg;
      }
      .example6 .cube > div::after {
        width: var(--z); height: 100%;
        background-color: color-mix(in srgb, var(--color) 90%, #333333);
        transform-origin: left center;
        rotate: y 90deg;
        translate: var(--x);
      }
  /* <--- basic smart cube */


  .example6 .chicken__head {
    --x: 6em; --y: 7em; --z: 8em;
    --color: var(--white);
  }
  .chicken__head > div::before,
  .example6 .chicken__head > div::after {
    background-image: linear-gradient(black, black);
    background-position: 2em 4em;
    background-size: 1em 1em;
    background-repeat: no-repeat;
  }

  .example6 .chicken__beak {
    --x: 2em; --y: 3em; --z: 2em;
    translate: 2em 7em 4em;
    --color: var(--orange);
  }

  .example6 .chicken__wattle {
    --x: 2em; --y: 2em; --z: 2em;
    translate: 2em 7em 2em;
    --color: var(--red);
  }

  .example6 .chicken__comb {
    --x: 2em; --y: 4em; --z: 2em;
    translate: 2em 2em 8em;
    --color: var(--red);
  }

  .example6 .chicken__body {
    --x: 6em; --y: 10em; --z: 5em;
    translate: 0em -3em -5em;
    --color: var(--white);
  }

  .example6 .chicken__tail {
    --x: 4em; --y: 2em; --z: 5em;
    translate: 1em -5em -5em;
    --color: var(--white);
  }

  .example6 .chicken__wing {
    --x: 2em; --y: 6em; --z: 3em;
    --color: var(--white);
  }
    .example6 .chicken__wing-left {
      translate: -2em 0em -4em;
    }
    .example6 .chicken__wing-right {
      translate: 6em 0em -4em;
    }

  .example6 .chicken__knee {
    --x: 1em; --y: 1em; --z: 3em;
    --color: var(--orange);
  }
    .example6 .chicken__knee-right {
      translate: 5em 2em -8em;
    }
    .example6 .chicken__knee-left {
      translate: 0em 2em -8em;
    }

  .example6 .chicken__foot {
    --x: 3em; --y: 3em; --z: 1em;
    --color: var(--orange);
  }
    .example6 .chicken__foot-right {
      translate: 4em 1em -9em;
    }
    .example6 .chicken__foot-left {
      translate: -1em 1em -9em;
    }

  .example6 .chicken__finger {
    --x: 1em; --y: 2em; --z: 1em;
    --color: var(--orange);
  }
    .example6 .chicken__finger-one {
      translate: -1em 4em -9em;
    }
    .example6 .chicken__finger-two {
      translate: 1em 4em -9em;
    }
    .example6 .chicken__finger-three {
      translate: 4em 4em -9em;
    }
    .example6 .chicken__finger-four {
      translate: 6em 4em -9em;
    }


  .example6 .lightsource {
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
  .example6 .lightsource div {
    width: var(--side);
    height: calc((sqrt(3) / 2) * var(--side));
  }
  .example6 .lightsource div::before, .example6 .lightsource::before {
    width: 100%; height: 100%;
  }
  .example6 .lightsource::before {
    background-color: color-mix(in srgb, var(--color), black 50%);
    clip-path: polygon(0% 38%, 50% 0%, 100% 38%, 81% 100%, 19% 100%);
  }
  .example6 .lightsource::after {
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background-color: color-mix(in srgb, var(--color), white 70%);
    filter: blur(3vw);
    translate: -50% -50% -0.1px;
  }
  .example6 .lightsource-0 {
    transform: translate(calc(var(--side) * .31), calc(var(--side) * 0.16)) translateZ(calc(var(--side) * -.85)) rotateX(100.7deg);
  }
  .example6 .lightsource-0::before {
    background-color: color-mix(in srgb, var(--color), white 0%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-1 {
    transform: rotateZ(60deg) rotateX(var(--angle));
  }
  .example6 .lightsource-1::before {
    background-color: color-mix(in srgb, var(--color), black 5%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-1-1 {
    transform: rotateZ(60deg) rotateX(var(--angle));
  }
  .example6 .lightsource-1-1::before {
    background-color: color-mix(in srgb, var(--color), white 0%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-1-1-1 {
    left: 50%;
    top: 100%;
    transform: rotateZ(-60deg) rotateX(var(--angle));
  }
  .example6 .lightsource-1-1-1::before {
    background-color: color-mix(in srgb, var(--color), black 5%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-1-1-1-1 {
    transform: rotateZ(60deg) rotateX(var(--angle));
  }
  .example6 .lightsource-1-1-1-1::before {
    background-color: color-mix(in srgb, var(--color), white 0%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-2 {
    left: 50%;
    top: 100%;
    transform: rotateZ(-60deg) rotateX(var(--angle));
  }
  .example6 .lightsource-2::before {
    background-color: color-mix(in srgb, var(--color), black 5%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-2-1 {
    left: 50%;
    top: 100%;
    transform: rotateZ(-60deg) rotateX(var(--angle));
  }
  .example6 .lightsource-2-1::before {
    background-color: color-mix(in srgb, var(--color), white 0%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-2-1-1 {
    transform: rotateZ(60deg) rotateX(var(--angle));
  }
  .example6 .lightsource-2-1-1::before {
    background-color: color-mix(in srgb, var(--color), black 5%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-2-1-1-1 {
    top: 100%;
    left: 50%;
    transform: rotateZ(-60deg) rotateX(var(--angle));
  }
  .example6 .lightsource-2-1-1-1::before {
    background-color: color-mix(in srgb, var(--color), white 0%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-2-1-1-1-1 {
    transform: rotateZ(60deg) rotateX(var(--angle));
  }
  .example6 .lightsource-2-1-1-1-1::before {
    background-color: color-mix(in srgb, var(--color), black 5%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-3 {
    transform: rotateX(calc(180deg - var(--angle)));
  }
  .example6 .lightsource-3::before {
    background-color: color-mix(in srgb, var(--color), white 40%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-3-1 {
    transform: rotateZ(60deg) rotateX(calc(var(--angle) * -1));
  }
  .example6 .lightsource-3-1::before {
    background-color: color-mix(in srgb, var(--color), white 50%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-3-1-1 {
    left: 50%;
    top: 100%;
    transform: rotateZ(-60deg) rotateX(calc(var(--angle) * -1));
  }
  .example6 .lightsource-3-1-1::before {
    background-color: color-mix(in srgb, var(--color), white 55%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-3-2 {
    left: 50%;
    top: 100%;
    transform: rotateZ(-60deg) rotateX(calc(var(--angle) * -1));
  }
  .example6 .lightsource-3-2::before {
    background-color: color-mix(in srgb, var(--color), white 45%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example6 .lightsource-3-2-1 {
    transform: rotateZ(60deg) rotateX(calc(var(--angle) * -1));
  }
  .example6 .lightsource-3-2-1::before {
    background-color: color-mix(in srgb, var(--color), white 50%);
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }

  .example6 .floor {
    width: 50em; height: 170em;
    background: #84A59D;
    transform: translateX(-50%) translateY(-50%) translateZ(-9em);
  }

  .example6 .lightsource .ray {
    top: 50%; left: 50%;
    width: 1px; height: 100em;
    background: red;
  }
  .example6 .lightsource .ray:nth-child(1) {
    transform: rotateX(-93.2deg) rotateZ(7.6deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(2) {
    transform: rotateX(-93.2deg) rotateZ(-8.4deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(3) {
    transform: rotateX(-102.9deg) rotateZ(-7.4deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(4) {
    transform: rotateX(-83.9deg) rotateZ(-3.2deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(5) {
    transform: rotateX(-83.9deg) rotateZ(2.3deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(6) {
    transform: rotateX(-75.7deg) rotateZ(-5.7deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(7) {
    transform: rotateX(-75.7deg) rotateZ(5.3deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(8) {
    transform: rotateX(-102.9deg) rotateZ(5.6deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(9) {
    transform: rotateX(-80.6deg) rotateZ(2.3deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(10) {
    transform: rotateX(-80.6deg) rotateZ(-2.7deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(11) {
    transform: rotateX(-78.1deg) rotateZ(8.8deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(12) {
    transform: rotateX(-78.1deg) rotateZ(-9.2deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(13) {
    transform: rotateX(-81.3deg) rotateZ(-10deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(14) {
    transform: rotateX(-81.2deg) rotateZ(9.5deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(15) {
    transform: rotateX(-104.3deg) rotateZ(-2.5deg) rotateY(45deg);
  }
  .example6 .lightsource .ray:nth-child(16) {
    transform: rotateX(-104.4deg) rotateZ(1.5deg) rotateY(45deg);
  }


  /* COLORING */
  .example6 .chicken__head > div,
  .example6 .chicken__comb > div,
  .example6 .chicken__comb::after,
  .example6 .chicken__beak > div {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 0%);
  }
  .example6 .chicken__head::after,
  .example6 .chicken__body::after,
  .example6 .chicken__beak::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 3%);
  }
  .example6 .chicken__wing::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 5%);
  }
  .example6 .chicken__head > div::before,
  .example6 .chicken__head > div::after,
  .example6 .chicken__body > div::before,
  .example6 .chicken__body > div::after,
  .example6 .chicken__comb > div::before,
  .example6 .chicken__comb > div::after,
  .example6 .chicken__beak > div::before,
  .example6 .chicken__beak > div::after,
  .example6 .chicken__finger::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 7%);
  }
  .example6 .chicken__wing > div,
  .example6 .chicken__wattle > div::before,
  .example6 .chicken__wattle > div::after {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 9%);
  }
  .example6 .chicken__body > div,
  .example6 .chicken__tail > div,
  .example6 .chicken__wing > div::after,
  .example6 .chicken__wattle::after,
  .example6 .chicken__finger > div,
  .example6 .chicken__foot > div {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 12%);
  }
  .example6 .chicken__finger > div::before,
  .example6 .chicken__finger > div::after,
  .example6 .chicken__foot > div::before,
  .example6 .chicken__foot > div::after,
  .example6 .chicken__knee::after,
  .example6 .chicken__tail > div::before,
  .example6 .chicken__tail > div::after,
  .example6 .chicken__head::before {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 15%);
  }
  .example6 .chicken__knee > div::before,
  .example6 .chicken__knee > div::after,
  .example6 .chicken__wing::before,
  .example6 .chicken__beak {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 18%);
  }
  .example6 .chicken__foot::after,
  .example6 .chicken__wattle,
  .example6 .chicken__knee::before,
  .example6 .chicken__body::before {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 20%);
  }
  .example6 .chicken__foot::before,
  .example6 .chicken__wing,
  .example6 .chicken__tail::before {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 22%);
  }
  .example6 .chicken__body,
  .example6 .chicken__tail {
    background-color:  color-mix(in srgb, var(--color), var(--shadow) 28%);
  }
  
  
  
  
  .example6 .chicken__shadow {
    width: 24em; height: 40em;
    transform: translateX(-50%) translateY(-34em) translateZ(-9em);
  }
  .example6 .chicken__shadow::before {
    width: 100%; height: 100%;
    background: color-mix(in srgb, color-mix(in srgb, #c07d9e, var(--shadow) 50%), transparent 85%);
    clip-path: polygon(12em 39em, 13em 39em, 13em 37em, 17em 37em, 17em 39em, 18em 39em, 21em 36.8em, 21.8em 34.2em, 21.8em 21.9em, 21.8em 21.9em, 22.6em 6.9em, 17.4em 4em, 13.3em 3.9em, 9em 7em, 8.5em 21.9em, 8.2em 34.3em, 9em 36.8em, 11em 39em);
  }
</style>

<script>
  const chickenExample6 = document.querySelector('.example6');
  const E6rotate = document.querySelector('#E6rotate');
  
  function rotate6(value) {
    chickenExample6.setAttribute('style',`--rotate: ${E6rotate.value}deg;`);
  }
</script>