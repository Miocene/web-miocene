<div class="pen">
  <div class="pen__pointSide pen__pointSide1">
    <div class="pen__side pen__side1"></div>
  </div>
  <div class="pen__pointSide pen__pointSide2">
    <div class="pen__side pen__side2"></div>
  </div>
  <div class="pen__pointSide pen__pointSide3">
    <div class="pen__side pen__side3"></div>
  </div>
  <div class="pen__pointSide pen__pointSide4">
    <div class="pen__side pen__side4"></div>
  </div>
  <div class="pen__pointSide pen__pointSide5">
    <div class="pen__side pen__side5"></div>
  </div>
  <div class="pen__pointSide pen__pointSide6">
    <div class="pen__side pen__side6"></div>
  </div>
  <div class="pen__ring">
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="dodecagon dodecagon-top"></div>
    <div class="dodecagon dodecagon-bottom"></div>
  </div>
  <div class="pen__metal">
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="dodecagon dodecagon-top"></div>
  </div>
  <div class="pen__eraser">
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="face"><div></div></div>
    <div class="dodecagon dodecagon-top"></div>
  </div>
</div>
<div class="penShadow"></div>

<style>
  .demo {
    background-color: #fff;
  }
  .demo * {
    position: absolute;
    transform-style: preserve-3d;
  }
  .demo *::before, .demo *::after {
    position: absolute;
    content: '';
  }

  .pen {
    --point-big-radius: 1.25vw;
    --point-small-radius: calc(var(--point-big-radius) / (2 * tan(180deg / 6)));
    
    --pen-big-radius: 8vw;
    --pen-small-radius: calc(var(--pen-big-radius) / (2 * tan(180deg / 6)));

    --point-angle: 35deg;
    --point-length: calc((var(--pen-small-radius) - var(--point-small-radius)) /  cos(90deg - var(--point-angle)));
    --point-height: calc(var(--point-length) * cos(var(--point-angle)));
    
    --pen-length: 18vw;
    --ring-height: 1vw;
    --metal-height: 4vw;
    --eraser-height: 4vw;
    
    top: 50%; left: 50%;
    width: calc(var(--point-big-radius) * 2);
    aspect-ratio: 1/1;
    transform: translate(-15vw, 15vw) rotateX(118deg) rotateY(38deg) rotateZ(-60deg);
    animation: penRotationAnimation 6s linear infinite;

    /* hexagon points */
    --point1-x: calc(var(--point-big-radius) + var(--point-big-radius) * sin(2 * 1 * 3.14 / 6));
    --point1-y: calc(var(--point-big-radius) + var(--point-big-radius) * cos(2 * 1 * 3.14 / 6));
    --point2-x: calc(var(--point-big-radius) + var(--point-big-radius) * sin(2 * 2 * 3.14 / 6));
    --point2-y: calc(var(--point-big-radius) + var(--point-big-radius) * cos(2 * 2 * 3.14 / 6));
    --point3-x: calc(var(--point-big-radius) + var(--point-big-radius) * sin(2 * 3 * 3.14 / 6));
    --point3-y: calc(var(--point-big-radius) + var(--point-big-radius) * cos(2 * 3 * 3.14 / 6));
    --point4-x: calc(var(--point-big-radius) + var(--point-big-radius) * sin(2 * 4 * 3.14 / 6));
    --point4-y: calc(var(--point-big-radius) + var(--point-big-radius) * cos(2 * 4 * 3.14 / 6));
    --point5-x: calc(var(--point-big-radius) + var(--point-big-radius) * sin(2 * 5 * 3.14 / 6));
    --point5-y: calc(var(--point-big-radius) + var(--point-big-radius) * cos(2 * 5 * 3.14 / 6));
    --point6-x: calc(var(--point-big-radius) + var(--point-big-radius) * sin(2 * 6 * 3.14 / 6));
    --point6-y: calc(var(--point-big-radius) + var(--point-big-radius) * cos(2 * 6 * 3.14 / 6));
  }
  @keyframes penRotationAnimation {
    to { transform: translate(-15vw, 15vw) rotateX(118deg) rotateY(38deg) rotateZ(calc(-60deg + 1turn)); }
  }



  /* PENCIL POINT */
  .pen::before {
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: #6f6e70;
    clip-path: polygon(var(--point1-x) var(--point1-y),
                      var(--point2-x) var(--point2-y),
                      var(--point3-x) var(--point3-y),
                      var(--point4-x) var(--point4-y),
                      var(--point5-x) var(--point5-y),
                      var(--point6-x) var(--point6-y));
  }



  /* PENCIL POINT SIDE */
  .pen__pointSide {
    width: var(--point-big-radius); height: var(--point-length);
    transform-origin: top left;
  }

  .pen__pointSide::before {
    left: 50%;
    width: var(--pen-big-radius); height: 100%;
    translate: -50%;
    clip-path: polygon(calc(50% - var(--point-big-radius) / 2) 0, calc(50% + var(--point-big-radius) / 2) 0, 100% 100%, 0% 100%);
    box-shadow: inset 0px 3vw #464547;
    animation: penPointColorAnimation 6s linear infinite;
  }
  @keyframes penPointColorAnimation {
    0%, 16%, 100% {
        background-color: #dfcbb4;
    }
    32%, 84% {
        background-color: #eadac9;
    }
  }

  .pen__pointSide1 {
    left: var(--point1-x); top: var(--point1-y);
    transform: rotateZ(150deg) rotateX(calc(90deg + var(--point-angle)));
  }

  .pen__pointSide2 {
    left: var(--point2-x); top: var(--point2-y);
    transform: rotateZ(90deg) rotateX(calc(90deg + var(--point-angle)));
  }

  .pen__pointSide3 {
    left: var(--point3-x); top: var(--point3-y);
    transform: rotateZ(30deg) rotateX(calc(90deg + var(--point-angle)));
  }

  .pen__pointSide4 {
    left: var(--point4-x); top: var(--point4-y);
    transform: rotateZ(-30deg) rotateX(calc(90deg + var(--point-angle)));
  }

  .pen__pointSide5 {
    left: var(--point5-x); top: var(--point5-y);
    transform: rotateZ(270deg) rotateX(calc(90deg + var(--point-angle)));
  }

  .pen__pointSide6 {
    left: var(--point6-x); top: var(--point6-y);
    transform: rotateZ(210deg) rotateX(calc(90deg + var(--point-angle)));
  }



  /* PENCIL SIDE */
  .pen__side {
    top: 100%; left: 50%;
    width: var(--pen-big-radius); height: var(--pen-length);
    background-color: #f7d24d;
    transform-origin: top center;
    translate: -50%;
    rotate: x calc(-1 * var(--point-angle));
    animation: penColorAnimation 6s linear infinite;
  }
  @keyframes penColorAnimation {
    0%, 16%, 100% { background-color: #e5bb28; }
    32%, 84% { background-color: #f7d24d; }
  }



  /* HEXOGON ANIMATION DELAY */
  .pen__pointSide2::before, .pen__side2 {
    animation-delay: -5s;
  }

  .pen__pointSide3::before, .pen__side3 {
    animation-delay: -4s;
  }

  .pen__pointSide4::before, .pen__side4 {
    animation-delay: -3s;
  }

  .pen__pointSide5::before, .pen__side5 {
    animation-delay: -2s;
  }

  .pen__pointSide6::before, .pen__side6 {
    animation-delay: -1s;
  }



  /* PENCIL RING */
  .pen__ring {
    --ring-radius: calc(var(--pen-big-radius) + 2vw / 2);

    transform: translateZ(calc(var(--point-height) + var(--pen-length))) translate(-50%, -50%);
  }

  .pen__ring .dodecagon-bottom {
    background-color: #ece5e4;
  }
  .pen__ring .dodecagon-top {
    background-color: #ece5e4;
    transform: translateZ(var(--ring-height));
  }

  .pen__ring .face {
    height: var(--ring-height);
    background-color: #e6e5e7;
    animation: penMetalColorAnimation 6s linear infinite;
  }
  .pen__ring .face > div {
    background-color: #e6e5e7;
    animation: penMetalColorAnimation 6s linear infinite;
  }
  @keyframes penMetalColorAnimation {
    0%, 16% { background-color: #e6e5e7; } 
    32%, 84% { background-color: #f8f8f9; } 
  }



  /* BIG METAL RING */
  .pen__metal {
    --ring-radius: calc(var(--pen-big-radius) + 1vw / 2);
    
    transform: translateZ(calc(var(--point-height) + var(--pen-length) + var(--ring-height))) translate(-50%, -50%);
  }
  .pen__metal .dodecagon-top {
    background-color: #ece5e4;
    transform: translateZ(var(--metal-height));
  }

  .pen__metal .face {
    height: var(--metal-height);
    background-color: #e6e5e7;
    animation: penMetalColorAnimation 6s linear infinite;
  }
  .pen__metal .face > div {
    background-color: #e6e5e7;
    animation: penMetalColorAnimation 6s linear infinite;
  }



  /* ERASER */
  .pen__eraser {
    --ring-radius: var(--pen-big-radius);

    transform: translateZ(calc(var(--point-height) + var(--pen-length) + var(--ring-height) + var(--metal-height))) translate(-50%, -50%);
  }

  .pen__eraser .dodecagon-top {
    background-color: #e6a0b8;
    transform: translateZ(var(--eraser-height));
  }

  .pen__eraser .face {
    background-color: #eec8d4;
    animation: penErazerColorAnimation 6s linear infinite;
  }

  .pen__eraser .face > div {
    background-color: #eec8d4;
    animation: penErazerColorAnimation 6s linear infinite;
  }
  @keyframes penErazerColorAnimation {
    0%, 16%, 100% { background-color: #e6a0b8; } 
    32%, 84% { background-color: #eec8d4; } 
  }



  /* COMMON STYLES */
  .pen__metal, .pen__eraser, .pen__ring {
    --point1-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 1 * 3.14 / 12));
    --point1-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 1 * 3.14 / 12));
    --point2-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 2 * 3.14 / 12));
    --point2-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 2 * 3.14 / 12));
    --point3-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 3 * 3.14 / 12));
    --point3-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 3 * 3.14 / 12));
    --point4-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 4 * 3.14 / 12));
    --point4-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 4 * 3.14 / 12));
    --point5-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 5 * 3.14 / 12));
    --point5-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 5 * 3.14 / 12));
    --point6-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 6 * 3.14 / 12));
    --point6-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 6 * 3.14 / 12));
    --point7-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 7 * 3.14 / 12));
    --point7-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 7 * 3.14 / 12));
    --point8-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 8 * 3.14 / 12));
    --point8-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 8 * 3.14 / 12));
    --point9-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 9 * 3.14 / 12));
    --point9-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 9 * 3.14 / 12));
    --point10-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 10 * 3.14 / 12));
    --point10-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 10 * 3.14 / 12));
    --point11-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 11 * 3.14 / 12));
    --point11-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 11 * 3.14 / 12));
    --point12-x: calc(var(--ring-radius) + var(--ring-radius) * sin(2 * 12 * 3.14 / 12));
    --point12-y: calc(var(--ring-radius) + var(--ring-radius) * cos(2 * 12 * 3.14 / 12));

    top: 50%; left: 50%;
    width: calc(var(--ring-radius) * 2);
    aspect-ratio: 1/1;
  }

  .dodecagon {
    width: 100%; height: 100%;
    clip-path: polygon(var(--point1-x) var(--point1-y),
                      var(--point2-x) var(--point2-y),
                      var(--point3-x) var(--point3-y),
                      var(--point4-x) var(--point4-y),
                      var(--point5-x) var(--point5-y),
                      var(--point6-x) var(--point6-y),
                      var(--point7-x) var(--point7-y),
                      var(--point8-x) var(--point8-y),
                      var(--point9-x) var(--point9-y),
                      var(--point10-x) var(--point10-y),
                      var(--point11-x) var(--point11-y),
                      var(--point12-x) var(--point12-y));
  }

  .face {
    width: calc(2 * var(--ring-radius) * sin(180deg / 12));
    height: var(--eraser-height);
    transform-origin: top left;
  }

  .face > div {
    width: 100%; height: 100%;
    transform-origin: top left;
    transform: rotateY(-150deg);
  }

  .pen__ring .face:nth-child(1),
  .pen__metal .face:nth-child(1),
  .pen__eraser .face:nth-child(1) {
    left: var(--point1-x); top: var(--point1-y);
    transform: rotateZ(-45deg) rotateX(90deg);
  }

  .pen__ring .face:nth-child(2),
  .pen__metal .face:nth-child(2),
  .pen__eraser .face:nth-child(2) {
    left: var(--point3-x); top: var(--point3-y);
    transform: rotateZ(-105deg) rotateX(90deg);
    animation-delay: -5s;
  }

  .pen__ring .face:nth-child(2) > div,
  .pen__metal .face:nth-child(2) > div,
  .pen__eraser .face:nth-child(2) > div {
    animation-delay: -5s;
  }

  .pen__ring .face:nth-child(3),
  .pen__metal .face:nth-child(3),
  .pen__eraser .face:nth-child(3) {
    left: var(--point5-x); top: var(--point5-y);
    transform: rotateZ(195deg) rotateX(90deg);
    animation-delay: -4s;
  }

  .pen__ring .face:nth-child(3) > div,
  .pen__metal .face:nth-child(3) > div,
  .pen__eraser .face:nth-child(3) > div {
    animation-delay: -4s;
  }

  .pen__ring .face:nth-child(4),
  .pen__metal .face:nth-child(4),
  .pen__eraser .face:nth-child(4) {
    left: var(--point7-x); top: var(--point7-y);
    transform: rotateZ(135deg) rotateX(90deg);
    animation-delay: -3s;
  }

  .pen__ring .face:nth-child(4) > div,
  .pen__metal .face:nth-child(4) > div,
  .pen__eraser .face:nth-child(4) > div {
    animation-delay: -3s;
  }

  .pen__ring .face:nth-child(5),
  .pen__metal .face:nth-child(5),
  .pen__eraser .face:nth-child(5) {
    left: var(--point9-x); top: var(--point9-y);
    transform: rotateZ(75deg) rotateX(90deg);
    animation-delay: -2s;
  }

  .pen__ring .face:nth-child(5) > div,
  .pen__metal .face:nth-child(5) > div,
  .pen__eraser .face:nth-child(5) > div {
    animation-delay: -2s;
  }

  .pen__ring .face:nth-child(6),
  .pen__metal .face:nth-child(6),
  .pen__eraser .face:nth-child(6) {
    left: var(--point11-x); top: var(--point11-y);
    transform: rotateZ(15deg) rotateX(90deg);
    animation-delay: -1s;
  }

  .pen__ring .face:nth-child(6) > div,
  .pen__metal .face:nth-child(6) > div,
  .pen__eraser .face:nth-child(6) > div {
    animation-delay: -1s;
  }



  /* SHADOW */
  .penShadow {
    top: 50%; left: 50%;
    width: 20vw; height: 3vw;
    background-color: #464547;
    border-radius: 0% 100% 100% 0% / 0% 50% 50% 0%;
    filter: blur(4vw);
    transform-origin: top center;
    transform: translate(-13vw, 21vw) rotate(122deg) rotateZ(50deg);
  }
</style>