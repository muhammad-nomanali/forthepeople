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


