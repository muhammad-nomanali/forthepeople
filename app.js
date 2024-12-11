const moveButton = document.getElementById('moveButton');

const content = document.querySelector('.content');

let isMoved = false;

moveButton.addEventListener('click', () => {
  if (!isMoved) {
   
    content.style.transform = 'translateY(200px)'; // Move content down
    isMoved = true;
  } else {
 
    content.style.transform = 'translateY(0)'; // Reset content position
    isMoved = false;
  }
});
