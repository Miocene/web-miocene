---
pubDate: 2023-10-01
title: Plastic CSS Social Icons
cover: ./plastic-css-icons.png
youtubeLink: https://youtu.be/kB7koj4Z17g
codepenLink: https://codepen.io/miocene/pen/eYbjRVw
caption: ''
tags: ['Demo']
---

<div class="grid">
  <div class="icon slack">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="icon instagram">
    <div></div>
    <div></div>
  </div>
</div>

<style>
  .demo {
    background: radial-gradient(at 75% 30%, #333554, #131628);
  }

  .grid {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    padding: 50px;
    box-sizing: border-box;
  }

  .icon {
    position: relative;
    width: 320px; aspect-ratio: 1/1;
    border-radius: 100px;

    --shadow: -5px 10px 6px -5px rgb(9 11 23 / 30%),
              -5px 20px 20px -10px rgb(9 11 23 / 30%),
              -25px 30px 50px -5px rgb(9 11 23 / 50%)
  }

  .grid::before, .icon::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    display: block;
    width: 100%; height: 100%;
    border-radius: inherit;
  --noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    background: var(--noise) 0 / 300px repeat;
    mix-blend-mode: overlay;
    opacity: .2;
  }



  /* SLACK ICON */
  .slack {
    background: #e0e5e2;
    box-shadow: inset -1px 1px 1px rgb(255 255 255 / 100%),
                inset 1px -1px 2px rgb(0 0 0 / 30%),
                var(--shadow);
  }

  .slack > *, .slack > *::before {
    position: absolute;
    content: '';
    box-shadow: inset 1px -1px 1px rgb(var(--shadow) / 20%),
                inset -1px 1px 1px rgb(255 255 255 / 30%), 
                -4px 5px 3px -3px rgb(var(--shadow) / 20%),
                -10px 15px 10px -5px rgb(var(--shadow) / 15%),
                -3px 3px 10px 0px rgb(var(--shadow) / 10%);
  }

  .slack div:nth-child(1) {
    top: 50%; left: 50%;
    width: 105px; height: 46px;
    background: #3ec7ef;
    border-radius: 99em;
    translate: calc(-100% - 5px) calc(-100% - 5px);

    --shadow: 5 48 61;
  }
  .slack div:nth-child(1)::before {
    top: calc(-100% - 10px); right: 0;
    width: 46px; aspect-ratio: 1/1;
    background: #3ec7ef;
    border-radius: 50% 50% 4px 50%;
  }

  .slack div:nth-child(2) {
    top: 50%; left: 50%;
    width: 46px; height: 105px;
    background: #41da9a;
    border-radius: 99em;
    translate: 5px calc(-100% - 5px);

    --shadow: 2 40 24;
  }
  .slack div:nth-child(2)::before {
    bottom: 0; left: calc(100% + 10px);
    width: 46px; aspect-ratio: 1/1;
    background: #41da9a;
    border-radius: 50% 50% 50% 4px;
  }

  .slack div:nth-child(3) {
    top: 50%; left: 50%;
    width: 105px; height: 46px;
    background: #ecb434;
    border-radius: 99em;
    translate: 5px 5px;

    --shadow: 52 38 8;
  }
  .slack div:nth-child(3)::before {
    top: calc(100% + 10px); left: 0;
    width: 46px; aspect-ratio: 1/1;
    background: #ecb434;
    border-radius: 4px 50% 50% 50%;
  }

  .slack div:nth-child(4) {
    top: 50%; left: 50%;
    width: 46px; height: 105px;
    background: #e82761;
    border-radius: 99em;
    translate: calc(-100% - 5px) 5px;

    --shadow: 73 5 25;
  }
  .slack div:nth-child(4)::before {
    top: 0; left: calc(-100% - 10px);
    width: 46px; aspect-ratio: 1/1;
    background: #e82761;
    border-radius: 50% 4px 50% 50%;
  }



  /* INSTAGRAM ICON */
  .instagram {
    background: linear-gradient(45deg, #f9ce34, #ee2a7b, #6228d7);
    box-shadow: inset -1px 1px 1px rgb(255 255 255 / 25%),
                inset 1px -1px 2px rgb(41 8 51 / 30%),
                var(--shadow);
  }

  .instagram > *, .instagram > *::before, .instagram > *::after {
    position: absolute;
    content: '';
  }

  .instagram div {
    filter: drop-shadow(-2px 2px 2px rgba(41 8 51 / 10%)) 
            drop-shadow(-3px 3px 5px rgba(41 8 51 / 40%));
  }

  .instagram div:nth-child(1) {
    top: 50%; left: 50%;
    width: 230px; aspect-ratio: 1/1;
    border-radius: 60px;
    box-sizing: border-box;
    box-shadow: inset -5px 5px 8px white,
                inset 1px -1px 8px rgb(60 7 27 / 70%),
                inset 0 0 0 20px #e0e5e2;
    translate: -50% -50%;
  }
  .instagram div:nth-child(1)::before {
    top: 20px; left: 20px;
    width: 190px; aspect-ratio: 1/1;
    border-radius: 40px;
    box-sizing: border-box;
    box-shadow: -5px 5px 8px white,
                1px -1px 8px rgb(41 8 51 / 50%);
  }

  .instagram div:nth-child(2) {
    top: 50%; left: 50%;
    width: 120px; aspect-ratio: 1/1;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: inset -5px 5px 8px white,
                inset 1px -1px 8px rgb(60 7 27 / 70%),
                inset 0 0 0 20px #e0e5e2;
    translate: -50% -50%;
  }

  .instagram div:nth-child(2)::before {
    top: 20px; left: 20px;
    width: 80px; aspect-ratio: 1/1;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: -5px 5px 8px white,
                1px -1px 8px rgb(60 7 27 / 70%);
  }

  .instagram div:nth-child(2)::after {
    top: -15px; right: -15px;
    width: 28px; aspect-ratio: 1/1;
    box-shadow: inset -5px 5px 8px white,
                inset 1px -1px 8px rgb(60 7 27 / 70%),
                inset 0 0 0 20px #e0e5e2;
    border-radius: 50%;
  }
</style>