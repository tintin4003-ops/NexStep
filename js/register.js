

function validateRegister()
{
 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("password2").value;

   
    var student = document.getElementById("student").checked;
    var org = document.getElementById("org").checked;
    var mentor = document.getElementById("mentor").checked;

    
    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

   
    if (student == false && org == false && mentor == false) {
        errorBox.innerHTML = "Please select what you are (Student, NGO or Mentor).";
        return false;
    }

    if (name == "") {
        errorBox.innerHTML = "Please enter your name.";
        return false;
    }

    if (name.length < 2) {
        errorBox.innerHTML = "Name must be at least 2 characters.";
        return false;
    }

    if (email == "") {
        errorBox.innerHTML = "Please enter your email.";
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        errorBox.innerHTML = "Email is not valid (it needs @ and .).";
        return false;
    }

    
    var message = checkPassword(password);
    if (message != "") {
        errorBox.innerHTML = message;
        return false;
    }

    if (password != confirmPassword) {
        errorBox.innerHTML = "Password and Confirm Password do not match.";
        return false;
    }

    alert("Registration successful! Please login.");
    return true;
}
