document.addEventListener('DOMContentLoaded', () => {
const blackOverlay = document.querySelector('#black-overlay');
blackOverlay.addEventListener('animationend', () => {
  blackOverlay.classList.add('finished');
});




const overlay = document.querySelector('#black-overlay');
 
function handleLinkClick(event) {
  event.preventDefault();
  const link = event.target
  link.removeAttribute('href')
  blackOverlay.classList.add('show')
  setTimeout(() => {
    link.setAttribute('href', link.getAttribute('data-href'))
    window.location.href = link.href
  }, 1000)

}
 window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
     blackOverlay.classList.add('finished');
  
  }
});

document.querySelectorAll('a[data-href]').forEach(link => {
  link.addEventListener('click', handleLinkClick);
});



const border = document.querySelector('.border');
const footer = document.querySelector('footer');
 

window.addEventListener('scroll', () => {
  const p = document.querySelector('#p');
  const pOffset = p.offsetTop;
  const windowHeight = window.innerHeight * 1.2;
  const scrollTop = document.documentElement.scrollTop;
  const pBottom = pOffset - scrollTop + p.offsetHeight;
 
  if (pBottom < windowHeight) {
    console.log('Element is visible in viewport');
    border.classList.add('show'); // Add the 'show' class
  } else {// Remove the 'show' class
  }
});
const header = document.querySelector('header');
const navigation = document.querySelector('#navigation');
const navBg = document.querySelector('.navbar-container');
const scrollOffset = 120; // adjust this value as needed
let hasUserScrolled = false;
 
window.addEventListener('scroll', () => {
  if (hasScrolled()) {
   const scrolled = true
    hasUserScrolled = scrolled;
  }
});
let fadeCompleted = false;
 
let navVisable = true;
window.addEventListener('scroll', () => {
  if (window.scrollY > scrollOffset) {
   // only apply fade-out when fade-in has completed
    if (window.scrollY > 180){
      navBg.style.animation = 'fade-in-hf 1.5s forwards';
    }
    navigation.style.animation = 'slide-down 2.1s forwards';
      navigation.style.position = 'fixed';;
      fadeCompleted = true; // reset fadeCompleted
    navVisable = false
    }
   else if (window.scrollY < 10) {
    if (fadeCompleted) { // only apply fade-out when fade-in has completed
      
      navBg.style.animation = 'fade-out-hf 1.1s forwards';
     navigation.style.animation = '';
; // reset fadeCompleted
    
    }
    if (window.scrollY < 130){
    navigation.style.position = 'absolute';
    navigation.style.backgroundColor = 'transparent !important';
    navBg.style.opacity = '0';}
    
  }
});

navigation.addEventListener('transitionend', function(event) {
  if (event.propertyName === 'opacity' && parseFloat(this.style.opacity) === 0) {
    this.style.animation = 'fade-in 4.4s 2.1s forwards';
    this.style.opacity = '1';
  }
});
});