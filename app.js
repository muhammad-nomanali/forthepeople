const moveButton = document.getElementById('moveButton');

const content = document.querySelector('.content');

let isMoved = false;

moveButton.addEventListener('click', () => {
  if (!isMoved) {
   
    content.style.transform = 'translateY(280px)'; // Move content down
    isMoved = true;
  } else {
 
    content.style.transform = 'translateY(0)'; // Reset content position
    isMoved = false;
  }
});


       
  



    // Function to toggle the dropdown visibility
    function toggleDropdown() {
        const dropdown = document.getElementById("myDropdown");
        // Toggle the display of the dropdown
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        } else {
            dropdown.style.display = "block";
        }
    }

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.telegram-icon') && !event.target.matches('.dropdown-content')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.style.display === "block") {
                    openDropdown.style.display = "none";
                }
            }
        }
    }


    // 
    function toggleDropdowns() {
      const dropdown = document.getElementById("myDropdowns");
      // Toggle the display of the dropdown
      if (dropdown.style.display === "block") {
          dropdown.style.display = "none";
      } else {
          dropdown.style.display = "block";
      }
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
      if (!event.target.matches('.telegram-icon') && !event.target.matches('.dropdown-contents')) {
          const dropdowns = document.getElementsByClassName("dropdown-contents");
          for (let i = 0; i < dropdowns.length; i++) {
              const openDropdown = dropdowns[i];
              if (openDropdown.style.display === "block") {
                  openDropdown.style.display = "none";
              }
          }
      }
  }

// %5555555555555555555555555555555
// Set the target date and time
// Check if targetDate already exists in localStorage
let targetDate = localStorage.getItem('targetDate');

if (!targetDate) {
  // Set targetDate to 15 hours, 1 minute, and 2 seconds from now if not already set
  targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 15); // Add 15 hours
  targetDate.setMinutes(targetDate.getMinutes() + 1); // Add 1 minute
  targetDate.setSeconds(targetDate.getSeconds() + 2); // Add 2 seconds
  localStorage.setItem('targetDate', targetDate);
} else {
  // Parse targetDate from localStorage
  targetDate = new Date(targetDate);
}

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.querySelector('.countdown').innerHTML = "<h2>Time's Up!</h2>";
    localStorage.removeItem('targetDate'); // Clear targetDate once the countdown ends
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = '00'; // No days for this timer
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);

// Initialize countdown
updateCountdown();







