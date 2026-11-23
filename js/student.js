
function validatePost()
{
    
    var title = document.getElementById("title").value;
    var body = document.getElementById("body").value;

    
    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    if (title == "") {
        errorBox.innerHTML = "Please enter a title.";
        return false;
    }

    if (title.length < 3) {
        errorBox.innerHTML = "Title must be at least 3 characters.";
        return false;
    }

    if (body == "") {
        errorBox.innerHTML = "Please write a description.";
        return false;
    }

    if (body.length < 10) {
        errorBox.innerHTML = "Description must be at least 10 characters.";
        return false;
    }

    alert("Your post is published!");
    return true;
}



function confirmRegister()
{
    return confirm("Do you want to register for this event?");
}



function confirmCancel()
{
    return confirm("Are you sure you want to cancel this registration?");
}
