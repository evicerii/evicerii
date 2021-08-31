//создание пузырьков
const bigBubble = document.querySelector('.bigBubble');
const midBubble = document.querySelector('.midBubble');
const lowBubble = document.querySelector('.lowBubble');

let i=0;

function createBubbles(){
  setTimeout(function () {
    createBigBubble();
    createMidBubble();
    createLowBubble();
    i++;
    if (i<20){
      createBubbles()
    }
  },300)
}

createBubbles();

function createBigBubble(){
  let a = Math.trunc(Math.random() * 100);;
  let div = document.createElement('div');
  div.classList.add('bigBubble');
  document.getElementById('bubbles').append(div);
  div.style.marginLeft = a + '%';
  console.log(div.classList);
}
function createMidBubble(){
  let a = Math.trunc(Math.random() * 100);;
  let div = document.createElement('div');
  div.classList.add('midBubble');
  document.getElementById('bubbles').append(div);
  div.style.marginLeft = a + '%';
  console.log(div.classList);
}
function createLowBubble(){
  let a = Math.trunc(Math.random() * 100);;
  let div = document.createElement('div');
  div.classList.add('lowBubble');
  document.getElementById('bubbles').append(div);
  div.style.marginLeft = a + '%';
  console.log(div.classList);
}
