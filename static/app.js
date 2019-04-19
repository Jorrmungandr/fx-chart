//the canvas in html
const canvas = document.querySelector('#chartContainer');
const context = canvas.getContext('2d');

//The color(If it's going up or down)
let color = '';
//Initial position
let position = 300;
//The stats of the previous candles
let previousHeight = 0;
let previousReverse = 0;
let previousPosition = 0;
//The width of the candles
let width = 10;

context.fillStyle = "#FF0000";

//This is where we create the graphs
const createGraph = () => {
  for (let i = 10; i < 3000; i += 12) {
    //The "modulus" of the candle to be created
    let height = Math.floor(Math.random() * 30 + 10);
    //If it's up or down
    let reverse = Math.floor(Math.random() * 2);
    //The "Upper Stick" in the candles
    let higherValue = Math.floor(Math.random() * 30);
    //The "Bottom Stick" in the candles
    let lowerValue = Math.floor(Math.random() * 30);

    //Changing the colors 
    color = reverse ? 'green' : 'red';

    //This is where de "candles" are distributed acordingly to it's type or condition
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
    //The midsection is the candle's width half
    let midsection = (width) / 2

    //The stroke color is white
    context.strokeStyle = "#000000";
    //The color of the candle (red or green)
    context.fillStyle = color;
    //  Actually making the candle, where i and position are defined in the previous section,
    //being summed up every time the program makes a new candle, so every candle is alongside
    //each other
    context.fillRect(i, position, width, height);
    //Making the sticks
    //Upper Stick
    context.moveTo(i + midsection, position - higherValue);
    context.lineTo(i + midsection, position);
    //Bottom Stick
    context.moveTo(i + midsection, position + height)
    context.lineTo(i + midsection, position + height + lowerValue)

    previousHeight = height;
    previousReverse = reverse;
    previousPosition = position;
  }
  //Finally making the graph
  context.stroke();

}

//This is the eventListener to the "New Graph" Button
document.querySelector('#createGraph').addEventListener('click', createGraph)