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
    if (i<30){
      createBubbles()
    }
  },500)
}

createBubbles();

function createBigBubble(){
  let a = Math.trunc(Math.random() * 100);;
  let div = document.createElement('div');
  div.classList.add('bigBubble');
  document.getElementById('bubbles').append(div);
  div.style.marginLeft = a + '%';
}
function createMidBubble(){
  let a = Math.trunc(Math.random() * 100);;
  let div = document.createElement('div');
  div.classList.add('midBubble');
  document.getElementById('bubbles').append(div);
  div.style.marginLeft = a + '%';
}
function createLowBubble(){
  let a = Math.trunc(Math.random() * 100);;
  let div = document.createElement('div');
  div.classList.add('lowBubble');
  document.getElementById('bubbles').append(div);
  div.style.marginLeft = a + '%';
}
