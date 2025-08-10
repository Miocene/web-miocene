<div class="example-grid">
<div class="example example3 example3-1">
  <div class="example__view">
    <div class="part">
      <div class="joint"></div>
    </div>
  </div>
</div>
<div class="example example3 example3-2">
  <div class="example__view">
    <div class="cube part">
      <div></div>
      <div class="cube joint">
        <div></div>
      </div>
    </div>
  </div>
</div>
<div class="example example3 example3-3">
  <div class="example__view">
    <div class="tube part">
      <div class="tube__face" style="--i: 0">
        <div class="tube__hexo"></div>
      </div>
      <div class="tube__face" style="--i: 1">
        <div class="tube__triangle"></div>
      </div>
      <div class="tube__face" style="--i: 2">
        <div class="tube__hexo"></div>
      </div>
      <div class="tube__face" style="--i: 3">
        <div class="tube__triangle"></div>
      </div>
      <div class="tube__face" style="--i: 4">
        <div class="tube__hexo"></div>
      </div>
      <div class="tube__face" style="--i: 5">
        <div class="tube__triangle"></div>
      </div>
      <div class="tube__face" style="--i: 6">
        <div class="tube__hexo"></div>
      </div>
      <div class="tube__face" style="--i: 7">
        <div class="tube__triangle"></div>
      </div>
      <div class="tube__face" style="--i: 8">
        <div class="tube__hexo"></div>
      </div>
      <div class="tube__face" style="--i: 9">
        <div class="tube__triangle"></div>
      </div>
      <div class="tube joint">
        <div class="tube__face" style="--i: 0">
          <div class="tube__hexo"></div>
        </div>
        <div class="tube__face" style="--i: 1">
          <div class="tube__triangle"></div>
        </div>
        <div class="tube__face" style="--i: 2">
          <div class="tube__hexo"></div>
        </div>
        <div class="tube__face" style="--i: 3">
          <div class="tube__triangle"></div>
        </div>
        <div class="tube__face" style="--i: 4">
          <div class="tube__hexo"></div>
        </div>
        <div class="tube__face" style="--i: 5">
          <div class="tube__triangle"></div>
        </div>
        <div class="tube__face" style="--i: 6">
          <div class="tube__hexo"></div>
        </div>
        <div class="tube__face" style="--i: 7">
          <div class="tube__triangle"></div>
        </div>
        <div class="tube__face" style="--i: 8">
          <div class="tube__hexo"></div>
        </div>
        <div class="tube__face" style="--i: 9">
          <div class="tube__triangle"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<style>
  .example3 .example__view {
    aspect-ratio: 1;
  }
  .example3-1 .part {
    position: absolute;
    top: 10%; left: 50%;
    width: 20%; aspect-ratio: 1 / 2;
    translate: -50% 0;
    box-shadow: inset 0 0 0 1px light-dark(#333, #fff);
    border-radius: 99em;
  }
  .example3-1 .joint {
    position: absolute;
    top: 50%;
    width: 100%; height: 100%;
    box-shadow: inset 0 0 0 1px light-dark(#333, #fff);
    border-radius: 99em;
    transform-origin: center 25%;
    animation: example31 2s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate-reverse;
  }
  @keyframes example31 {
    from { rotate: -60deg; }
    to { rotate: 60deg; }
  }
  .example3-1 .joint::before {
    content: '';
    position: absolute;
    top: 25%; left: 50%;
    width: 4px; aspect-ratio: 1;
    background-color: #FF5E5B;
    border-radius: 50%;
    translate: -50% -50%;
  }



  /* basic smart cube */
  .example3-2 .cube {
    width: var(--x); height: var(--y);
    background-color: color-mix(in srgb, var(--color) 50%, #333333);
  }
  .example3-2 .cube::before {
    width: 100%; height: var(--z);
    background-color: color-mix(in srgb, var(--color) 70%, #333333);
    transform-origin: top center;
    rotate: x 90deg;
  }
  .example3-2 .cube::after {
    width: 100%; height: var(--z);
    background-color: color-mix(in srgb, var(--color) 90%, white);
    translate: 0 var(--y);
    transform-origin: top center;
    rotate: x 90deg;
  }
  .example3-2 .cube > div:nth-child(1) {
    width: 100%; height: 100%;
    background-color: var(--color);
    translate: 0 0 var(--z);
  }
  .example3-2 .cube > div:nth-child(1)::before {
    width: var(--z); height: 100%;
    background-color: color-mix(in srgb, var(--color) 90%, #333333);
    transform-origin: left center;
    rotate: y 90deg;
  }
  .example3-2 .cube > div:nth-child(1)::after {
    width: var(--z); height: 100%;
    background-color: color-mix(in srgb, var(--color) 90%, #333333);
    transform-origin: left center;
    rotate: y 90deg;
    translate: var(--x);
  }

  .example3-2 .example__view {
    transform-style: preserve-3d;
  }
  .example3-2 .example__view *, .example3-2 .example__view *::before, .example3-2 .example__view *::after {
    content: '';
    position: absolute;
    transform-style: preserve-3d;
    transform-origin: top left;
  }
  .example3-2 .part {
    top: 40%; left: 50%;
    --x: 2em; --y: 2em; --z: 3em;
    --color: #d5d5d540;
    background-image: radial-gradient(#FF5E5B 2px, transparent 0);
    transform: translate(0, 0) rotateX(65deg) rotateZ(45deg);
  }
  .example3-2 .joint {
    top: 0%; left: 0%;
    --x: 2em; --y: 2em; --z: 3em;
    --color: #d5d5d540;
    background-image: radial-gradient(#FF5E5B 2px, transparent 0);
    transform-origin: center;
    animation: example32 2s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate-reverse;
  }
  @keyframes example32 {
    from { transform: rotateX(180deg) rotateZ(180deg) rotateX(-60deg); }
    to { transform: rotateX(180deg) rotateZ(180deg) rotateX(60deg); }
  }

  .example3-3 .tube, .example3-3 .tube::before, .example3-3 .tube *, .example3-3 .tube *::before, .example3-3 .tube *::after {
    content: '';
    position: absolute;
    transform-style: preserve-3d;
  }

  .example3-3 {
    --color: #d5d5d540;
  }
  .example3-3 .part {
    top: 40%; left: 50%;
    translate: -50% -50%;
    transform: rotateX(155deg) rotateY(30deg);
  }
  .example3-3 .joint {
    transform-origin: top center;
    bottom: 0%;
    animation: example33 2s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate-reverse;
  }
  @keyframes example33 {
    from { transform: rotateX(180deg) rotateY(180deg) rotateX(-60deg); }
    to { transform: rotateX(180deg) rotateY(180deg) rotateX(60deg); }
  }

  .example3-3 .tube {
    height: 3em;
    --radius: 1em;
    --length: calc(var(--radius) * 2 * tan(18deg));
    --angle: 36deg;
  }

  .example3-3 .tube__face {
    height: 100%; width: var(--length);
    background-color: #E2AFFF;
    transform: translateX(-50%) rotateY(calc(var(--angle) * var(--i))) translateZ(var(--radius));
  }
  .example3-3 .tube__face:nth-child(6) {
    background-color: color-mix(in srgb, var(--color) 95%, #333333);
  }
  .example3-3 .tube__face:nth-child(6) > div::before,
  .example3-3 .tube__face:nth-child(6) > div::after {
    background-color: color-mix(in srgb, var(--color) 95%, white);
  }
  .example3-3 .tube__face:nth-child(5),
  .example3-3 .tube__face:nth-child(7) {
    background-color: color-mix(in srgb, var(--color) 90%, #333333);
  }
  .example3-3 .tube__face:nth-child(5) > div,
  .example3-3 .tube__face:nth-child(7) > div {
    background-color: color-mix(in srgb, var(--color) 90%, white);
  }
  .example3-3 .tube__face:nth-child(4),
  .example3-3 .tube__face:nth-child(8) {
    background-color: color-mix(in srgb, var(--color) 85%, #333333);
  }
  .example3-3 .tube__face:nth-child(4) > div::before,
  .example3-3 .tube__face:nth-child(8) > div::before,
  .example3-3 .tube__face:nth-child(4) > div::after,
  .example3-3 .tube__face:nth-child(8) > div::after {
    background-color: color-mix(in srgb, var(--color) 85%, white);
  }
  .example3-3 .tube__face:nth-child(3),
  .example3-3 .tube__face:nth-child(9) {
    background-color: color-mix(in srgb, var(--color) 80%, #333333);
  }
  .example3-3 .tube__face:nth-child(3) > div,
  .example3-3 .tube__face:nth-child(9) > div {
    background-color: color-mix(in srgb, var(--color) 80%, white);
  }
  .example3-3 .tube__face:nth-child(2),
  .example3-3 .tube__face:nth-child(10) {
    background-color: color-mix(in srgb, var(--color) 75%, #333333);
  }
  .example3-3 .tube__face:nth-child(2) > div::before,
  .example3-3 .tube__face:nth-child(10) > div::before,
  .example3-3 .tube__face:nth-child(2) > div::after,
  .example3-3 .tube__face:nth-child(10) > div::after {
    background-color: color-mix(in srgb, var(--color) 75%, white);
  }
  .example3-3 .tube__face:nth-child(1) {
    background-color: color-mix(in srgb, var(--color) 70%, #333333);
  }
  .example3-3 .tube__face:nth-child(1) > div {
    background-color: color-mix(in srgb, var(--color) 70%, white);
  }

  .example3-3 .tube__hexo, .tube::before {
    width: calc(var(--radius) * 2);
    aspect-ratio: 1;
    --radius: calc(var(--length) / (2 * sin(36deg)));
    --point1-x: calc(var(--radius) + var(--radius) * sin(2 * 1 * 3.14 / 5));
    --point1-y: calc(var(--radius) + var(--radius) * cos(2 * 1 * 3.14 / 5));
    --point2-x: calc(var(--radius) + var(--radius) * sin(2 * 2 * 3.14 / 5));
    --point2-y: calc(var(--radius) + var(--radius) * cos(2 * 2 * 3.14 / 5));
    --point3-x: calc(var(--radius) + var(--radius) * sin(2 * 3 * 3.14 / 5));
    --point3-y: calc(var(--radius) + var(--radius) * cos(2 * 3 * 3.14 / 5));
    --point4-x: calc(var(--radius) + var(--radius) * sin(2 * 4 * 3.14 / 5));
    --point4-y: calc(var(--radius) + var(--radius) * cos(2 * 4 * 3.14 / 5));
    --point5-x: calc(var(--radius) + var(--radius) * sin(2 * 5 * 3.14 / 5));
    --point5-y: calc(var(--radius) + var(--radius) * cos(2 * 5 * 3.14 / 5));
    clip-path: polygon(
      var(--point1-x) var(--point1-y),
      var(--point2-x) var(--point2-y),
      var(--point3-x) var(--point3-y),
      var(--point4-x) var(--point4-y),
      var(--point5-x) var(--point5-y));
  }
  .example3-3 .tube::before {
    background-color: orange;
    rotate: x 90deg;
    transform: translateX(-50%) translateY(0%) translateZ(calc(var(--length) * 2.24));
    background-color: color-mix(in srgb, #FF5E5B 95%, white);
  }

  .example3-3 .tube__hexo {
    left: 50%;
    translate: -50% -9%;
    transform-origin: center 9%;
    rotate: x 206deg;
    --color: #FF5E5B;
  }

  .example3-3 .tube__triangle {
    width: var(--length);
    height: calc((var(--length) * sqrt(3)) / 2);
    transform-origin: center top;
    rotate: x 191deg;
    --color: #FF5E5B;
  }
  .example3-3 .tube__triangle::before,
  .example3-3 .tube__triangle::after {
    width: 100%; height: 100%;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
  .example3-3 .tube__triangle::after {
    transform-origin: center bottom;
    rotate: x -139deg;
  }
</style>