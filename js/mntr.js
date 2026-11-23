
function checkTitleBody()
{
    var title = document.getElementById("title").value;
    var body = document.getElementById("body").value;

    if (title == "") {
        return "Please enter a title.";
    }

    if (body == "") {
        return "Please write a description.";
    }

    return "";
}



function validatePost()
{
    var errorBox = document.getElementById("error");
    var message = checkTitleBody();

    if (message != "") {
        errorBox.innerHTML = message;
        return false;
    }

    errorBox.innerHTML = "";
    alert("Post published!");
    return true;
}



function validateWorkshop()
{
    var date = document.getElementById("date").value;
    var seats = document.getElementById("seats").value;

    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    var message = checkTitleBody();
    if (message != "") {
        errorBox.innerHTML = message;
        return false;
    }

    if (date == "") {
        errorBox.innerHTML = "Please choose the date and time.";
        return false;
    }

    if (new Date(date) < new Date()) {
        errorBox.innerHTML = "The date must be in the future.";
        return false;
    }

    if (seats != "" && (isNaN(seats) || seats < 1)) {
        errorBox.innerHTML = "Number of seats must be 1 or more.";
        return false;
    }

    alert("Workshop published!");
    return true;
}



function validateMaterial()
{
    var file = document.getElementById("file").value;

    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    var message = checkTitleBody();
    if (message != "") {
        errorBox.innerHTML = message;
        return false;
    }

    if (file == "") {
        errorBox.innerHTML = "Please choose a file to upload.";
        return false;
    }

    alert("Material uploaded!");
    return true;
}



function validateJob()
{
    var company = document.getElementById("company").value;
    var link = document.getElementById("link").value;

    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    var message = checkTitleBody();
    if (message != "") {
        errorBox.innerHTML = message;
        return false;
    }

    if (company == "") {
        errorBox.innerHTML = "Please enter the company name.";
        return false;
    }

    
    if (link != "" && link.indexOf("http") != 0) {
        errorBox.innerHTML = "The link must start with http:// or https://";
        return false;
    }

    alert("Job post published!");
    return true;
}


function confirmDelete(item)
{
    return confirm("Are you sure you want to delete this " + item + "?");
}



function setStatus(id, status)
{
    var cell = document.getElementById(id);

    if (status == "Approved") {
        cell.innerHTML = '<span class="tag tag-green">Approved</span>';
    } else {
        cell.innerHTML = '<span class="tag tag-red">Rejected</span>';
    }
}
