document.onmousedown = function(event){
    let liELement = event.target.closest('.sort');
    if (!liELement) return;

    //базовая позиция под указателем
    let shiftX= event.clientX - liELement.getBoundingClientRect().left + 10;
    let shiftY= event.clientY - liELement.getBoundingClientRect().top + 10;

    //исключение привязки к блоку
    liELement.style.position = 'absolute';
    liELement.style.zIndex = 1000;
    document.body.append(liELement);

    //проверка старт. подэлемента
    liELement.style.display = 'none';
    let startElemBelow = document.elementFromPoint(event.clientX, event.clientY);
    liELement.style.display = 'block';

    let startArea = startElemBelow.closest('.area');

    function moveAt(pageX, pageY) {
        liELement.style.left = pageX - shiftX + 'px';
        liELement.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event){
        moveAt(event.pageX, event.pageY)
    }

    document.addEventListener('mousemove', onMouseMove);

    liELement.onmouseup = function(event){
        //проверка конечной позиции
        function checkSubElement(){
            liELement.style.display = 'none';
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            liELement.style.display = 'block';

            if (!elemBelow) return;
            let droppableBelow = elemBelow.closest('.area');
            if (droppableBelow = elemBelow.closest('.area')){
                return droppableBelow;
            }
            else{
                return startArea;
            }
        }
        
        droppableBelow = checkSubElement();

        droppableBelow.append(liELement);

        document.removeEventListener('mousemove', onMouseMove);

        //Возвращение эл-ту базовых ха-к
        liELement.style.position = 'relative';
        liELement.style.left = '';
        liELement.style.top = '';
        liELement = null;
    }

    liELement.ondragstart = function() {
        return false;
    }
}