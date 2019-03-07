let canvas = document.querySelector('#chartContainer');
let context = canvas.getContext('2d');
let guide = 0;
let newHeight = 0;
let first = false;
let color = '';

context.fillStyle = "#FF0000";

const createGraph = () => {
  for (let i = 10; i < 800; i += 12) {
    let randomHeight = Math.floor(Math.random() * 30 + 10)
    let reverse = Math.floor(Math.random() * 2);

    // if (newColor !== color) {first = true} else first = false

    if (reverse) {
      color = 'green';
      guide -= randomHeight;
    } else {
      color = 'red';
    }
    
    context.fillStyle = color;
    context.fillRect( i , 20, 10, guide);

    newHeight = randomHeight;
  }
  context.stroke(); 

}

document.querySelector('#createGraph').addEventListener('click', createGraph)