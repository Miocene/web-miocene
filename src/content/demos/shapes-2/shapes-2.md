---
pubDate: 2023-06-04
title: CSS Shapes, pt. 2
cover: ./shapes-2.png
youtubeLink: https://youtu.be/scJXCQf3ITY
codepenLink: https://codepen.io/miocene/pen/PoyBYyQ
caption: 'based on illustrations by <a class="link" href="https://dribbble.com/gigantic_click">Mark Rise</a>'
tags: ['Demo']
---

<div class="person">
  <div class="person__head">
    <div class="person__beard"></div>
    <div class="person__face"></div>
  </div>
</div>

<style>
  .demo {
    --black: #00202a;
    --grey: #003444;
    --light-grey: #547d8f;
    --white: #f8f8f8;
    --skin: #f77676;
    --dark-skin: #cc3c40;
    --light-skin: #f3af9f;
    --red: #f44d5f;
    --dark-red: #cc3040;
    --light-red: #eab1ae;
    background-color: #fcd2c7;
  }

  .person, .person::before, .person::after, .person *, .person *::after, .person *::before {
    position: absolute;
    content: '';
  }



  /* PERSON */
  /* neck */
  .person {
    top: 50%; left: 50%;
    width: 88px; height: 276px;
    background: linear-gradient(86deg, var(--light-skin) 90%, transparent 91%);
    translate: -42px -100px;
  }

  /* body */
  .person::before {
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
  .person__head {
    top: -62px; left: 24px;
    width: 74px; height: 74px;
    background: var(--light-skin);
    border-radius: 50%;
  }

  /* ear */
  .person__head::before {
    top: 37px; left: -78px;
    width: 20px; height: 21px;
    background: var(--dark-skin);
    border-radius: 13px 0 0 0;
    transform-origin: top left;
    transform: skewX(41deg);
  }

  /* brows */
  .person__head::after {
    top: 24px; left: -64px;
    width: 87px; height: 13px;
    background:
        /* light lines */
        linear-gradient(0deg, var(--light-grey) 2px, transparent 3px) 0 0 / 28px 7px no-repeat,
        linear-gradient(0deg, var(--light-grey) 2px, transparent 3px) 46px 0 / 41px 7px no-repeat,
        /* brows */
        linear-gradient(100deg, var(--grey) 31px, transparent 3px) 5px 0 / 32px 100% no-repeat,
        linear-gradient(var(--grey) 100%, transparent 3px) 50px 0 / 32px 100% no-repeat;
  }

  /* beard */
  .person__beard {
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
    rotate: 7deg;
  }

  .person__beard::before {
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
    rotate: -14deg;
    border-radius: 0 0 5px 6px;
    -webkit-mask-image: conic-gradient(from 83deg at 14% 15%, black 34%, transparent 0);
  }

  /* beard lines */
  .person__beard::after {
    top: 0px; left: 0px;
    width: 100%; height: 162px;
    background: 
        linear-gradient(79deg, transparent 111px, var(--light-grey) 111px, var(--light-grey) 113px, transparent 113px) 0px 53px / 100% 71px no-repeat, 
        linear-gradient(87deg, transparent 82px, var(--light-grey) 82px, var(--light-grey) 84px, transparent 84px) 0px 88px / 100% 74px no-repeat, 
        linear-gradient(89deg, transparent 62px, var(--light-grey) 62px, var(--light-grey) 64px, transparent 64px) 0px 70px / 100% 24px no-repeat, 
        linear-gradient(95deg, transparent 48px, var(--light-grey) 48px, var(--light-grey) 50px, transparent 50px) 0px 82px / 100% 54px no-repeat, 
        linear-gradient(97deg, transparent 26px, var(--light-grey) 26px, var(--light-grey) 28px, transparent 28px) 0px 64px / 100% 96px no-repeat;
  }

  .person__face {
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
  .person__face::before {
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
  .person__face::after {
    top: 27px; left: -38px;
    width: 8px; height: 8px;
    background: var(--grey);
    border-radius: 50%;
    box-shadow: 46px 0 var(--grey);
    rotate: -23deg;
  }
</style>