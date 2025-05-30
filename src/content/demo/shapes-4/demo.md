<div class="grid">
  <div class="portrait">
    <div class="person person_left">
      <div class="person__head">
        <div class="person__beard"></div>
        <div class="person__face"></div>
      </div>
    </div>
  </div>
  <div class="portrait">
    <div class="person person_center">
      <div class="person__head">
        <div class="person__face"></div>
      </div>
    </div>
  </div>
  <div class="portrait">
    <div class="person person_right">
      <div class="person__neck">
        <div class="person__head">
          <div class="person__face"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .person, .person::before, .person::after, .person *, .person *::after, .person *::before {
    position: absolute;
    content: '';
  }

  .grid {
    position: absolute;
    width: 100%; height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .portrait {
    position: relative;
    overflow: hidden;

    --black: #00202a;
    --grey: #003444;
    --light-grey: #547d8f;
    --white: #f8f8f8;
    --blue: #2348cd;
    --dark-blue: #013344;
    --light-blue: #0ef3bd;
    --skin: #f77676;
    --dark-skin: #cc3c40;
    --light-skin: #f3af9f;
    --yellow: #f6d359;
    --dark-yellow: #e9a964;
    --red: #f44d5f;
    --dark-red: #cc3040;
    --light-red: #eab1ae;
  }
  .portrait:nth-child(1) {
    background-color: #fcd2c7;
  }
  .portrait:nth-child(2) {
    background-color: #fcf8db;
  }
  .portrait:nth-child(3) {
    background-color: #f8e8d9;
  }



  /* LEFT PERSON */
  /* neck */
  .person_left {
    top: 50%; left: 50%;
    width: 88px; height: 276px;
    background: linear-gradient(86deg, var(--light-skin) 90%, transparent 91%);
    translate: -42px -100px;
    
    --animation: 6s ease infinite;
  }

  /* body */
  .person_left::before {
    top: 147px; left: -106px;
    width: 313px; height: 129px;
    background: 
        /* dark lines */
        linear-gradient(-8deg, transparent 108px, var(--dark-red) 109px, var(--dark-red) 110px, transparent 111px) 198px 0 no-repeat,
        linear-gradient(-39deg, transparent 60px, var(--dark-red) 61px, var(--dark-red) 62px, transparent 63px),
        linear-gradient(-102deg, transparent 74px, var(--dark-red) 75px, var(--dark-red) 76px, transparent 77px),
        linear-gradient(-80deg, transparent 106px, var(--dark-red) 107px, var(--dark-red) 108px, transparent 109px),
        /* armpit */
        conic-gradient(from 3rad, var(--red) 22deg, transparent 0) 25px 49px / 50px 80px no-repeat, 
        /* coat */
        linear-gradient(-79deg, var(--red) 126px, transparent 11px),
        /* light lines */
        linear-gradient(-8deg, transparent 97px, var(--light-red) 98px, var(--light-red) 99px, transparent 100px),
        linear-gradient(108deg, transparent 149px, var(--light-red) 150px, var(--light-red) 151px, transparent 152px) 0 9px no-repeat,
        /* shirt */ 
        linear-gradient(-15deg, var(--white) 155px, transparent 125px),
        var(--light-skin);
    -webkit-mask-image: conic-gradient(from 126deg at 50% -21%, black 109deg, transparent 0);
  }

  /* top of the head */
  .person_left .person__head {
    top: -62px; left: 24px;
    width: 74px; height: 74px;
    background: var(--light-skin);
    border-radius: 50%;
    transform-origin: bottom center;
    animation: leftPersonHead var(--animation);
  }
  @keyframes leftPersonHead {
    0%, 18%, 85%, 100% { rotate: 0deg; }
    23% { rotate: -5deg; }
    35%, 75% { rotate: 10deg; }
  }

  /* ear */
  .person_left .person__head::before {
    top: 37px; left: -78px;
    width: 20px; height: 21px;
    background: var(--dark-skin);
    border-radius: 13px 0 0 0;
    transform-origin: top left;
    transform: skewX(41deg);
  }

  /* brows */
  .person_left .person__head::after {
    top: 24px; left: -64px;
    width: 87px; height: 13px;
    background:
        /* light lines */
        linear-gradient(0deg, var(--light-grey) 2px, transparent 3px) 0 0 / 28px 7px no-repeat,
        linear-gradient(0deg, var(--light-grey) 2px, transparent 3px) 46px 0 / 41px 7px no-repeat,
        /* brows */
        linear-gradient(100deg, var(--grey) 31px, transparent 3px) 5px 0 / 32px 100% no-repeat,
        linear-gradient(var(--grey) 100%, transparent 3px) 50px 0 / 32px 100% no-repeat;
    animation: leftPersonBrows var(--animation);
  }
  @keyframes leftPersonBrows {
    0%, 18%, 85%, 100% { translate: 0; }
    23% { translate: 0 5px; }
    26%, 75% { translate: 0 -3px; }
  }

  /* beard */
  .person_left .person__beard {
    top: 64px; left: -76px;
    width: 131px; height: 153px;
    background:
        /* shadows */
        conic-gradient(from 0.2rad at 13% 41%, var(--black) 7%, transparent calc(7% + 0.2%)), 
        conic-gradient(from -1rad at 93% 36%, var(--black) 14%, transparent calc(14% + 0.2%)), 
        /* beard shape */
        linear-gradient(284deg, var(--grey) 77%, transparent 0) 0 0 / 100px 100% no-repeat, 
        linear-gradient(83deg, var(--grey) 62.7%, transparent 0) 40px 0 no-repeat;
    border-radius: 0 0 15px 24px;
    transform-origin: top left;
    animation: leftPersonBeard var(--animation);
  }
  @keyframes leftPersonBeard {
    0%, 25%, 85%, 100% { rotate: 7deg; }
    35%, 75% { rotate: 0deg; }
  }

  .person_left .person__beard::before {
    top: 42px; left: 31px;
    width: 55px; height: 27px;
    background:
        /* lips */
        linear-gradient(-16deg, transparent 18px, var(--dark-skin) 18px, var(--dark-skin) 19px, transparent 20px) 8px 0 / 38px 100% no-repeat, 
        /* shadows */
        conic-gradient(from 190deg at 60% 41%, var(--skin) 18%, transparent 0), 
        linear-gradient(107deg, var(--skin) 35%, transparent calc(35% + 1px)), 
        /* skin */
        linear-gradient(58deg, var(--light-skin) 81%, transparent calc(81% + 1px));
    transform-origin: top left;
    border-radius: 0 0 5px 6px;
    -webkit-mask-image: conic-gradient(from 83deg at 14% 15%, black 34%, transparent 0);
    animation: leftPersonLips var(--animation);
  }
  @keyframes leftPersonLips {
    0%, 25%, 85%, 100% { rotate: -14deg; translate: 0; }
    35%, 75% { rotate: -18deg; translate: 0 7px; }
  }

  /* beard lines */
  .person_left .person__beard::after {
    top: 0px; left: 0px;
    width: 100%; height: 162px;
    background: 
        linear-gradient(79deg, transparent 111px, var(--light-grey) 111px, var(--light-grey) 113px, transparent 113px) 0px 53px / 100% 71px no-repeat, 
        linear-gradient(87deg, transparent 82px, var(--light-grey) 82px, var(--light-grey) 84px, transparent 84px) 0px 88px / 100% 74px no-repeat, 
        linear-gradient(89deg, transparent 62px, var(--light-grey) 62px, var(--light-grey) 64px, transparent 64px) 0px 70px / 100% 24px no-repeat, 
        linear-gradient(95deg, transparent 48px, var(--light-grey) 48px, var(--light-grey) 50px, transparent 50px) 0px 82px / 100% 54px no-repeat, 
        linear-gradient(97deg, transparent 26px, var(--light-grey) 26px, var(--light-grey) 28px, transparent 28px) 0px 64px / 100% 96px no-repeat;
  }

  .person_left .person__face {
    top: 46px; left: -3px;
    width: 50px; height: 45px;
    background:
        /* undereye circle */ 
        linear-gradient(157deg, transparent 27px, var(--skin) 28px, var(--skin) 29px, transparent 30px) 0 0 / 37px 100% no-repeat,
        /* background */
        var(--light-skin);
    border-radius: 0 0 8px;
    transform-origin: top left;
    rotate: 23deg;
  }

  /* nose */
  .person_left .person__face::before {
    top: 2px; left: -58px;
    width: 80px; height: 82px;
    background:
        /* undereye circle */
        linear-gradient(194deg, transparent 55px, var(--dark-skin) 56px, var(--dark-skin) 57px, transparent 58px) 0px 0px / 18px 100% no-repeat,
        /* shadows */
        linear-gradient(5deg, var(--skin) 24%, transparent calc(22% + 1px)) 0 0 / 40px 100% no-repeat,
        linear-gradient(93deg, var(--skin) 33%, transparent calc(33% + 1px)) 0px 9px no-repeat, 
        /* skin */
        linear-gradient(104deg, var(--light-skin) 73px, transparent 74px);
    transform-origin: top left;
    border-radius: 0 0 0 9px;
    rotate: -15deg;
    transform: skewY(-23deg);
  }

  /* eyes */
  .person_left .person__face::after {
    top: 27px; left: -38px;
    width: 8px; height: 8px;
    background: var(--grey);
    border-radius: 50%;
    box-shadow: 46px 0 var(--grey);
    rotate: -23deg;
    animation: leftPersonEyes var(--animation);
  }
  @keyframes leftPersonEyes {
    0%, 20%, 26%, 100% { scale: 1; }
    23% { scale: 1 0.1; }
  }


  /* CENTER PERSON */
  /* body */
  .person_center {
    top: 50%; left: 50%;
    width: 200px; height: 100px;
    background: 
        /* collarbone */
        linear-gradient(var(--skin), var(--skin)) 45px 35px / 95px 2px no-repeat,
        /* skin */
        radial-gradient(var(--light-skin) 70%, transparent 0) 0 -50px / 100% 130% no-repeat;
    border-radius: 50%;
    translate: -90px 60px;
    
    --animation: 6s ease infinite;
  }

  /* neck */
  .person_center::before {
    top: -90px; left: 60px;
    width: 80px; height: 100px;
    background: 
        linear-gradient(140deg, var(--skin) 50%, transparent calc(50% + 1px)) no-repeat,
        var(--light-skin);
    -webkit-mask-image: linear-gradient(80deg, black 80%, transparent calc(80% + 1px));
    animation: centerPersonNeck var(--animation);
  }
  @keyframes centerPersonNeck {
    0%, 20%, 80%, 100% { background-position: 0 0; }
    30% { background-position: 0 7px; }
    40%, 70% { background-position: 0 -5px; }
  }

  /* ear and hair */
  .person_center .person__head {
    top: -145px; left: 5px;
    width: 50px; height: 50px;
    background: var(--dark-skin);
    border-radius: 50%;
    box-shadow:
        /* ear */
        135px 0 var(--light-skin),
        /* front hair */
        120px -40px 0 10px var(--yellow),
        80px -60px var(--yellow),
        30px -100px 0 15px var(--yellow),
        /* back hair */
        25px -50px 0 10px var(--dark-yellow),
        80px -70px 0 10px var(--dark-yellow);
    animation: centerPersonHead var(--animation),
              centerPersonHair var(--animation);
  }
  @keyframes centerPersonHead {
    0%, 20%, 80%, 100% { translate: 0 0; }
    30% { translate: -2px 10px; }
    40%, 70% { translate: -2px -7px; }
  }
  @keyframes centerPersonHair {
    0%, 30%, 80%, 100% {
      box-shadow:
        /* ear */
        135px 0 var(--light-skin),
        /* front hair */
        120px -40px 0 10px var(--yellow),
        80px -60px var(--yellow),
        30px -100px 0 15px var(--yellow),
        /* back hair */
        25px -50px 0 10px var(--dark-yellow),
        80px -70px 0 10px var(--dark-yellow);
    }
    40%, 70% {
      box-shadow:
        /* ear */
        130px 0 var(--light-skin),
        /* front hair */
        120px -30px 0 10px var(--yellow),
        85px -55px var(--yellow),
        33px -100px 0 15px var(--yellow),
        /* back hair */
        20px -45px 0 10px var(--dark-yellow),
        75px -55px 0 10px var(--dark-yellow);
    }
  }

  /* head */
  .person_center .person__head::before {
    top: -30px; left: 25px;
    width: 130px; aspect-ratio: 1/1;
    background: 
        /* hair */
        linear-gradient(-150deg, var(--yellow) 29%, transparent 0) no-repeat,
        /* nose */
        linear-gradient(100deg, var(--skin) 45%, transparent calc(45% + 1px)) 0 70px no-repeat,
        linear-gradient(100deg, var(--skin) 45%, transparent calc(45% + 1px)) no-repeat,
        /* skin */
        var(--light-skin);
    border-radius: 50%;
    animation: centerPersonFace var(--animation),
              centerPersonNose var(--animation);
  }
  @keyframes centerPersonFace {
    0%, 30%, 80%, 100% { translate: 0 0; }
    40%, 70% { translate: 4px 0; }
  }
  @keyframes centerPersonNose {
    0%, 20%, 80%, 100% {
      background-position: 0 0, -13px 70px, -13px 0, 0 0;
    }
    30% {
      background-position: 0 0, -13px 75px, -13px 5px, 0 0;
    }
    40%, 70% {
      background-position: 0 0, -5px 70px, -5px 0, 0 0;
    }
  }

  /* smile */
  .person_center .person__head::after {
    top: 45px; left: 40px;
    width: 60px; height: 23px;
    border-radius: 0 0 50% 50%;
    box-shadow: inset 0 -13px 0 -10px var(--dark-skin);
    animation: centerPersonSmile var(--animation)
  }
  @keyframes centerPersonSmile {
    0%, 20%, 80%, 100% {
      transform: translate(0, 0) scale(1) rotate(0);
    }
    30% {
      transform: translate(0px, 5px) scale(1) rotate(0deg);
    }
    40%, 70% {
      transform: translate(15px, -5px) scale(0.8) rotate(-15deg);
    }
  }

  /* eyes */
  .person_center .person__face {
    top: 15px; left: 35px;
    width: 8px; aspect-ratio: 1/1;
    background: var(--black);
    border-radius: 50%;
    box-shadow: 65px 0 var(--black);
    animation: centerPersonEyes var(--animation);
  }
  @keyframes centerPersonEyes {
    0%, 20%, 80%, 100% { translate: 0 0; }
    30% { translate: 2px 5px; }
    40%, 70% { translate: 15px -10px; }
  }

  /* hair */
  .person_center .person__face::before {
    top: -85px; left: -20px;
    width: 330px; height: 120px;
    border-radius: 0 0 0 100%;
    box-shadow: inset 120px 0 0 -50px var(--yellow);
    animation: centerPersonForelock var(--animation);
  }
  @keyframes centerPersonForelock {
    0%, 20%, 80%, 100% { translate: 0 0; }
    30% { translate: 0 -5px; }
    40%, 70% { translate: -12px -2px; }
  }

  /* glasses */
  .person_center .person__face::after {
    top: -25px; left: -28px;
    width: 60px; aspect-ratio: 1/1;
    border: 2px solid var(--blue);
    border-radius: 50%;
    filter: drop-shadow(75px 0 var(--blue));
    animation: centerPersonGlasses var(--animation);
  }
  @keyframes centerPersonGlasses {
    0%, 30%, 80%, 100% { translate: 0 0; }
    40%, 70% { translate: -5px 5px; }
  }



  /* RIGHT PERSON */
  /* coat */
  .person_right {
    top: 50%; left: 50%;
    width: 224px; height: 69px;
    background:
        /* line */
        linear-gradient(125deg, transparent 120px, var(--light-blue) 121px, var(--light-blue) 122px, transparent 123px) 0 21px no-repeat,
        /* fabric */
        conic-gradient(from 141deg at 75% 0%, var(--blue) 107deg, transparent 0);
    translate: -85px 60px;
    --animation-slow: 6s ease infinite;
    --animation-fast: 1.5s ease infinite;
  }

  /* collar */
  .person_right::before {
    top: 68px; left: -1px;
    width: 198px; height: 51px;
    background: linear-gradient(196deg, var(--white) 54%, transparent 0);
    border-radius: 0 20px 31px 0;
    transform-origin: top left;
    rotate: -38deg;
    z-index: 1;
  }

  /* line */
  .person_right::after {
    top: 42px; left: 46px;
    width: 154px; height: 2px;
    background: var(--light-red);
    transform-origin: top left;
    rotate: -28deg;
    z-index: 1;
  }

  /* neck */
  .person_right .person__neck {
    top: -94px; right: 126px;
    width: 104px; height: 87px;
    background:
        /* line */
        linear-gradient(120deg, transparent calc(55% - 1px), var(--dark-skin) 55%, var(--dark-skin) calc(55% + 1px), transparent calc(55% + 2px)) 0 9px / 100% 63px no-repeat,
        /* skin */
        conic-gradient(from 20deg at 13% 58%, var(--dark-skin) 8%, var(--skin) 8% 50%, transparent 0);
    transform-origin: top right;
    rotate: -30deg;
    animation: rightPersonNeck var(--animation-fast);
  }
  @keyframes rightPersonNeck {
    0%, 100% {
      background-position: 0 9px, 0 0;
    }
    50% {
      background-position: 0 9px, 0 8px;
    }
  }

  /* hair */
  .person_right .person__neck::before {
    top: -177px; left: 38px;
    width: 110px; height: 110px;
    background: var(--dark-blue);
    border-radius: 50%;
    box-shadow: inset 5px 40px 0 -10px var(--blue);
    animation: rightPersonHair var(--animation-fast);
    animation-delay: 0.08s;
  }
  @keyframes rightPersonHair {
    0%, 100% { translate: 0 0; }
    50% { translate: -15px 8px; }
  }

  /* ear */
  .person_right .person__neck::after {
    top: -39px; left: 89px;
    width: 48px; height: 48px;
    background:
        /* pinna */
        conic-gradient(from 180deg, var(--skin) 90deg, transparent 0),
        radial-gradient(transparent 8px, var(--dark-skin) 9px, var(--dark-skin) 10px, transparent 11px),
        /* skin */
        linear-gradient(90deg, var(--skin) 59%, var(--light-skin) calc(59% + 1px));
    border-radius: 50%;
    rotate: 30deg;
  }

  /* head */
  .person_right .person__head {
    top: -114px; left: -17px;
    width: 150px; height: 106px;
    /* shadow */
    background: radial-gradient(circle, var(--skin) 70%, transparent 0) -11px 59px / 160px 160px no-repeat, var(--light-skin);
    border-radius: 60% 40% 20% 20% / 70% 70% 20% 20%;
    transform-origin: bottom right;
    animation: rightPersonHead var(--animation-fast);
  }
  @keyframes rightPersonHead {
    0%, 100% {
      rotate: -15deg;
      translate: -3px 3px;
    }
    50% {
      rotate: -20deg;
      translate: 0 0;
    }
  }

  /* hair */
  .person_right .person__head::before {
    top: 42px; left: 82px;
    width: 76px; height: 71px;
    background:
        /* line */
        linear-gradient(93deg, transparent 63px, var(--blue) 64px, var(--blue) 65px, transparent 66px) 0 0 / 100% 57px no-repeat,
        /* hair */
        conic-gradient(from 59deg at 2% 60%, var(--dark-blue) 63deg, transparent 64deg);
    border-radius: 0 0 17px 0;
    transform-origin: top left;
    rotate: -15deg;
  }

  /* smile */
  .person_right .person__head::after {
    top: 27px; left: 13px;
    width: 30px; height: 13px;
    border-radius: 0 0 60% 0 / 0 0 100% 0;
    border-color: var(--grey);
    border-width: 0 2px 2px 0;
    border-style: solid;
    transform-origin: top left;
    rotate: 45deg;
    animation: rightPersonSmile var(--animation-slow);
  }
  @keyframes rightPersonSmile {
    0%, 50%, 100% {
      border-radius: 0 0 60% 0 / 0 0 100% 0;
      scale: 1;
      translate: 0 0;
      rotate: 45deg;
    }
    55%, 95% {
      border-radius: 0 0 100% 0 / 0 0 100% 0;
      scale: 0.8;
      translate: -1px 8px;
      rotate: 35deg;
    }
  }

  /* brow */
  .person_right .person__face {
    top: 26px; left: 63px;
    width: 51px; height: 5px;
    background: var(--dark-blue);
    rotate: 45deg;
  }

  /* eye */
  .person_right .person__face::before {
    top: 11px; left: 0px;
    width: 25px; height: 12px;
    background: linear-gradient(90deg, var(--black) 50%, var(--white) 50%) 50% 0 / 200% 100%;
    border-radius: 0 0 99em 99em;
    animation: rightPersonEye var(--animation-slow);
  }
  @keyframes rightPersonEye {
    0%, 50%, 100% {
      background-position: 50% 0;
      border-radius: 0 0 99em 99em;
      scale: 1;
    }
    52%, 98% {
      background-position: 0 0;
      border-radius: 0;
      scale: 1 0.2;
    }
  }

  /* nose */
  .person_right .person__face::after {
    top: 16px; left: -34px;
    width: 24px; height: 36px;
    background: conic-gradient(from 170deg at 73% 0%, var(--dark-skin) 38deg, transparent 0);
    border-radius: 0 0 0 4px;
  }
</style>