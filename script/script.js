document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Show success message
    document.getElementById("successMessage").classList.remove("hidden");

    // Clear all fields
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
});