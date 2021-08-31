//Плавность прокрутки
const anchors=document.querySelectorAll('a.menu')


for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const blockID = anchor.getAttribute('href')
    
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }

  //Бургер меню
{
  let burger=document.getElementById('burger');

 
  burger.addEventListener('click', swapMenuDisplayVisibility);
  for (let anchor of anchors){
    anchor.addEventListener('click', closeClickMenuLink);
  } 


  function swapMenuDisplayVisibility(){
    if(document.getElementById('screen').style.display ==''){
        document.getElementById('screen').style.display = 'block';
        document.getElementById('mainNav').style.display = 'block';
    
        burger.classList.add('red');
        burger.classList.remove('burger');

    } else {
        document.getElementById('screen').style.display='';
        document.getElementById('mainNav').style.display = 'none';

        burger.classList.add('burger');
        burger.classList.remove('red');
    }
  }


function closeClickMenuLink(){
    if(window.innerWidth<768){

    burger.classList.add('burger');
    burger.classList.remove('red');

    document.getElementById('screen').style.display = '';
    document.getElementById('mainNav').style.display = 'none';
    }
}
}