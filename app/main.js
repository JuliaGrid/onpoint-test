//let button2016 = document.querySelector('#radioButton2016');
//let button2009 = document.querySelector('#radioButton2009');
//let button1998 = document.querySelector('#radioButton1998');
let buttons = document.getElementsByName('slide');
let sec3wrapper = document.querySelector('.sec3__wrapper');
let sec1go = document.querySelector('.sec1__go');
let pathogenesisList = document.querySelector('.sec3__slider-list');

let scrollHeight = window.pageYOffset;
let windowHeight = document.documentElement.clientHeight;

sec1go.style.marginTop = windowHeight - 160 + 'px';

/*function slider1() {
    if(button2016.checked) {
        pathogenesisList.style.animationName = 'to-right';
        pathogenesisList.style.marginLeft = '-3740px';
        sec3wrapper.style.width = '1870px';
    }
    if(button2009.checked) {
        pathogenesisList.style.animationName = 'to-center-from-right';
        pathogenesisList.style.marginLeft = '-1940px';
        sec3wrapper.style.width = '1800px';
    }
    if(button1998.checked) {
        pathogenesisList.style.animationName = 'to-left';
        pathogenesisList.style.marginLeft = '0px';
    }
}

button2016.onclick = slider1;
button2009.onclick = slider1;
button1998.onclick = slider1; */


function switchMenu() {
    if (scrollHeight == 0) {
        let menu1sec = document.querySelector('#menu1sec');
        menu1sec.style.backgroundColor = 'orange';
    }
    if (scrollHeight == windowHeight) {
        let menu2sec = document.querySelector('#menu2sec');
        menu2sec.style.backgroundColor = 'orange';
    }
    if (scrollHeight == 2*windowHeight) {
        let menu3sec = document.querySelector('#menu3sec');
        menu3sec.style.backgroundColor = 'orange';
    }
}

if (scrollHeight == 0) {
    switchMenu();
}
if (scrollHeight == windowHeight) {
    switchMenu();
}
if (scrollHeight == 2*windowHeight) {
    switchMenu();
}

let thumb = document.body.querySelector('.sec3__thumb');
let sliderClientRect = slider.getBoundingClientRect();
const maxLeft = slider.offsetWidth - thumb.offsetWidth;
const minLeft = sliderClientRect.left + thumb.offsetWidth/2;
console.log(maxLeft);
console.log(minLeft);
let mouseDown = false;
function moveThumbAt(x){
  let left = x - minLeft;
  if (left < 0) left = 0;
  if (left > maxLeft) left = maxLeft;
  thumb.style.left = left + 'px';
  if (left >= 0 && left < maxLeft/4) {
    pathogenesisList.style.animationName = 'to-left';
    pathogenesisList.style.marginLeft = '0px';
   //   thumb.style.left = 0 + 'px';
  }
  if (left > maxLeft/4 && left < maxLeft/2 + maxLeft/4) {
    pathogenesisList.style.animationName = 'to-center-from-right';
    pathogenesisList.style.marginLeft = '-1940px';
    sec3wrapper.style.width = '1800px';
     // thumb.style.left = maxLeft/2 + 'px';
  }
  if (left > maxLeft/2 + maxLeft/4 && left <= maxLeft) {
    pathogenesisList.style.animationName = 'to-right';
    pathogenesisList.style.marginLeft = '-3740px';
    sec3wrapper.style.width = '1870px';
   //   thumb.style.left = maxLeft + 'px';
  }
};

thumb.onmousedown = slider.onmousedown = e => {
  e.preventDefault()
  mouseDown = true;
  moveThumbAt(e.x);
};

document.body.onmousemove = (e) => {
  if (!mouseDown) return;
  if (e.buttons != 1) { 
    mouseDown = false; 
    return
  };
  moveThumbAt(e.x);
};