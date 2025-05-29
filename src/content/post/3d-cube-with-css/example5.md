<div class="example example9" style="--perspective: 500px">
  <div class="example__view">
    <div class="block"></div>
    <div class="controls">
      <label>
        perspective
        <input class="range" type="range" id="perspective" name="perspective" min="150" max="1000"
          oninput="updatePerspective(this.value)" />
      </label>
    </div>
  </div>
</div>

<style>
  .example9 .example__view {
    height: 300px;
    transform-style: preserve-3d;
    perspective: var(--perspective);
  }
  .example9 .block {
    position: absolute;
    top: 50%; left: 50%;
    width: 200px; aspect-ratio: 1/1;
    border-radius: 4px;
    background: light-dark(#333, #fff);
    rotate: x 80deg;
    translate: -50% -50%;
  }
</style>

<script>
  const perspectiveExample = document.querySelector('.example9')
  function updatePerspective(value) {
    perspectiveExample.setAttribute('style',`--perspective: ${value}px`);
  }
</script>