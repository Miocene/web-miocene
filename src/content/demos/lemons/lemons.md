---
pubDate: 2023-07-16
title: CSS Lemons
cover: ./lemons.png
youtubeLink: https://youtu.be/HRC8Hm3iv98
codepenLink: https://codepen.io/miocene/pen/XWypZZq
caption: 'based on Alaina Johnson <a class="link" href="https://dribbble.com/shots/18668339-Sourpuss">illustration</a>'
tags: ['Demo']
---

<div class="scene">
  <div class="leaf leaf-1"></div>
  <div class="leaf leaf-3"></div>
  <div class="leaf leaf-2"></div>
  <div class="leaf leaf-4"></div>

  <div class="lemon lemon-1">
      <div class="lemon__eye"></div>
      <div class="lemon__mouth"></div>
      <div class="lemon__eye"></div>
  </div>

  <div class="lemon lemon-2">
      <div class="lemon__eye"></div>
      <div class="lemon__mouth"></div>
      <div class="lemon__eye"></div>
  </div>

  <div class="lemon lemon-3">
      <div class="lemon__eye"></div>
      <div class="lemon__mouth"></div>
      <div class="lemon__eye"></div>
  </div>

  <div class="lemon lemon-4">
      <div class="lemon__eye"></div>
      <div class="lemon__mouth"></div>
      <div class="lemon__eye"></div>
  </div>

  <div class="lemon lemon-5">
      <div class="lemon__eye"></div>
      <div class="lemon__mouth"></div>
      <div class="lemon__eye"></div>
  </div>

  <div class="plate"></div>

  <div class="lemon lemon-6">
      <div class="lemon__eye"></div>
      <div class="lemon__mouth"></div>
      <div class="lemon__eye"></div>
  </div>
</div>

<style>
  .scene {
    --blue: oklch(0.53 0.28 260.3);
    --pink: oklch(0.82 0.14 358.89);
    --yellow: oklch(0.85 0.17 76.73);
    --green: oklch(0.41 0.12 129.9);
    --white: oklch(0.94 0.06 80.95);
    
    position: absolute;
    top: 50%; left: 50%;
    width: 1050px; height: 790px;
    translate: -50% -50%;
    background: var(--pink);
  }

  .scene *, .scene *::before, .scene *::after {
    content: '';
    position: absolute;
  }

  /* PLATE */

  .plate {
    top: 627px; left: 398px;
    width: 320px; height: 96px;
    background:
    /* lemon shadow */
    radial-gradient(black 70%, transparent 0) 161px -101px / 250px 200px no-repeat,
    /* background */
    var(--blue);
    border: 3px solid black;
  }

  .plate::before {
    top: -234px; left: -240px;
    width: 758px; height: 292px;
    background:
      /* circles */
      radial-gradient(var(--white) 38px, black 38px 41px, var(--white) 41px 46px, black 46px 49px, transparent 0) center 23px / 118px 118px repeat-x,  
      /* lemon shadow */
      radial-gradient(black 70%, transparent 0) 397px 116px / 170px 200px no-repeat,
      /* background */
      var(--blue);
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    border: 3px solid black;
  }

  .plate::after {
    top: 96px; left: -120px;
    width: 574px; height: 3px;
    background: linear-gradient(90deg, black 10px, transparent 2px 16px, black 16px 38px, transparent 38px 48px, black 48px 530px, transparent 530px 537px, black 537px 549px, transparent 549px 556px, black 0);
  }

  /* LEAF */

  .leaf {
    width: 145px; height: 147px;
    background:
      linear-gradient(226deg, transparent 50%, black 50% calc(50% + 3px), var(--green) calc(50% + 3px)),
      linear-gradient(90deg, black 3px, transparent 3px 12px) 0 0 / 10px 100%,
      var(--green);
    transform-origin: top left;
    border-radius: 0 90%;
    border: 3px solid black;
  }

  .leaf-1 {
    top: 300px; left: 212px;
    rotate: 72deg;
  }

  .leaf-2 {
    top: 145px; left: 196px;
    rotate: -12deg;
  }

  .leaf-3 {
    top: 62px; left: 408px;
    rotate: 55deg;
  }

  .leaf-4 {
    top: 259px; left: 905px;
    rotate: 116deg;
  }

  /* LEMON */

  .lemon {
    width: 298px; height: 224px;
    background:
      /* freckles */
      radial-gradient(black 70%, transparent 0) 89px 120px / 6px 6px no-repeat, 
      radial-gradient(black 70%, transparent 0) 79px 133px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 98px 133px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 195px 131px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 203px 118px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 214px 130px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 267px 68px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 248px 59px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 255px 43px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 235px 37px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 214px 35px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 212px 14px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 191px 25px / 6px 6px no-repeat,
      radial-gradient(black 70%, transparent 0) 176px 12px / 6px 6px no-repeat,
      /* background */
      var(--yellow);
    border-radius: 100%;
    border: 3px solid black;
    transform-origin: top center;
  }

  .lemon::before {
    top: 93px; left: -22px;
    width: 23px; height: 39px;
    background: var(--yellow);
    border-style: solid;
    border-width: 3px 0 3px 3px;
    border-color: black;
    border-radius: 99em 0 0 99em;
  }

  .lemon::after {
    top: 87px; left: 294px;
    width: 23px; height: 39px;
    background: var(--yellow);
    border-style: solid;
    border-width: 3px 3px 3px 0;
    border-color: black;
    border-radius: 0 99em 99em 0;
  }

  .lemon__eye {
    top: 93px; left: 56px;
    width: 67px; height: 19px;
    background: linear-gradient(-90deg, black 54%, var(--white) 54%);
    border: 3px solid black;
    border-radius: 99em;
  }

  .lemon__eye::before {
    top: 14px; left: 15px;
    width: 33px; height: 10px;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    border-style: solid;
    border-width: 3px 3px 0 3px;
    border-color: black;
    box-shadow: inset 0 5px var(--yellow);
  }

  .lemon__eye:last-child {
  left: 169px; top: 91px;
  }

  .lemon__eye:first-child::after {
    top: -12px; left: -13px;
    width: 83px; height: 34px;
    background:
      /* eyelashes */
      linear-gradient(103deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 65px 0px / 8px 10px no-repeat,
      linear-gradient(98deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 53px 0px / 8px 10px no-repeat,
      linear-gradient(84deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 41px 0px / 8px 10px no-repeat,
      linear-gradient(84deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 30px 0px / 8px 10px no-repeat,
      linear-gradient(90deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 18px 0px / 8px 10px no-repeat,
      linear-gradient(62deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 8px 3px / 8px 10px no-repeat,
      linear-gradient(16deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 2px 1px / 10px 100% no-repeat,
      linear-gradient(-4deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 0px 12px / 12px 100% no-repeat;
  }

  .lemon__eye:last-child::after {
    top: -12px; left: -3px;
    width: 83px; height: 34px;
    background:
      /* eyelashes */
      linear-gradient(-110deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 8px 0px / 11px 11px no-repeat,
      linear-gradient(-102deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 20px 0px / 11px 11px no-repeat,
      linear-gradient(-94deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 32px 0px / 11px 11px no-repeat,
      linear-gradient(-94deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 44px 0px / 11px 11px no-repeat,
      linear-gradient(-94deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 55px 0px / 11px 11px no-repeat,
      linear-gradient(-69deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 65px 2px / 11px 11px no-repeat,
      linear-gradient(-19deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 69px -1px / 11px 100% no-repeat,
      linear-gradient(0deg, transparent 50%, black 50% calc(50% + 3px), transparent calc(50% + 3px)) 72px 9px / 11px 100% no-repeat;
  }

  .lemon-6 .lemon__mouth {
    top: 130px; left: 124px;
    width: 45px; height: 10px;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    border-style: solid;
    border-color: black;
    border-width: 3px 3px 0 3px;
  }

  .lemon-1 {
    top: 296px; left: 656px;
    rotate: 30deg;
  }

  .lemon-6 {
    top: 499px; left: 579px;
    rotate: 10deg;
  }

  .lemon-2 {
    top: 467px; left: 113px;
    rotate: -140deg;
  }

  .lemon-3 {
    top: 98px; left: 359px;
    box-shadow: inset 0px -50px 0 -20px black;
    rotate: -15deg;
  }

  .lemon-4 {
    top: 258px; left: 330px;
    box-shadow: 7px 27px black;
    rotate: 18deg;
  }

  .lemon-5 {
    top: 259px; left: 451px;
    box-shadow: -10px 20px black;
    rotate: -35deg;
  }

  .lemon-5 .lemon__mouth {
    top: 116px; left: 124px;
    width: 45px; height: 22px;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    border-style: solid;
    border-color: black;
    border-width: 3px 3px 0 3px;
  }

  .lemon-4 .lemon__mouth {
    top: 131px; left: 127px;
    width: 45px; height: 3px;
    background: black;
  }

  .lemon-3 .lemon__mouth {
    top: 130px; left: 124px;
    width: 45px;
  }

  .lemon-3 .lemon__mouth::after {
    top: 0px; left: 0px;
    width: 45px; height: 10px;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    border-style: solid;
    border-color: black;
    border-width: 3px 3px 0 3px;
  }

  .lemon-3 .lemon__mouth::before {
    top: 2px; left: 11px;
    width: 20px; height: 34px;
    background: linear-gradient(black, black) center 0px / 3px 18px no-repeat, var(--pink);
    border-style: solid;
    border-color: black;
    border-width: 0 3px 3px 3px;
    border-radius: 0 0 99em 99em;
  }
</style>