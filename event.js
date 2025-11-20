function toSignup() 
{
 window.location.href="signup.html"
    }

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Please enter your username and password");
        return;
    } else {
        alert("Login successful!");
        return;
    }
}