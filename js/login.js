

function validateLogin()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

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

    if (password == "") {
      errorBox.innerHTML = "Please enter your password.";
        return false;
    }

    
  if(email == "mahi@gmail.com" && password == "12345678")
  {
    window.location.href = "student_Dashboard.html";
  }
  if(email == "anika@gmail.com" && password == "12345678")
{
    window.location.href = "admin_Dashboard.html";
}
 if(email == "anabil@gmail.com" && password == "12345678")
  {
    window.location.href = "org_Dashboard.html";

  }
  if(email == "shafin@gmail.com" && password == "12345678")
{
    window.location.href = "mntr_dashboard.html";
 
}
else{
      alert("Enter your email and password correctly.");
        return false;
}
alert("You have successfully logged in.Welcome to NexStep!");
    return false;
}





