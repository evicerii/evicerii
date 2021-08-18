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



//скролл к якорю
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


  //бургер меню
  let burger = document.getElementById('burger');
  burger.addEventListener('click', function(){
    if(document.getElementById('screen').style.display=='' || document.getElementById('screen').style.display=='none')
    {
    document.getElementById('screen').style.display = 'block';
    document.getElementById('main_nav').style.display = 'flex';
    
    burger.classList.add('red');
    burger.classList.remove('burger');
    } else {
      
      burger.classList.add('burger');
      burger.classList.remove('red');

      document.getElementById('screen').style.display='none';
      document.getElementById('main_nav').style.display='none';
      }
  })

  let navLinks = document.getElementById('main_nav').querySelectorAll("a");


for (let navLink of navLinks){
  navLink.addEventListener('click',function(){
    burger.classList.add('burger');
    burger.classList.remove('red');

    document.getElementById('screen').style.display='none';
    document.getElementById('main_nav').style.display='none';
  });
} 

