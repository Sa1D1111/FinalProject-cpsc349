// Example: Simple form validation
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted!");
});

document.addEventListener("DOMContentLoaded", function () {
    // Add your event listener code here
});

// Smooth scrolling for internal navigation links
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default behavior
        e.preventDefault();

        // Get the target section
        const targetID = this.getAttribute('href').slice(1); // Remove the '#' from href
        const targetElement = document.getElementById(targetID);

        // Scroll to the target section
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});



