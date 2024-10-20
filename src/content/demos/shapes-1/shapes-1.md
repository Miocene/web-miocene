---
pubDate: 2023-05-21
title: CSS Shapes, pt. 1
cover: ./shapes-1.png
youtubeLink: https://www.youtube.com/watch?v=LKwbGLv1Re4
codepenLink: https://codepen.io/miocene/pen/zYmLOJY
caption: 'based on illustrations by <a class="link" href="https://dribbble.com/gigantic_click">Mark Rise</a>'
tags: ['Demo']
---

<div class="person">
  <div class="person__head">
    <div class="person__face"></div>
  </div>
</div>

<style>
  .demo {
    background-color: #fcf8db;
    
    --black: #00202a;
    --white: #f8f8f8;
    --blue: #2348cd;
    --skin: #f77676;
    --dark-skin: #cc3c40;
    --light-skin: #f3af9f;
    --yellow: #f6d359;
    --dark-yellow: #e9a964;
  }

  .person, .person::before, .person::after, .person *, .person *::after, .person *::before {
    position: absolute;
    content: '';
  }



  /* PERSON */
  /* body */
  .person {
    top: 50%; left: 50%;
    width: 200px; height: 100px;
    background: 
        /* collarbone */
        linear-gradient(var(--skin), var(--skin)) 45px 35px / 95px 2px no-repeat,
        /* skin */
        radial-gradient(var(--light-skin) 70%, transparent 0) 0 -50px / 100% 130% no-repeat;
    border-radius: 50%;
    translate: -90px 60px;
  }

  /* neck */
  .person::before {
    top: -90px; left: 60px;
    width: 80px; height: 100px;
    background: 
        linear-gradient(140deg, var(--skin) 50%, transparent calc(50% + 1px)),
        var(--light-skin);
    -webkit-mask-image: linear-gradient(80deg, black 80%, transparent calc(80% + 1px));
  }

  /* ear and hair */
  .person__head {
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
  }

  /* head */
  .person__head::before {
    top: -30px; left: 25px;
    width: 130px; aspect-ratio: 1/1;
    background: 
        /* hair */
        linear-gradient(-150deg, var(--yellow) 29%, transparent 0),
        /* nose */
        linear-gradient(100deg, var(--skin) 35%, transparent calc(35% + 1px)) 0 70px no-repeat,
        linear-gradient(100deg, var(--skin) 35%, transparent calc(35% + 1px)),
        /* skin */
        var(--light-skin);
    border-radius: 50%;
  }

  /* smile */
  .person__head::after {
    top: 45px; left: 40px;
    width: 60px; height: 23px;
    border-radius: 0 0 50% 50%;
    box-shadow: inset 0 -13px 0 -10px var(--dark-skin);
  }

  /* eyes */
  .person__face {
    top: 15px; left: 35px;
    width: 8px; aspect-ratio: 1/1;
    background: var(--black);
    border-radius: 50%;
    box-shadow: 65px 0 var(--black);
  }

  /* hair */
  .person__face::before {
    top: -85px; left: -20px;
    width: 330px; height: 120px;
    border-radius: 0 0 0 100%;
    box-shadow: inset 120px 0 0 -50px var(--yellow);
  }

  /* glasses */
  .person__face::after {
    top: -25px; left: -28px;
    width: 60px; aspect-ratio: 1/1;
    border: 2px solid var(--blue);
    border-radius: 50%;
    filter: drop-shadow(75px 0 var(--blue))
  }
</style>