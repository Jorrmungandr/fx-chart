const canvas = document.querySelector('#chartContainer');
const context = canvas.getContext('2d');

let color = '';
let position = 300;
let previousHeight = 0;
let previousReverse = 0;
let previousPosition = 0;
let width = 10;

context.fillStyle = "#FF0000";

const createGraph = () => {
  for (let i = 10; i < 3000; i += 12) {
    let height = Math.floor(Math.random() * 30 + 10);
    let reverse = Math.floor(Math.random() * 2);
    let higherValue = Math.floor(Math.random() * 30);
    let lowerValue = Math.floor(Math.random() * 30);

    color = reverse ? 'green' : 'red';

    //Four conditions (10,11,00,01)

    if (reverse) {
      if (!previousReverse) {
        position = previousPosition + (previousHeight - height);
      } else {
        position -= height;
      }
    } else if (previousReverse) {
      position = previousPosition;
    } else {
      position += previousHeight;
    }

    console.log(i);

    let midsection = (width) / 2

    context.strokeStyle = "#000000";
    context.fillStyle = color;
    context.fillRect(i, position, width, height);
    context.moveTo(i + midsection, position - higherValue);
    context.lineTo(i + midsection, position);
    context.moveTo(i + midsection, position + height)
    context.lineTo(i + midsection, position + height + lowerValue)

    previousHeight = height;
    previousReverse = reverse;
    previousPosition = position;
  }
  context.stroke();

}

document.querySelector('#createGraph').addEventListener('click', createGraph)