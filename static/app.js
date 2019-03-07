const createChart = () => {
  
  let guide = 0;
  let left = 0;
  let color = '';
  
  for (let i = 0; i < 100; i++) {
    let randomHeight = Math.floor(Math.random() * 30);
    let reverse = Math.floor(Math.random() * 2);
    
    if (reverse) {
      color = 'green';
      guide -= randomHeight;
    } else {
      color = 'red';   
    }

    console.log(guide);

    document.querySelector('#chart-container').innerHTML += `
      <div class="candle" style="background-color:${color};
      top: ${guide}px;
      height:${randomHeight}px; 
      left:${left}px">
    `;

    left += 11;
  }
}

document.querySelector('#new-chart').addEventListener('click', createChart);