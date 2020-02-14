let button2016 = document.querySelector('#radioButton2016');
let button2009 = document.querySelector('#radioButton2009');
let button1998 = document.querySelector('#radioButton1998');
let buttons = document.getElementsByName('slide');

let pathogenesisList = document.querySelector('.sec3__slider-list');

function check() {
    if(button2016.checked) {
        pathogenesisList.style.marginLeft = '-3600px';
    }
    if(button2009.checked) {
        pathogenesisList.style.marginLeft = '-1800px';
    }
    if(button1998.checked) {
        pathogenesisList.style.marginLeft = '0px';
    }
}

button2016.onclick = check;
button2009.onclick = check;
button1998.onclick = check;