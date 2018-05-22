/*****************************************************************
-------------------- Constant Declarations -----------------------
*****************************************************************/
/* Navigation Divs */
const openLeftNav = document.getElementById("left-nav-open");
const leftBar = document.getElementById("left");
const rightBar = document.getElementById("right");
const navItems = document.getElementById("navigationItems");
/* Content Divs */
const firstDiv = document.getElementById("first-div");
const secondDiv = document.getElementById("second-div");

/*****************************************************************
--------------------------- Functions ----------------------------
*****************************************************************/
function expandLeft() {
    leftBar.style.left === '0px' ? leftBar.style.left = '-210px' : leftBar.style.left = '0px';
    if(rightBar.style.right === '0px'){
        rightBar.style.right = '-210px';
    }
}

function expandRight() {
    rightBar.style.right === '0px' ? rightBar.style.right = '-210px' : rightBar.style.right = '0px';
    if(leftBar.style.left === '0px'){
        leftBar.style.left = '-210px';
    }
}

function shiftSlide(e) {
    if(e.keyCode == 97 || e.keyCode == 65 || e.keyCode == 37){
        firstDiv.style.left = 0;
        secondDiv.style.left = '100vw';
        console.log("YES");
    } else if (e.keyCode == 100 || e.keyCode == 68 || e.keyCode == 39){
        firstDiv.style.left = '-100vw';
        secondDiv.style.left = 0;
        console.log("You Rock!");
    }
}

/*****************************************************************
------------------------ Event Listeners -------------------------
*****************************************************************/
openLeftNav.addEventListener("click", expandLeft);
rightBar.addEventListener("click", expandRight);
window.addEventListener('keydown', shiftSlide, false);
