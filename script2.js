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
  }, 2000)

}
 

document.querySelectorAll('a[data-href]').forEach(link => {
  link.addEventListener('click', handleLinkClick);
});

console.log(handleLinkClick())

const border = document.querySelector('.border');
const footer = document.querySelector('footer');
 
window.addEventListener('scroll', () => {
  // Get the bottom of the viewport by adding the viewport height to the current scroll position
  const bottomViewport = window.scrollY + window.innerHeight;
  
  // Get the bottom of the footer element relative to the document
  const bottomFooter = footer.getBoundingClientRect().bottom + window.scrollY;
  
  // Calculate the distance between the bottom of the border and the bottom of the viewport
  const distanceToBottom = bottomViewport - border.getBoundingClientRect().bottom;
  
  if (distanceToBottom > 0 && bottomViewport < bottomFooter) {
    border.classList.add('show');
  } else {
    border.classList.remove('show');
  }
});