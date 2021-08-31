'use string'
//свап слайдов
/*let radio = document.querySelectorAll('input[type="radio"]');

for (let i=0; i < radio.length; i++){
    radio[i].addEventListener('click', function(){
          for(let i=0; i<radio.length; i++){
            document.getElementsByClassName('slide')[i].style.display='none';
          }
           document.getElementsByClassName('slide')[i].style.display='block';
    })
}*/


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

          document.getElementsByClassName('logo-flex-cont')[0].style.display = 'none';
      
          burger.classList.add('red');
          burger.classList.remove('burger');
  
      } else {
          document.getElementById('screen').style.display='';
          document.getElementById('mainNav').style.display = 'none';

          document.getElementsByClassName('logo-flex-cont')[0].style.display = 'block';
  
          burger.classList.add('burger');
          burger.classList.remove('red');
      }
    }
  
  
  function closeClickMenuLink(){
      if(window.innerWidth<1001){
  
      burger.classList.add('burger');
      burger.classList.remove('red');
  
      document.getElementById('screen').style.display = '';
      document.getElementById('mainNav').style.display = 'none';
      }
    }
  }

