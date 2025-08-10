<div class="example-grid">
<div class="example example5 example5-1">
  <div class="example__view">
    <div class="part">
      <div class="joint">
        <div class="joint">
          <div class="joint"></div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="example example5 example5-2">
  <div class="example__view">
    <div class="part">
      <div class="joint">
        <div class="joint">
          <div class="joint">
            <div class="joint">
              <div class="joint">
                <div class="joint"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="example example5 example5-3">
  <div class="example__view">
    <div class="part">
      <div class="joint">
        <div class="joint">
          <div class="joint">
            <div class="joint">
              <div class="joint">
                <div class="joint">
                  <div class="joint">
                    <div class="joint">
                      <div class="joint">
                        <div class="joint">
                          <div class="joint">
                            <div class="joint">
                              <div class="joint">
                                <div class="joint"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<style>
  .example5 .example__view {
    aspect-ratio: 1;
  }
  .example5 .part {
    position: absolute;
    top: 20%; left: 50%;
    translate: -50% 0;
    box-shadow: inset 0 0 0 1px light-dark(#333, #fff);
    border-radius: 99em;
  }
  .example5-1 .part {
    width: 10%; aspect-ratio: 1 / 3;
  }
  .example5-2 .part {
    width: 8%; aspect-ratio: 1 / 2;
  }
  .example5-3 .part {
    width: 5%; aspect-ratio: 1 / 2;
  }
  .example5 .joint {
    position: absolute;
    width: 100%; height: 100%;
    box-shadow: inset 0 0 0 1px light-dark(#333, #fff);
    border-radius: 99em;
  }
  .example5-1 .joint {
    top: 66.6%;
    transform-origin: center 17%;
    animation: example51 2s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate-reverse;
  }
  @keyframes example51 {
    from { rotate: -45deg; }
    to { rotate: 45deg; }
  }
  .example5-2 .joint {
    top: 50%;
    transform-origin: center 25%;
    animation: example52 2s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate-reverse;
  }
  @keyframes example52 {
    from { rotate: -30deg; }
    to { rotate: 30deg; }
  }
  .example5-3 .joint {
    top: 50%;
    transform-origin: center 25%;
    animation: example53 2s cubic-bezier(0.46, 0.03, 0.52, 0.96) infinite alternate-reverse;
  }
  @keyframes example53 {
    from { rotate: -10deg; }
    to { rotate: 10deg; }
  }
  .example5 .joint::before {
    content: '';
    position: absolute;
    left: 50%;
    width: 4px; aspect-ratio: 1;
    background-color: #FF5E5B;
    border-radius: 50%;
    translate: -50% -50%;
  }
  .example5-1 .joint::before {
    top: 17%;
  }
  .example5-2 .joint::before {
    top: 25%;
  }
  .example5-3 .joint::before {
    top: 25%;
  }
</style>