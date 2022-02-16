let btnMenu = document.querySelector('.menuMobile');
let menuUl = document.querySelector('nav ul');
let boxMenu = document.querySelector('.menuBox');



btnMenu.addEventListener('click', () => {

    /*Verificando se o boxMenu está aberto */
    if (boxMenu.classList.contains('menuBoxOppened')) {
        setTimeout(() => {
            boxMenu.classList.remove('menuBoxOppened');
            menuUl.classList.remove('menuNavOpened');


        }, 100)

    } else {
        btnMenu.style.position = 'fixed';
        boxMenu.classList.add('menuBoxOppened');
        menuUl.classList.add('menuNavOpened');


    }
})


