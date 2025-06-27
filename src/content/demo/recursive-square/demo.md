<div class="wrapper">
  <div class="square" style="--area: a; --i: 0"></div>
  <div class="square" style="--area: b; --i: 1"></div>
  <div class="square" style="--area: c; --i: 2"></div>
  <div class="square" style="--area: d; --i: 3"></div>
  <div class="square" style="--area: e; --i: 4"></div>
  <div class="square" style="--area: f; --i: 5"></div>
  <div class="square" style="--area: g; --i: 6"></div>
  <div class="square" style="--area: h; --i: 7"></div>
  <div class="square" style="--area: i; --i: 8"></div>
  <div class="square" style="--area: j; --i: 9"></div>
  <div class="square" style="--area: k; --i: 10"></div>
  <div class="square" style="--area: l; --i: 11"></div>
  <div class="square" style="--area: m; --i: 12"></div>
  <div class="square" style="--area: n; --i: 13"></div>
  <div class="square" style="--area: o; --i: 14"></div>
  <div class="square" style="--area: p; --i: 15"></div>
</div>

<style>
  .demo {
    background: #fff;
  }

  .wrapper {
    position: absolute;
    top: 50%; left: 50%;
    translate: -50% -50%;
    width: min(10vw, 10vh);
    height: min(10vw, 10vh);
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(5, 20%);
    grid-template-areas: 
      "o p a b c"
      "n . . . d"
      "m . . . e"
      "l . . . f"
      "k j i h g";
    transform-origin: top center;
    animation: scale 6s linear infinite;
  }

  @keyframes scale {
    from { scale: 5; }
    to { scale: 1; }
  }

  .square {
    width: 100%; height: 100%;
    grid-area: var(--area);
    box-shadow: inset 0 0 0 min(.4vw, .4vh);
    animation-name: border, opacity;
    animation-timing-function: linear;
    animation-duration: 6s;
    animation-iteration-count: infinite;
  }

  @keyframes border {
    to { box-shadow: inset 0 0 0 min(1vw, 1vh); }
  }

  @keyframes opacity {
    0% { opacity: calc(1 - var(--i)); }
    6.7% { opacity: calc(2 - var(--i)); }
    13.4% { opacity: calc(3 - var(--i)); }
    20.1% { opacity: calc(4 - var(--i)); }
    26.8% { opacity: calc(5 - var(--i)); }
    33.5% { opacity: calc(6 - var(--i)); }
    40.2% { opacity: calc(7 - var(--i)); }
    46.9% { opacity: calc(8 - var(--i)); }
    53.6% { opacity: calc(9 - var(--i)); }
    60.3% { opacity: calc(10 - var(--i)); }
    67% { opacity: calc(11 - var(--i)); }
    73.7% { opacity: calc(12 - var(--i)); }
    80.4% { opacity: calc(13 - var(--i)); }
    87.1% { opacity: calc(14 - var(--i)); }
    93.8% { opacity: calc(15 - var(--i)); }
    100.5% { opacity: calc(16 - var(--i)); }
  }
</style>