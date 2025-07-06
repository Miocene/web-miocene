<div class="scene">
  <div class="mushroom">
    <div class="mushroom__arm-r">
      <div class="bird"></div>
    </div>
    <div class="mushroom__arm-l"></div>
    <div class="mushroom__leg"></div>
    <div class="mushroom__leg mushroom__leg-right"></div>
    <div class="mushroom__hat"></div>
  </div>
</div>

<style>
  .demo {
    background: #fff;
  }

  .scene, .scene *, .scene *::before, .scene *::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
  }

  .scene {
    --red: #ef5945;
    --blue: #51bdc4;
    --skin: #fffac7;
    --yellow: #ece74f;
    --green: #819e49;
    --black: #2e0943;

    top: 50%; left: 50%;
    width: 340px; height: 460px;
    /* background picture */
    background: 
      linear-gradient(var(--black)) 250px 400px / 32px 4px, 
      linear-gradient(var(--black)) 110px 440px / 145px 4px, 
      linear-gradient(var(--black)) 0 423px / 30px 4px, 
      linear-gradient(0deg, var(--green) 80px, var(--black) 0 84px, var(--blue) 0);
    background-repeat: no-repeat;
    border-radius: 4px;
    border: 4px solid var(--black);
    translate: -50% -50%;
  }
  /* body */
  .mushroom {
    top: 85px; left: 34px;
    width: 250px; height: 160px;
    background: var(--skin);
    border-radius: 40% 60% 40% 60% / 65% 65% 35% 35%;
    border: 4px solid var(--black);
  }
  /* smile */
  .mushroom::before {
    top: 81px; left: 119px;
    width: 52px; height: 33px;
    background: 
      radial-gradient(farthest-side at 0% 50%, transparent calc(100% - 4px), var(--black) 0 100%, transparent 0) 6px 0px / 14px 28px, 
      radial-gradient(farthest-side at 0% 50%, transparent calc(100% - 4px), var(--black) 0 100%, transparent 0) 16px 9px / 14px 28px, 
      radial-gradient(farthest-side at 0% 50%, transparent calc(100% - 4px), var(--black) 0 100%, transparent 0) 27px 7px / 14px 28px, 
      radial-gradient(farthest-side at 50% 0%, var(--skin) calc(100% - 4px), var(--black) 0 100%, white 0) 15px 7px / 14px 7px, 
      radial-gradient(farthest-side at 50% 100%, white calc(100% - 4px), var(--black) 0 100%, var(--skin) 0) -4px 0px / 24px 12px, 
      radial-gradient(farthest-side at 50% 100%, white calc(100% - 4px), var(--black) 0 100%, var(--skin) 0) 24px 0px / 24px 12px, 
      linear-gradient(transparent 12px, white 0);
    background-repeat: no-repeat;
    border-radius: 12px 12px 50% 50% / 12px 12px 65% 65%;
    border: 4px solid var(--black);
    border-top: 0;
  }
  /* eye */
  .mushroom::after {
    top: 35px; left: 20px;
    width: 96px; height: 96px;
    background: var(--black);
    border-radius: 50%;
    border: 4px solid var(--black);
    box-shadow: inset 0 0 0 6px white;
    -webkit-box-reflect: right 60px;
  }
  .mushroom__arm-r {
    top: 137px; left: 203px;
    width: 18px; height: 49px;
    /* shadow */
    background: radial-gradient(circle farthest-side at 50% 100%, transparent 100%, var(--black) 0) 0 0 / 100% 5px no-repeat, var(--skin);
    border-radius: 15px 0 10px 10px;
    border: 4px solid var(--black);
  }
  .mushroom__arm-r::before {
    top: calc(100% - 14px); left: -4px;
    width: 18px; height: 103px;
    /* shadow */
    background: radial-gradient(circle farthest-side at 50% 100%, transparent 100%, var(--black) 0) 0 0 / 100% 5px no-repeat, var(--skin);
    border-radius: 10px 10px 16px 2px;
    border: 4px solid var(--black);
    transform-origin: 9px 9px;
    rotate: -113deg;
  }
  .mushroom__arm-l {
    top: 93px; left: -4px;
    width: 17px; height: 154px;
    background: var(--skin);
    border-radius: 0 0 13px 4px;
    border: 4px solid var(--black);
    border-top: 0;
  }
  .mushroom__leg {
    top: 151px; left: 83px;
    width: 22px; height: 204px;
    background: 
      radial-gradient(circle farthest-side at 50% 100%, transparent 100%, var(--black) 0) 0 0 / 100% 7px no-repeat, 
      linear-gradient(0deg, var(--black) 37px, white 0 45px, var(--black) 0 47px, white 0 49px, var(--black) 0 51px, white 0 53px, var(--black) 0 55px, transparent 0), var(--skin);
    border: 4px solid var(--black);
    border-radius: 0 0px 0 10px;
  }
  .mushroom__leg::before {
    bottom: -4px; left: -4px;
    width: 50px; height: 29px;
    background: 
      radial-gradient(farthest-side, white 100%, transparent 0) 10px 6px / 34px 34px no-repeat, 
      linear-gradient(var(--black) 17px, white 0);
    border-radius: 0 30px 10px 10px / 0 20px 9px 10px;
    border: 4px solid var(--black);
  }
  .mushroom__leg-right {
    left: 142px; top: 152px;
    height: 203px;
  }
  .mushroom__hat {
    top: -133px; left: -66px;
    width: 373px; height: 165px;
    background: 
      radial-gradient(farthest-side, white calc(100% - 4px), var(--black) calc(100% - 4px) 100%, transparent 0) 0px 30px / 120px 95px, 
      radial-gradient(farthest-side, white calc(100% - 4px), var(--black) calc(100% - 4px) 100%, transparent 0) 160px 15px / 70px 40px, 
      radial-gradient(farthest-side, white calc(100% - 4px), var(--black) calc(100% - 4px) 100%, transparent 0) 200px 60px / 180px 100px, 
      var(--red);
    background-repeat: no-repeat;
    border-radius: 50% / 77% 77% 23% 23%;
    border: 4px solid var(--black);
  }
  .bird {
    top: -46px; left: 67px;
    width: 38px; height: 39px;
    background: 
      conic-gradient(from 134deg, var(--black) 90deg, transparent 0) 3px 4px / 20px 10px, 
      radial-gradient(farthest-side at 50% 0%, transparent calc(100% - 2px), var(--black) 0 100%, transparent) 19px 19px / 16px 8px, 
      radial-gradient(farthest-side, var(--black) 100%, transparent) 19px 8px / 3px 3px, 
      radial-gradient(farthest-side, var(--black) 100%, transparent) 6px 8px / 3px 3px, var(--yellow);
    background-repeat: no-repeat;
    border-radius: 50% / 70% 70% 30% 30%;
    border: 4px solid var(--black);
  }
  .bird::before {
    top: 33px; left: 9px;
    width: 2px; height: 13px;
    background: var(--black);
    border-radius: 1px;
    box-shadow: 5px 0 var(--black);
  }
</style>