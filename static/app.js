const createChart = () => {

  let guide = 400;
  let left = 0;
  let color = '';
  let newHeight = 0;
  let newColor = '';
  let first = false;

  for (let i = 0; i < 100; i++) {
    let randomHeight = Math.floor(Math.random() * 40 + 10);
    let reverse = Math.floor(Math.random() * 2);

    if (newColor !== color) {first = true} else first = false

    if (reverse) {
      color = 'green';
      guide -= (randomHeight + newHeight);
    } else {
      color = 'red';
    }

    console.log(guide);

    document.querySelector('#chart-container').innerHTML += `
      <div class="candle" 
      onclick="alert('This is a ' + this.style.backgroundColor + ' candle.')" 
      style="background-color:${color};
      top: ${guide}px;
      height:${randomHeight}px; 
      left:${left}px">
    `;

    left += 11;
    newHeight = randomHeight;
    newColor = color;
  }
}

document.querySelector('#new-chart').addEventListener('click', createChart);