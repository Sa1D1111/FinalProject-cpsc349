document.addEventListener("DOMContentLoaded", function () {
    fetch("../navbar.html") // Adjust path based on file structure
        .then(response => {
            if (!response.ok) {
                console.error(`Failed to fetch navbar.html: ${response.status} - ${response.statusText}`);
                throw new Error("Failed to load navbar.");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("navbar").innerHTML = html;
            console.log("Navbar loaded successfully.");
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });
});
