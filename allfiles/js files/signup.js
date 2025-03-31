function createAccount() {
    // Get input values
    var newUsername = document.getElementById("newUsername").value.trim();
    var newEmail = document.getElementById("newEmail").value.trim();
    var dob = document.getElementById("dob").value.trim();
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
    var newPassword = document.getElementById("newPassword").value.trim();

    // Store user information in localStorage
    localStorage.setItem("username", newUsername);
    localStorage.setItem("email", newEmail);
    localStorage.setItem("dob", dob);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("password", newPassword);

    // Alert user and redirect to login page after successful account creation
    alert("Account created successfully!");
    window.location.href = "login.html";
}
