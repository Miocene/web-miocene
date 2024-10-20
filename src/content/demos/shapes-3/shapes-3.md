---
pubDate: 2023-06-18
title: CSS Shapes, pt. 3
cover: ./shapes-3.png
youtubeLink: https://youtu.be/Q8HZqdrhlVc
codepenLink: https://codepen.io/miocene/pen/ExdpYOj
caption: 'based on illustrations by <a class="link" href="https://dribbble.com/gigantic_click">Mark Rise</a>'
tags: ['Demo']
---

<div class="person">
  <div class="person__neck">
    <div class="person__head">
      <div class="person__face"></div>
    </div>
  </div>
</div>

<style>
  .demo {
    background-color: #f8e8d9;

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
    --light-red: #eab1ae;
  }

  .person, .person::before, .person::after, .person *, .person *::after, .person *::before {
    position: absolute;
    content: '';
  }



  /* PERSON */
  /* coat */
  .person {
    top: 50%; left: 50%;
    width: 225px; height: 70px;
    background: 
      /* line */
      linear-gradient(125deg, transparent 120px, var(--light-blue) 121px, var(--light-blue) 122px, transparent 123px) 0 21px no-repeat,
      /* fabric */
      conic-gradient(from 141deg at 75% 0%, var(--blue) 107deg, transparent 0);
    translate: -85px 60px;
  }

  /* collar */
  .person::before {
    top: 68px; left: -1px;
    width: 198px; height: 51px;
    background: linear-gradient(196deg, var(--white) 54%, transparent 0);
    border-radius: 0 20px 30px 0;
    transform-origin: top left;
    rotate: -38deg;
    z-index: 1;
  }

  /* line */
  .person::after {
    top: 42px; left: 46px;
    width: 150px; height: 2px;
    background: var(--light-red);
    transform-origin: top left;
    rotate: -28deg;
    z-index: 1;
  }

  /* neck */
  .person__neck {
    top: -94px; right: 126px;
    width: 104px; height: 90px;
    background: 
      /* line */
      linear-gradient(120deg, transparent calc(55% - 1px), var(--dark-skin) 55%, var(--dark-skin) calc(55% + 1px), transparent calc(55% + 2px)) 0 9px / 100% 63px no-repeat,
      /* skin */
      conic-gradient(from 20deg at 13% 58%, var(--dark-skin) 8%, var(--skin) 8% 50%, transparent 0);
    transform-origin: top right;
    rotate: -30deg;
  }

  /* hair */
  .person__neck::before {
    top: -177px; left: 38px;
    width: 110px; aspect-ratio: 1/1;
    background: var(--dark-blue);
    border-radius: 50%;
    box-shadow: inset 5px 40px 0 -10px var(--blue);
  }

  /* ear */
  .person__neck::after {
    top: -40px; left: 90px;
    width: 50px; aspect-ratio: 1/1;
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
  .person__head {
    top: -75px; left: -37px;
    width: 150px; height: 106px;
    background: radial-gradient(circle, var(--skin) 70%, transparent 0) -11px 59px / 160px 160px no-repeat, var(--light-skin);
    border-radius: 60% 40% 20% 20% / 70% 70% 20% 20%;
    transform-origin: top left;
    rotate: -15deg;
  }

  /* hair */
  .person__head::before {
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
  .person__head::after {
    top: 27px; left: 13px;
    width: 30px; height: 13px;
    border-radius: 0 0 60% 0 / 0 0 100% 0;
    border-color: var(--grey);
    border-width: 0 2px 2px 0;
    border-style: solid;
    transform-origin: top left;
    rotate: 45deg;
  }

  /* brow */
  .person__face {
    top: 26px; left: 63px;
    width: 51px; height: 5px;
    background: var(--dark-blue);
    rotate: 45deg;
  }

  /* eye */
  .person__face::before {
    top: 11px; left: 0;
    width: 25px; height: 12px;
    background: linear-gradient(90deg, var(--black) 50%, var(--white) 50%);
    border-radius: 0 0 99em 99em;
  }

  /* nose */
  .person__face::after {
    top: 16px; left: -34px;
    width: 24px; height: 36px;
    background: conic-gradient(from 170deg at 73% 0%, var(--dark-skin) 40deg, transparent 0);
    border-radius: 0 0 0 4px;
  }

</style>