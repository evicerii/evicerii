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
  const burger=document.getElementById('burger');

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

//Изменение слайда радиокнопкой
const radio = document.querySelectorAll('input[type="radio"]');

for (let i=0; i < radio.length; i++){
    radio[i].addEventListener('click', function(){
          for(let i=0; i<radio.length; i++){
            document.getElementsByClassName('slide')[i].classList.remove('activeSlide');
          }
           document.getElementsByClassName('slide')[i].classList.add('activeSlide');
    })
}


//Свап слайда стрелками

const leftArrow = document.getElementById('leftArrowCarousel');
const rightArrow = document.getElementById('rightArrowCarousel');
const slides = document.querySelectorAll('.slide');


leftArrow.addEventListener('click',(swapCarouselLeft));
leftArrow.addEventListener('click',(lazyload));

rightArrow.addEventListener('click',(swapCarouselRight));
rightArrow.addEventListener('click',(lazyload));

//Радио меняется соответственно номеру внутри функции
function swapCarouselLeft(){
  for (let i=0; i < slides.length; i++){
    if (document.getElementsByClassName('slide')[i].classList.contains('activeSlide')){
      document.getElementsByClassName('slide')[i].classList.remove('activeSlide');
      
      if(i == 0){
        i = slides.length;
      }

      document.getElementsByClassName('slide')[--i].classList.add('activeSlide');

      //смена активной радио
      radio[i].checked = true;
      break;
    }
  }
}
function swapCarouselRight(){
  for (let i=0; i < slides.length; i++){
    if (document.getElementsByClassName('slide')[i].classList.contains('activeSlide')){
      document.getElementsByClassName('slide')[i].classList.remove('activeSlide');
      
      if(++i == slides.length){
        i=0;
      }

      document.getElementsByClassName('slide')[i].classList.add('activeSlide');
      
        //смена активной радио
      radio[i].checked = true;
      break;
    }
  }
}

//Подгрузка галереи
const lazyImages = document.querySelectorAll('img[data-src]');
const carouselLength = lazyImages.length;
function lazyload(){
  if(document.querySelectorAll('img[data-src]').length > 0)
  {
    lazyGalleryImageLoading();
  }
}

function lazyGalleryImageLoading(){
  for(let i=0; i <= carouselLength; i++)
    if (document.getElementsByClassName('slide')[i].classList.contains('activeSlide')){
      i--;
      if(i < 0)
      i = 0;
      if(lazyImages[i].dataset.src){  
        lazyImages[i].src = lazyImages[i].dataset.src;
        lazyImages[i].removeAttribute('data-src');
      }
      i++;
    }
}

//подгрузка при клике на радио
  for(let i=0; i <= carouselLength; i++){
    radio[i].addEventListener('click', function(){
    if (radio[i].checked == true ){
      i--;
      lazyImages[i].src = lazyImages[i].dataset.src;
      lazyImages[i].removeAttribute('data-src');
    }
  });
}