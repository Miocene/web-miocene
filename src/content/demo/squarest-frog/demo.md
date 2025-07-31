<div class="frog">
  <div class="forg__legs"></div>
	<div class="forg__head">
    <div class="forg__eye-r"></div>
    <div class="forg__eye-l"></div>
    <div class="forg__cheek-r"></div>
    <div class="forg__cheek-l"></div>
    <div class="forg__mouth"></div>
  </div>
  <div class="forg__body">
    <div class="forg__arm-r">
      <div class="forg__finger"></div>
      <div class="forg__finger"></div>
      <div class="forg__finger"></div>
    </div>
    <div class="forg__arm-l">
      <div class="forg__finger"></div>
      <div class="forg__finger"></div>
      <div class="forg__finger"></div>
    </div>
  </div>
  <div class="fly"></div>
</div>

<style>
  .demo {
    background-color: #AB953A;
    aspect-ratio: 1;
  }

  .demo *, .demo *::after, .demo *::before {
    position: absolute;
    content: '';
    box-sizing: border-box;
  }

  /* 1 */
  .frog {
    --green: #4C7849;
    --light-green: #AB953A;
    --pink: #E572A3;
    --red: #E95845;

    top: 50%; left: 50%;
    width: 520px; height: 250px;
    background: var(--green);
    border-radius: 70px 70px 0 0;
    border: 4px solid black;
    border-bottom: 0;
    translate: -50% -50%;
  }
  .forg__legs {
    top: 100%; left: -4px;
    width: 215px; height: 80px;
    background: var(--green);
    border-radius: 0 0 30px 70px;
    border: 4px solid black;
    border-top: 0;
  }
  .forg__legs::before {
      left: 301px;
      width: inherit; height: inherit;
      background: inherit;
      border: inherit;
      border-radius: 0 0 70px 30px;
  }
  .forg__legs::after {
    left: 100%;
    width: 98px; height: 50px;
    border: 4px solid black;
    border-bottom: 0;
    border-radius: 50px 50px 0 0;
    box-shadow: 0 -20px 0 20px var(--green);
  }



  /* 2 */
  .forg__head {
    top: -140px; left: -4px;
    width: inherit; height: 160px;
    background: var(--green);
    border: 4px solid black;
    border-radius: 70px;
  }
  .forg__eye-l {
    top: -55px; left: 60px;
    width: 170px; height: 90px;
    background: 
      conic-gradient(from -105deg at 60% 50%, white 30deg, transparent 0), 
      linear-gradient(90deg, white 50%, black 0);
    border: 4px solid black;
    box-shadow: 
      inset 0 0 0 10px var(--green), 
      inset 0 0 0 14px black;
    border-radius: 99em;
  }
  .forg__eye-r {
    top: -55px; right: 60px;
    width: 170px; height: 90px;
    background: 
      conic-gradient(from 75deg at 40% 50%, white 30deg, transparent 0), 
      linear-gradient(90deg, black 50%, white 0);
    border: 4px solid black;
    box-shadow: 
      inset 0 0 0 10px var(--green), 
      inset 0 0 0 14px black;
    border-radius: 99em;
  }



  /* 3 */
  .forg__cheek-r {
    top: 5px; right: 50px;
    width: 190px; height: 40px;
    background: radial-gradient(farthest-side circle at 50% 70%, var(--green) calc(100% - 4px), black 0 100%, transparent) 0 0 / 190px 190px;
  }
  .forg__cheek-l {
    top: 5px; left: 50px;
    width: 190px; height: 40px;
    background: radial-gradient(farthest-side circle at 50% 70%, var(--green) calc(100% - 4px), black 0 100%, transparent) 0 0 / 190px 190px;
  }
  .forg__cheek-l::before,
  .forg__cheek-r::before {
    top: 20px; left: 50%;
    width: 100px; aspect-ratio: 1;
    border-radius: 50%; border: 4px solid black;
    background: var(--pink);
    translate: -50% 0;
  }



  /* 4 */
  .forg__head::before {
    top: 10px; left: 233px;
    width: 22px; height: 22px;
    border: 4px solid;
    border-color: black black transparent transparent;
    border-radius: 50%;
    box-shadow: inset 0 0 0 4px var(--green), inset 0 0 0 8px black;
    rotate: -45deg;
  }
  .forg__head::after {
    top: 10px; right: 233px;
    width: 22px; height: 22px;
    border: 4px solid;
    border-color: black black transparent transparent;
    border-radius: 50%;
    box-shadow: inset 0 0 0 4px var(--green), inset 0 0 0 8px black;
    rotate: -45deg;
  }



  /* 5 */
  .forg__mouth {
    top: 60px; left: 50%;
    width: 60px; height: 40px;
    background: linear-gradient(black) center 0 / 4px 20px no-repeat, var(--red);
    border-radius: 0 0 99em 99em;
    border: 4px solid black;
    translate: -50% 0;
  }
  .forg__mouth::before {
    top: -5px; left: 50%;
    width: 230px; height: 20px;
    background-image: radial-gradient(farthest-side circle at 50% 160%, transparent calc(100% - 4px), black 0 100%, transparent);
    background-position: 0 0;
    background-size: 230px 230px;
    translate: -50% 0;
  }



  /* 6 */
  .forg__body {
    top: 16px; left: 50%;
    width: 480px; height: 220px;
    background: var(--green);
    border-radius: 50px;
    border: 4px solid black;
    translate: -50% 0;
  }
  .forg__body::before {
    bottom: 0; left: 50%;
    width: 160px; height: 200px;
    background: repeating-linear-gradient(90deg, transparent 0 8px, black 0 12px), var(--light-green);
    border-radius: 99em 99em 0 0;
    border: 4px solid black;
    border-bottom: 0;
    translate: -50% 0;
  }

  .forg__arm-r {
    bottom: 0; right: 80px;
    width: 60px; height: 180px;
    border-left: 4px solid black;
    border-right: 4px solid black;
  }
  .forg__arm-r::before,
  .forg__arm-l::before {
    top: 100%; left: 50%;
    width: 100px; height: 50px;
    background: 
      radial-gradient(circle farthest-side, transparent calc(100% - 4px), black 0 100%, transparent) -27px -15px / 52px 52px, 
      radial-gradient(circle farthest-side, transparent calc(100% - 4px), black 0 100%, transparent) 74px -15px / 52px 52px, 
      radial-gradient(circle farthest-side, transparent calc(100% - 4px), black 0 100%, transparent) 48px 25px / 52px 52px, 
      radial-gradient(circle farthest-side, transparent calc(100% - 4px), black 0 100%, transparent) 0px 25px / 52px 52px;
    background-repeat: no-repeat;
    border-radius: 0 0 99em 99em;
    translate: -50% 0;
  }
  .forg__arm-l {
    bottom: 0; left: 80px;
    width: 60px; height: 180px;
    border-left: 4px solid black;
    border-right: 4px solid black;
  }



  /* 7 */
  .forg__finger {
    top: 100%; left: 50%;
    width: 20px; aspect-ratio: 1;
    background-color: var(--green);
    border: 4px solid black;
    border-radius: 50%;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(50px);
  }
  .forg__finger:nth-child(1) {
    --angle: 140deg;
  }
  .forg__finger:nth-child(2) {
    --angle: 40deg;
  }
  .forg__finger:nth-child(3) {
    --angle: 90deg;
  }



  /* 8 */
  .fly {
    top: -160px; left: 50%;
    width: 25px; aspect-ratio: 1;
    background: black;
    border-radius: 50%;
    translate: -50% 0;
  }
  .fly::before,
  .fly::after {
    top: 50%;
    width: 30px; aspect-ratio: 1;
    border: 4px solid;
    border-radius: 0 9em 9em;
    background: white;
    translate: 0 -50%;
  }
  .fly::before {
    left: 100%;
    rotate: -45deg;
  }
  .fly::after {
    right: 100%;
    rotate: 135deg;
  }
</style>