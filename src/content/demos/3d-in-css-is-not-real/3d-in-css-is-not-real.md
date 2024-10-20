---
pubDate: 2023-09-10
title: 3D in CSS is Not Real!
cover: ./3d-in-css-is-not-real.png
youtubeLink: https://youtu.be/doKbDTWsMtw
codepenLink: https://codepen.io/miocene/pen/rNoyLyO
caption: ''
tags: ['3D', 'Demo']
---

<div class="scene">
  <div class="cube cube1">
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="ball"></div>
  </div>
  <div class="cube cube2">
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="ball"></div>
  </div>
  <div class="cube cube3">
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="ball"></div>
  </div>
  <div class="cube cube4">
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="ball"></div>
  </div>
  <div class="cube cube5">
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="ball"></div>
  </div>
  <div class="cube cube6">
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="ball"></div>
  </div>
  <div class="cube cube7">
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="ball"></div>
  </div>
  <div class="cube cube8">
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="cube__side"></div>
    <div class="ball"></div>
  </div>
</div>

<style>
  .demo {
    background-color: #f7ede2;
  }

  .demo * {
    position: absolute;
    transform-style: preserve-3d;
  }
  .demo *::before, .demo *::after {
    position: absolute;
    content: '';
  }

  .scene {
    top: 50%; left: 50%;
    width: 1px; height: 1px;
    transform: rotateX(54.7deg) rotateZ(-45deg);

    --animation: 4s linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%) infinite;
  }

  .cube {
    color: #3c413c;

    transform-origin: 0.5px 0.5px 0.5px;
    transform-style: preserve-3d;
  }
  .cube, .cube::before,
  .cube__side, .cube__side:before {
    width: 100px; aspect-ratio: 1/1;
    border: 1px solid currentColor;
    box-sizing: border-box;
  }
  .cube::before {
    top: -1px; left: -1px;
    translate: 0 0 1px;
  }
  .cube__side:before {
    top: -1px; left: -1px;
    translate: 0 0 -1px;
  }

  .cube__side {
    top: -1px; left: -1px;
  }
  .cube__side:nth-child(1) {
    translate: 0 0 100px;
  }
  .cube__side:nth-child(2) {
    transform-origin: top left;
    transform: rotateY(-90deg);
  }
  .cube__side:nth-child(3) {
    transform-origin: bottom right;
    transform: rotateY(90deg);
  }
  .cube__side:nth-child(4) {
    transform-origin: bottom right;
    transform: rotateX(-90deg);
  }
  .cube__side:nth-child(5) {
    transform-origin: top left;
    transform: rotateX(90deg);
  }



  .cube1 {
    animation: cube1 var(--animation);
  }
  @keyframes cube1 {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(90deg); }
    100% { transform: rotateY(90deg) rotateX(90deg); }
  }



  .cube2 {
    animation: cube2 var(--animation);
  }
  @keyframes cube2 {
    0% { transform: rotateY(270deg); }
    50% { transform: rotateY(360deg); }
    100% { transform: rotateY(360deg) rotateZ(90deg); }
  }



  .cube3 {
    animation: cube3 var(--animation);
  }
  @keyframes cube3 {
    0% { transform: rotateX(90deg); }
    50% { transform: rotateX(90deg) rotateZ(90deg); }
    100% { transform: rotateX(90deg) rotateZ(90deg) rotateX(90deg); }
  }



  .cube4 {
    animation: cube4 var(--animation);
  }
  @keyframes cube4 {
    0% { transform: rotateX(90deg) rotateY(-90deg); }
    50% { transform: rotateX(90deg) rotateY(-90deg) rotateX(90deg); }
    100% { transform: rotateX(90deg) rotateY(-180deg) rotateX(90deg); }
  }



  .cube5 {
    animation: cube5 var(--animation);
  }
  @keyframes cube5 {
    0% { transform: rotateY(180deg); }
    50% { transform: rotateY(270deg); }
    100% { transform: rotateY(270deg) rotateX(90deg); }
  }



  .cube6 {
    animation: cube6 var(--animation);
  }
  @keyframes cube6 {
    0% { transform: rotateY(180deg) rotateX(90deg); }
    50% { transform: rotateY(180deg) rotateX(90deg) rotateZ(90deg); }
    100% { transform: rotateY(180deg) rotateX(90deg) rotateZ(90deg) rotateX(90deg); }
  }



  .cube7 {
    animation: cube7 var(--animation);
  }
  @keyframes cube7 {
    0% { transform: rotateX(-180deg); }
    50% { transform: rotateX(-180deg) rotateY(90deg); }
    100% { transform: rotateX(-180deg) rotateY(90deg) rotateX(90deg); }
  }



  .cube8 {
    animation: cube8 var(--animation);
  }
  @keyframes cube8 {
    0% { transform: rotateY(90deg); }
    50% { transform: rotateY(180deg); }
    100% { transform: rotateY(180deg) rotateZ(90deg); }
  }


  .cube1 .ball {
    transform: translatez(50px) rotateX(-45deg) rotateY(-45deg);
  }
  .cube2 .ball {
    transform: translatez(50px) rotateX(-45deg) rotateY(45deg);
  }
  .cube3 .ball {
    transform: translatez(50px) rotateX(-135deg) rotateY(135deg);
  }
  .cube4 .ball {
    transform: translatez(50px) rotateX(45deg) rotateY(-45deg);
  }
  .cube5 .ball {
    transform: translatez(50px) rotateX(135deg) rotateY(-45deg);
  }
  .cube6 .ball {
    transform: translatez(50px) rotateX(135deg) rotateY(-45deg);
  }
  .cube7 .ball {
    transform: translatez(50px) rotateX(135deg) rotateY(135deg);
  }
  .cube8 .ball {
    transform: translatez(50px) rotateX(45deg) rotateY(-45deg);
  }

  .ball,
  .ball::before,
  .ball::after {
    top: 0%; left: 0%;
    width: 100%; height: 100%;
    border-radius: 50%;
    background-color: currentColor;
    transform-origin: center center;
  }
  .cube1 .ball,
  .cube4 .ball,
  .cube5 .ball,
  .cube7 .ball {
    color: #84a59d;
  }
  .cube2 .ball,
  .cube3 .ball,
  .cube6 .ball,
  .cube8 .ball {
    color: #f28482;
  }

  .ball::before {
    transform: rotateY(90deg);
  }
  .ball::after {
    transform: rotateX(125deg) rotateY(25deg);
  }
</style>