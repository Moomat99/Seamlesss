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
  const p = document.querySelector('.border');
  const pOffset = p.offsetTop;
  const windowHeight = window.innerHeight * 1.2;
  const scrollTop = document.documentElement.scrollTop;
  const pBottom = pOffset - scrollTop + p.offsetHeight;
 
  if (pBottom < windowHeight) {
    console.log('Element is visible in viewport');
    border.classList.add('show'); // Add the 'show' class
  } else {
    console.log('Element is not visible in viewport');
    border.classList.remove('show'); // Remove the 'show' class
  }
});
const header = document.querySelector('header');
const navigation = document.querySelector('navigation');
const scrollOffset = 50; // adjust this value as needed
 


