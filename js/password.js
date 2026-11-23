
function checkPassword(password)
{
    if (password.length < 8) {
        return "Password must be at least 8 characters.";
    }

    if (/[A-Z]/.test(password) == false) {
        return "Password must have at least one capital letter (A-Z).";
    }

    if (/[a-z]/.test(password) == false) {
        return "Password must have at least one small letter (a-z).";
    }

    if (/[0-9]/.test(password) == false) {
        return "Password must have at least one number (0-9).";
    }

    if (/[^A-Za-z0-9]/.test(password) == false) {
        return "Password must have at least one special character (@, #, $, ! etc).";
    }

    return "";
}


function validateForgot()
{
    var email = document.getElementById("email").value;

    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    if (email == "") {
        errorBox.innerHTML = "Please enter your email.";
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        errorBox.innerHTML = "Email is not valid (it needs @ and .).";
        return false;
    }

    alert("A password reset link has been sent to " + email + ".");

    
    window.location.href = "reset_Pass.html";
    return false;   
}



function sendPasswordLink()
{
    var email = document.getElementById("email").value;

    
    var ok = confirm("We will send a password change link to " + email + ". Continue?");

    if (ok == false) {
        return false;
    }

    alert("The link has been sent to " + email + ". Please open your email and click the link.");

    
    window.location.href = "reset_Pass.html";
    return false;   
}



function validateResetPassword()
{
    var newPassword = document.getElementById("new").value;
    var confirmPassword = document.getElementById("new2").value;

    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    if (newPassword == "") {
        errorBox.innerHTML = "Please enter a new password.";
        return false;
    }

  
    var message = checkPassword(newPassword);
    if (message != "") {
        errorBox.innerHTML = message;
        return false;
    }

    if (newPassword != confirmPassword) {
        errorBox.innerHTML = "New Password and Confirm Password do not match.";
        return false;
    }

    alert("Password changed successfully! Please login with your new password.");
    return true;
}
