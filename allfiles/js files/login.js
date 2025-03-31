function login() {
  // Get input values
  var username = document.getElementById("username").value.trim();
  var password = document.getElementById("password").value.trim();
  
  // Get stored values from localStorage
  var storedUsername = localStorage.getItem("username").trim();
  var storedPassword = localStorage.getItem("password").trim();

  // Debugging: Log the values
  console.log("Input Username:", username);
  console.log("Input Password:", password);
  console.log("Stored Username:", storedUsername);
  console.log("Stored Password:", storedPassword);

  // Check if input matches stored values
  if (username === storedUsername && password === storedPassword) {
    window.location.href = "main.html"; // Redirect to main.html if login is successful
  } else {
    alert("Invalid username or password");
  }
}
