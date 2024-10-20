---
pubDate: 2023-08-13
title: CSS Mosquito
cover: ./mosquito.png
youtubeLink: https://youtu.be/UQpU0CUSZgY
codepenLink: https://codepen.io/miocene/pen/zYMVVPW
caption: 'based on Tony Babel <a class="link" href="https://dribbble.com/shots/3052126-The-charismatic-mosquito">video</a>'
tags: ['Demo']
---

<div class="mosquito">
  <div class="mosquito__leftLeg mosquito__leftLeg_back"></div>
  <div class="mosquito__leftLeg mosquito__leftLeg_front"></div>
  <div class="mosquito__rightLeg mosquito__rightLeg_back"></div>
  <div class="mosquito__rightLeg mosquito__rightLeg_front"></div>
  <div class="mosquito__leftWing"></div>
  <div class="mosquito__rightWing"></div>
  <div class="mosquito__body"></div>

  <div class="mosquito__face">
    <div class="mosquito__leftEye"></div>
    <div class="mosquito__rightEye"></div>
    <div class="mosquito__nose">
      <div></div>
    </div>
  </div>
</div>

<style>
  .demo {
    background-color: #ffe329;
  }

  .demo * {
    position: absolute;
  }
  .demo *::before, .demo *::after {
    position: absolute;
    content: '';
  }

  .mosquito {
    top: 50%; left: 50%;
    
    --animation: 5s linear infinite;
    animation: mosquitoTranslate var(--animation),
              mosquitoRotate var(--animation);
  }
  @keyframes mosquitoTranslate {
    /* left */
    0%, 100% { translate: -21vw 4vw; }
    5% { translate: -22vw 5vw; }
    10% { translate: -21vw 4vw; }
    15% { translate: -22vw 3vw; }
    20% { translate: -23vw 4vw; }
    25% { translate: -22vw 3vw; }
    30% { translate: -21vw 4vw; }
    
    /* top center */
    40% { translate: -4vw -12vw; }
    
    /* right */
    50% { translate: 24vw 4vw; }
    55% { translate: 25vw 5vw; }
    60% { translate: 24vw 4vw; }
    65% { translate: 23vw 5vw; }
    70% { translate: 24vw 4vw; }
    75% { translate: 25vw 3vw; }
    80% { translate: 24vw 4vw; }
    
    /* bottom center */
    90% { translate: 9vw 14vw; }
  }
  @keyframes mosquitoRotate {
    /* left */
    0%, 100% { rotate: 0deg; }
    5% { rotate: -14deg; }
    15% { rotate: 5deg; }
    20% { rotate: -17deg; }
    30% { rotate: 5deg; }
    
    /* top center */
    40% { rotate: -17deg; }
    45% { rotate: 4deg; }

    /* right */
    55% { rotate: -16deg; }
    65% { rotate: 4deg; }
    70% { rotate: -21deg; }
    75% { rotate: 0deg; }
    85% { rotate: -24deg; }

    /* bottom center */
    95% { rotate: 0deg; }
  }

  /* LEFT LEGS */
  .mosquito__leftLeg {
    width: 3vw; height: 15vw;
    box-sizing: border-box;
    border-radius: 0 0 99em;
    border-width: 0 1vw 1vw 0;
    border-style: solid;
    border-color: #0a050d;
    transform-origin: top right;
  }
  .mosquito__leftLeg::before {
    bottom: -1vw; left: -0.5vw;
    width: 1vw;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: #0a050d;
  }
  .mosquito__leftLeg_back {
    top: 3.5vw; left: -7.8vw;
    
    animation: mosquitoBackLeg var(--animation);
  }
  @keyframes mosquitoBackLeg {
    /* left */
    0%, 100% { rotate: 0deg; }
    5% { rotate: 16deg; }
    15% { rotate: -7deg; }
    20% { rotate: 19deg; }
    30% { rotate: -7deg; }
    
    /* top center */
    40% { rotate: 27deg; }
    45% { rotate: -6deg; }

    /* right */
    55% { rotate: 18deg; }
    65% { rotate: -6deg; }
    70% { rotate: 23deg; }
    75% { rotate: 0deg; }
    85% { rotate: 26deg; }

    /* bottom center */
    90% { rotate: 7deg; }
    95% { rotate: 0deg; }
  }
  .mosquito__leftLeg_front {
    top: 5vw; left: -5.5vw;

    animation: mosquitoFrontLeg var(--animation);
  }
  @keyframes mosquitoFrontLeg {
    /* left */
    0%, 100% { rotate: 0deg; }
    5% { rotate: 14deg; }
    15% { rotate: -5deg; }
    20% { rotate: 17deg; }
    30% { rotate: -5deg; }
    
    /* top center */
    40% { rotate: 25deg; }
    45% { rotate: -4deg; }

    /* right */
    55% { rotate: 16deg; }
    65% { rotate: -4deg; }
    70% { rotate: 21deg; }
    75% { rotate: 0deg; }
    85% { rotate: 24deg; }

    /* bottom center */
    90% { rotate: 5deg; }
    95% { rotate: 0deg; }
  }

  /* RIGHT LEGS */
  .mosquito__rightLeg {
    width: 3vw; height: 15vw;
    box-sizing: border-box;
    border-radius: 0 0 0 99em;
    border-width: 0 0 1vw 1vw;
    border-style: solid;
    border-color: #0a050d;
    transform-origin: top left;
  }
  .mosquito__rightLeg::before {
    bottom: -1vw; right: -0.5vw;
    width: 1vw;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: #0a050d;
  }
  .mosquito__rightLeg_back {
    top: 3.5vw; left: 4.5vw;
    
    animation: mosquitoBackLeg var(--animation);
  }
  .mosquito__rightLeg_front {
    top: 5vw; left: 2.1vw;
    
    animation: mosquitoFrontLeg var(--animation);
  }

  /* WINGS */
  .mosquito__leftWing {
    top: -21vw; left: -17vw;
    width: 18vw; height: 15vw;
    background: conic-gradient(from 299deg at 100% 100%, #ffffe7 20deg, transparent 0) 1vw 1vw no-repeat, radial-gradient(farthest-side, #ffffe7 100%, transparent) 0 0 / 7vw 7vw no-repeat;
    transform-origin: bottom right;

    animation: mosquitoLeftWing 0.2s linear infinite;
  }
  @keyframes mosquitoLeftWing {
    0% { rotate: 10deg; }
    50% { rotate: -15deg; }
  }
  .mosquito__rightWing {
    top: -21vw; left: -1vw;
    width: 18vw; height: 15vw;
    background: conic-gradient(from 41deg at 0% 100%, #ffffe7 20deg, transparent 0) -1vw 1vw no-repeat, radial-gradient(farthest-side, #ffffe7 100%, transparent) 11vw 0 / 7vw 7vw no-repeat;
    transform-origin: bottom left;

    animation: mosquitoRightWing 0.2s linear infinite;
  }
  @keyframes mosquitoRightWing {
    0% { rotate: -15deg; }
    50% { rotate: 10deg; }
  }

  /* BODY */
  .mosquito__body {
    width: 15vw;
    aspect-ratio: 1/1;
    background: #633252;
    translate: -50% -50%;
    clip-path: polygon(100.00% 50.00%,95.91% 52.89%,99.61% 56.27%,95.19% 58.62%,98.43% 62.43%,93.75% 64.21%,96.49% 68.41%,91.62% 69.59%,93.82% 74.09%,88.84% 74.65%,90.45% 79.39%,85.44% 79.32%,86.45% 84.23%,81.49% 83.53%,81.87% 88.53%,77.04% 87.21%,76.79% 92.22%,72.16% 90.31%,71.29% 95.24%,66.93% 92.77%,65.45% 97.55%,61.44% 94.55%,59.37% 99.11%,55.77% 95.64%,53.14% 99.90%,50.00% 96.00%,46.86% 99.90%,44.23% 95.64%,40.63% 99.11%,38.56% 94.55%,34.55% 97.55%,33.07% 92.77%,28.71% 95.24%,27.84% 90.31%,23.21% 92.22%,22.96% 87.21%,18.13% 88.53%,18.51% 83.53%,13.55% 84.23%,14.56% 79.32%,9.55% 79.39%,11.16% 74.65%,6.18% 74.09%,8.38% 69.59%,3.51% 68.41%,6.25% 64.21%,1.57% 62.43%,4.81% 58.62%,0.39% 56.27%,4.09% 52.89%,0.00% 50.00%,4.09% 47.11%,0.39% 43.73%,4.81% 41.38%,1.57% 37.57%,6.25% 35.79%,3.51% 31.59%,8.38% 30.41%,6.18% 25.91%,11.16% 25.35%,9.55% 20.61%,14.56% 20.68%,13.55% 15.77%,18.51% 16.47%,18.13% 11.47%,22.96% 12.79%,23.21% 7.78%,27.84% 9.69%,28.71% 4.76%,33.07% 7.23%,34.55% 2.45%,38.56% 5.45%,40.63% 0.89%,44.23% 4.36%,46.86% 0.10%,50.00% 4.00%,53.14% 0.10%,55.77% 4.36%,59.37% 0.89%,61.44% 5.45%,65.45% 2.45%,66.93% 7.23%,71.29% 4.76%,72.16% 9.69%,76.79% 7.78%,77.04% 12.79%,81.87% 11.47%,81.49% 16.47%,86.45% 15.77%,85.44% 20.68%,90.45% 20.61%,88.84% 25.35%,93.82% 25.91%,91.62% 30.41%,96.49% 31.59%,93.75% 35.79%,98.43% 37.57%,95.19% 41.38%,99.61% 43.73%,95.91% 47.11%);
  }

  /* FACE */
  .mosquito__face {
    top: 50%; left: 50%;

    animation: mosquitoFace var(--animation);
  }
  @keyframes mosquitoFace {
    0%, 100% { translate: 0vw 0vw; rotate: 0deg; }
    5% { translate: 0.3vw -0.7vw; rotate: 3deg; }
    10% { translate: 0.3vw -0.5vw; rotate: 11deg; }
    15% { translate: 2.7vw 0.2vw; rotate: 1deg; }
    20% { translate: 6.3vw -0.1vw; rotate: 7deg; }
    25% { translate: 5.6vw 0.3vw; rotate: 9deg; }
    35% { translate: 0.1vw 0.4vw; rotate: 3deg; }
    40% { translate: 0.3vw -0.8vw; rotate: 10deg; }
    50.4% { translate: -0.1vw 0.1vw; rotate: 3deg; }
    60% { translate: -1.1vw -0.2vw; rotate: 11deg; }
    65% { translate: -6.4vw -0.5vw; rotate: 4deg; }
    75% { translate: -0.5vw -0.1vw; rotate: 13deg; }
    80% { translate: -0.2vw 0.5vw; rotate: 7deg; }
    90% { translate: 0.5vw -0.4vw; rotate: 18deg; }
    95% { translate: -0.3vw 1.1vw; rotate: 10deg; }
  }
  .mosquito__leftEye {
    top: 0vw; left: -8.5vw;
    width: 8vw;
    aspect-ratio: 1/1;
    background: linear-gradient(#ff4a58 100%, transparent 0) 0 -4vw no-repeat,
        radial-gradient(farthest-side, #fff8ce 100%, transparent 0) 4.5vw 3vw / 2vw 2vw no-repeat,
        radial-gradient(farthest-side, #0f071e 100%, transparent 0) 5vw 3vw / 3vw 3vw no-repeat,
        radial-gradient(circle at 35% 40%, #fff8ce 61%, transparent 0), #73bccd;
    border-radius: 50%;
    translate: 0 -50%;

    animation: mosquitoLeftEye var(--animation);
  }
  @keyframes mosquitoLeftEye {
    /* left */
    0%, 15%, 25% { background-position: 0 -4vw, 4.5vw 3vw, 5vw 3vw, 0 0; }
    20% { background-position: 0 0, 4.5vw 3vw, 5vw 3vw, 0 0; }
    
    /* right */
    65%, 75%, 100% { background-position: 0 -4vw, 4.5vw 3vw, 5vw 3vw, 0 0; }
    70% { background-position: 0 0, 4.5vw 3vw, 5vw 3vw, 0 0; }
  }
  .mosquito__rightEye {
    top: 0vw; left: 0.5vw;
    width: 8vw;
    aspect-ratio: 1/1;
    background: linear-gradient(#ff4a58 100%, transparent 0) 0 -4vw no-repeat,
        radial-gradient(farthest-side, #fff8ce 100%, transparent 0) 1.5vw 3vw / 2vw 2vw no-repeat,
        radial-gradient(farthest-side, #0f071e 100%, transparent 0) 0vw 3vw / 3vw 3vw no-repeat,
        radial-gradient(circle at 65% 40%, #fff8ce 61%, transparent 0), #73bccd;
    border-radius: 50%;
    translate: 0 -50%;

    animation: mosquitoRightEye var(--animation);
  }
  @keyframes mosquitoRightEye {
    /* left */
    0%, 17%, 27% { background-position: 0 -4vw, 1.5vw 3vw, 0vw 3vw, 0 0; }
    22% { background-position: 0 0, 1.5vw 3vw, 0vw 3vw, 0 0; }
    
    /* right */
    67%, 77%, 100% { background-position: 0 -4vw, 1.5vw 3vw, 0vw 3vw, 0 0; }
    72% { background-position: 0 0, 1.5vw 3vw, 0vw 3vw, 0 0; }
  }

  /* NOSE */
  .mosquito__nose {
    top: -2.5vw;
    width: 2vw; height: 6vw;
    background: #ff4a58;
    border-radius: 99em;
    transform-origin: 1vw 1vw;
    translate: -50%;

    animation: mosquitoNose var(--animation);
  }
  @keyframes mosquitoNose {
    0%, 100% { rotate: 0deg; }
    5% { rotate: 5deg; }
    15% { rotate: -3deg; }
    20% { rotate: 2deg; }
    45% { rotate: -3deg; }
    60% { rotate: 3deg; }
    75% { rotate: -4deg; }
  }
  .mosquito__nose > div {
    top: 4vw;
    width: 2vw; height: 6.5vw;
    border-radius: 99em;
    transform-origin: 1vw 1vw;
    background: #ff4a58;

    animation: mosquitoNoseDiv var(--animation);
  }
  @keyframes mosquitoNoseDiv {
    0%, 100% { rotate: 0deg; }
    5% { rotate: -8deg; }
    15% { rotate: 4deg; }
    25% { rotate: -4deg; }
    30% { rotate: 2deg; }
    40% { rotate: -4deg; }
    45% { rotate: 7deg; }
    55% { rotate: -4deg; }
    80% { rotate: 6deg; }
    90% { rotate: -2deg; }
    95% { rotate: 2deg; }
  }
  .mosquito__nose > div::before {
    top: 4.5vw; left: 0;
    width: 2vw; height: 8vw;
    border-radius: 99em;
    transform-origin: 1vw 1vw;
    background: #ff4a58;

    animation: mosquitoNoseDivBefore var(--animation);
  }
  @keyframes mosquitoNoseDivBefore {
    0%, 100% { rotate: 0deg; }
    5% { rotate: -8deg; }
    10% { rotate: 7deg; }
    20% { rotate: -11deg; }
    30% { rotate: 9deg; }
    35% { rotate: -11deg; }
    45% { rotate: 10deg; }
    55% { rotate: -9deg; }
    60% { rotate: 9deg; }
    70% { rotate: -12deg; }
    80% { rotate: 8deg; }
    85% { rotate: -11deg; }
    95% { rotate: 10deg; }
  }
</style>