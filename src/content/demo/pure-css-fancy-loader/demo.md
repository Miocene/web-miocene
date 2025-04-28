<div class="loader rainbow">
  <div class="circle" style="--i: 1"></div>
  <div class="circle" style="--i: 2"></div>
  <div class="circle" style="--i: 3"></div>
  <div class="circle" style="--i: 4"></div>
  <div class="circle" style="--i: 5"></div>
  <div class="circle" style="--i: 6"></div>
  <div class="circle" style="--i: 7"></div>
  <div class="circle" style="--i: 8"></div>
  <div class="circle" style="--i: 9"></div>
  <div class="circle" style="--i: 10"></div>
  <div class="circle" style="--i: 11"></div>
  <div class="circle" style="--i: 12"></div>
  <div class="circle" style="--i: 13"></div>
  <div class="circle" style="--i: 14"></div>
  <div class="circle" style="--i: 15"></div>
  <div class="circle" style="--i: 16"></div>
  <div class="circle" style="--i: 17"></div>
  <div class="circle" style="--i: 18"></div>
  <div class="circle" style="--i: 19"></div>
  <div class="circle" style="--i: 20"></div>
  <div class="circle" style="--i: 21"></div>
  <div class="circle" style="--i: 22"></div>
  <div class="circle" style="--i: 23"></div>
  <div class="circle" style="--i: 24"></div>
  <div class="circle" style="--i: 25"></div>
  <div class="circle" style="--i: 26"></div>
  <div class="circle" style="--i: 27"></div>
  <div class="circle" style="--i: 28"></div>
  <div class="circle" style="--i: 29"></div>
  <div class="circle" style="--i: 30"></div>
  <div class="circle" style="--i: 31"></div>
  <div class="circle" style="--i: 32"></div>
  <div class="circle" style="--i: 33"></div>
  <div class="circle" style="--i: 34"></div>
  <div class="circle" style="--i: 35"></div>
  <div class="circle" style="--i: 36"></div>
  <div class="circle" style="--i: 37"></div>
  <div class="circle" style="--i: 38"></div>
  <div class="circle" style="--i: 39"></div>
  <div class="circle" style="--i: 40"></div>
  <div class="circle" style="--i: 41"></div>
  <div class="circle" style="--i: 42"></div>
  <div class="circle" style="--i: 43"></div>
  <div class="circle" style="--i: 44"></div>
  <div class="circle" style="--i: 45"></div>
  <div class="circle" style="--i: 46"></div>
  <div class="circle" style="--i: 47"></div>
  <div class="circle" style="--i: 48"></div>
  <div class="circle" style="--i: 49"></div>
  <div class="circle" style="--i: 50"></div>
  <div class="circle" style="--i: 51"></div>
  <div class="circle" style="--i: 52"></div>
  <div class="circle" style="--i: 53"></div>
  <div class="circle" style="--i: 54"></div>
  <div class="circle" style="--i: 55"></div>
  <div class="circle" style="--i: 56"></div>
  <div class="circle" style="--i: 57"></div>
  <div class="circle" style="--i: 58"></div>
  <div class="circle" style="--i: 59"></div>
  <div class="circle" style="--i: 60"></div>
  <div class="circle" style="--i: 61"></div>
  <div class="circle" style="--i: 62"></div>
  <div class="circle" style="--i: 63"></div>
  <div class="circle" style="--i: 64"></div>
  <div class="circle" style="--i: 65"></div>
  <div class="circle" style="--i: 66"></div>
  <div class="circle" style="--i: 67"></div>
  <div class="circle" style="--i: 68"></div>
  <div class="circle" style="--i: 69"></div>
  <div class="circle" style="--i: 70"></div>
  <div class="circle" style="--i: 71"></div>
  <div class="circle" style="--i: 72"></div>
  <div class="circle" style="--i: 73"></div>
  <div class="circle" style="--i: 74"></div>
  <div class="circle" style="--i: 75"></div>
  <div class="circle" style="--i: 76"></div>
  <div class="circle" style="--i: 77"></div>
  <div class="circle" style="--i: 78"></div>
  <div class="circle" style="--i: 79"></div>
  <div class="circle" style="--i: 80"></div>
  <div class="circle" style="--i: 81"></div>
  <div class="circle" style="--i: 82"></div>
  <div class="circle" style="--i: 83"></div>
  <div class="circle" style="--i: 84"></div>
  <div class="circle" style="--i: 85"></div>
  <div class="circle" style="--i: 86"></div>
  <div class="circle" style="--i: 87"></div>
  <div class="circle" style="--i: 88"></div>
  <div class="circle" style="--i: 89"></div>
  <div class="circle" style="--i: 90"></div>
  <div class="circle" style="--i: 91"></div>
  <div class="circle" style="--i: 92"></div>
  <div class="circle" style="--i: 93"></div>
  <div class="circle" style="--i: 94"></div>
  <div class="circle" style="--i: 95"></div>
  <div class="circle" style="--i: 96"></div>
  <div class="circle" style="--i: 97"></div>
  <div class="circle" style="--i: 98"></div>
  <div class="circle" style="--i: 99"></div>
  <div class="circle" style="--i: 100"></div>
</div>

<style>
  .demo {
    background: #333333;
    
    --from: 80px;
    --to: 200px;
    --size: 32px;
    --time: 7s;
    --count: 51; /* up to 100 */
    --turns: 6;
  }

  .loader {
    position: absolute;
    top: 50%; left: 50%;
  }

  .circle {
    position: absolute;
    
    --delay: calc(var(--time) / var(--count) * -1 * var(--i));
    rotate: calc(var(--turns) * 1turn / var(--count) * var(--i));
    
    animation: circle var(--time) var(--delay) ease-in-out infinite;
  }
  .circle::before {
    content: '';
    display: block;
    width: var(--size); aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: white;
    transform-origin: center center;

    animation: circleSize var(--time) var(--delay) ease-in-out infinite;
  }

  /* rainbow */
  .rainbow .circle::before {
    background-color: hsl(calc(1turn / ( var(--count) / var(--turns) ) * var(--i)) 100% 70%);
  }

  /* animations */
  @keyframes circle {
    from { transform: translate(0, var(--from)); }
    to { transform: translate(0, var(--to)); }
  }
  @keyframes circleSize {
    0%, 100% { transform: scale(0); }
    25%, 50% { transform: scale(1); }
  }
</style>