/* Misc */
var hoverElement = document.getElementById('header-hover');
var invinsibleMask = document.getElementById('invinsible-mask');
var whiteMask = document.getElementById('white-mask');

/* Header and Footer Variables */
var foot = document.getElementById('footer');
var head = document.getElementById('header');
var logo = document.getElementById('logo');

/* White space variable */
var topp = document.querySelector('#topp');
var rightt = document.getElementById('rightt');
var bottomm = document.getElementById('bottomm');
var leftt = document.getElementById('leftt');



function open() {
    /* whiteMask.style.background = 'white';
    invinsibleMask.style.height = 'calc(100vh - 200px)';
    invinsibleMask.style.width = '80vw';
    invinsibleMask.style.left = '10vw';
    invinsibleMask.style.top = '100px'; */

    /* White space */
    topp.style.height = '100px';
    rightt.style.width = '10vw';
    leftt.style.width = '10vw';
    bottomm.style.height = '100px';

    /* Header and Footer */
    foot.style.opacity = '1';
    head.style.opacity = '1';
    head.style.zIndex = '1000';
}

function close() {
    /* whiteMask.style.background = 'none';
    invinsibleMask.style.height = '100vh';
    invinsibleMask.style.width = '100vw';
    invinsibleMask.style.left = '0';
    invinsibleMask.style.top = '0'; */

    /* White Space */
    topp.style.height = '0';
    rightt.style.width = '0';
    leftt.style.width = '0';
    bottomm.style.height = '0';

    /* Header and Footer */
    foot.style.opacity = '0';
    head.style.opacity = '0';
}

hoverElement.addEventListener('mouseenter', open, false);

hoverElement.addEventListener('mouseleave', close, false);

head.addEventListener('mouseenter', open, false);

head.addEventListener('mouseleave', close, false);

logo.addEventListener('mouseenter', open, false);

logo.addEventListener('mouseleave', close, false);

/* MOBILE BROWSERS */