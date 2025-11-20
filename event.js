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

function validateSignup() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (fullname === "" || email === "" || username === "" || password === "") {
        alert("Please fill in all fields");
        return;
    } else {
        alert("Signup successful!");
        window.location.href="login.html"
        return;
    }
}