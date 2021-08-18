'use strict'

window.onload = function(){
    const parallax = document.querySelector('.parallax');

    if (parallax){
        const clouds = document.querySelector('.clouds');
        const mountains = document.querySelector('.mountains');
        const human = document.querySelector('.human');
        const content = document.querySelector('.parallax-container');

        //Коэффициенты
        const forClouds = 40;
        const forMountains = 20;
        const forHuman = 10;

        //скорость анимации
        const speed = 0.05;

        //переменные
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParallaxStyle(){
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX*speed);
            positionY = positionY + (distY*speed);

            //отправка стилей
            clouds.style.cssText = `transform:translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
            mountains.style.cssText = `transform:translate(${positionX / forMountains}%,${positionY / forMountains}%);`;
            human.style.cssText = `transform:translate(${positionX / forHuman}%,${positionY / forHuman}%);`;

            requestAnimationFrame(setMouseParallaxStyle);
        }
        setMouseParallaxStyle();

        parallax.addEventListener('mousemove',function(e){
            //Получение ширины и высоты блока
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            //Ноль по середине
            const coordX = e.pageX - parallaxWidth/2;
            const coordY = e.pageY - parallaxHeight/2;

            coordXprocent = coordX / parallaxWidth *100;
            coordYprocent = coordY / parallaxHeight *100;
        });
    }

}