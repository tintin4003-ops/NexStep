
function validateWarning()
{
    var user = document.getElementById("user").value;
    var message = document.getElementById("message").value;

    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    if (user == "") {
        errorBox.innerHTML = "Please select a user.";
        return false;
    }

    if (message == "") {
        errorBox.innerHTML = "Please write the warning message.";
        return false;
    }

    if (message.length < 5) {
        errorBox.innerHTML = "The message must be at least 5 characters.";
        return false;
    }

    alert("Warning sent to " + user + ".");
    return true;
}



function confirmAction(question)
{
    return confirm(question);
}
