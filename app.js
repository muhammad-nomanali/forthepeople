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
const endDate = "20 January 2025 6:00:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
    // const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    // convert into days;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}

// initial call
clock()

/**
 *  1 day = 24 hrs
 *  1 hr = 60 mins
 *  60 min = 3600 sec
 */

setInterval(
    () => {
        clock()
    },
    1000
)





