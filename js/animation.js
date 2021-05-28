//Trigger
let navTrigger = document.querySelector(".menu-link");
let burger = document.querySelector('.ham');
navTrigger.addEventListener("click",()=>{
  if (document.querySelector('.ham.hamRotate').classList.contains('active')) {
    document.getElementById('main-nav').classList.add('toggled');
  } else {
    document.getElementById('main-nav').classList.remove('toggled');
    // document.getElementById('work').classList.remove('toggled');
    // document.getElementById('moin').classList.remove('toggled');
  }
})
let agencyTrigger = document.querySelector(".agency-link");
agencyTrigger.addEventListener("click",()=>{
  document.getElementById('main-nav').classList.remove('toggled');
  setTimeout(function () {
    document.querySelector('main').classList.remove('work');
    document.querySelector('main').classList.remove('moinMoin');
    document.querySelector('main').classList.add('agency');
  }, 600);
})

let workTrigger = document.querySelector(".work-link");
workTrigger.addEventListener("click",()=>{
  document.getElementById('main-nav').classList.remove('toggled');
  setTimeout(function () {
    document.querySelector('main').classList.remove('agency');
    document.querySelector('main').classList.remove('moinMoin');
    document.querySelector('main').classList.add('work');
  }, 600);
})

let moinTrigger = document.querySelector(".moin-link");
moinTrigger.addEventListener("click",()=>{
  document.getElementById('main-nav').classList.remove('toggled');
  setTimeout(function () {
    document.querySelector('main').classList.remove('agency');
    document.querySelector('main').classList.add('moinmoin');
    document.querySelector('main').classList.remove('work');
  }, 600);
})
// let moinTrigger=document.querySelector(".moin-link");
// moinTrigger.addEventListener("click",()=>{
//
//   document.querySelector("#moin").classList.toggle("toggled");
//   if (document.querySelector('.ham.hamRotate').classList.contains('active')) {
//     document.querySelector('.ham.hamRotate').classList.remove('active');
//   } else {
//     document.querySelector('.ham.hamRotate').classList.add('active');
//   }
// })

// TeamSlider
// const slider = document.querySelector('.items');
// let isDown = false;
// let startX;
// let scrollLeft;
//
// slider.addEventListener('mousedown', (e) => {
//   isDown = true;
//   slider.classList.add('active');
//   startX = e.pageX - slider.offsetLeft;
//   scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//   isDown = false;
//   slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', (e) => {
//   if (!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - slider.offsetLeft;
//   const walk = (x - startX) * 0.8; //scroll-fast
//   slider.scrollLeft = scrollLeft - walk;
//
//   //Add Parallax
//   const img = document.querySelectorAll('.img');
//   const n = img.length;
//
//   for (i = 0; i < n; i++){
//     let position = i * 432;
//     let width = window.innerWidth;
//     let offset = 50;
//     let current = offset + position/width - walk/50;
//     img[i].style.transform = "translate3d(-" + current + "%,0,-500px)";
//   }
// });

// Accordeon
let item = document.querySelectorAll('.accordeon');

item.forEach((item, i) => {
  item.addEventListener('click', ()=> {
    item.classList.toggle('active');
  })
});

// Navigation
window.addEventListener("scroll", function() {
  if(window.pageYOffset > 15) {
    document.querySelector('.navigation').style.transition = "0.5s";
    document.querySelector('.navigation').style.transform = "translateY(-50px)";
    document.querySelector('.navigation').style.opacity = "0";
  } else {
    document.querySelector('.navigation').style.transition = "0.5s";
    document.querySelector('.navigation').style.transform = "translateY(0)";
    document.querySelector('.navigation').style.opacity = "1";
  };
});
