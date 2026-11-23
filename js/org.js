
function validateEvent()
{
    var title = document.getElementById("title").value;
    var body = document.getElementById("body").value;
    var date = document.getElementById("date").value;
    var seats = document.getElementById("seats").value;

    var errorBox = document.getElementById("error");
    errorBox.innerHTML = "";

    if (title == "") {
        errorBox.innerHTML = "Please enter a title.";
        return false;
    }

    if (body == "") {
        errorBox.innerHTML = "Please write a description.";
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

    alert("Event published!");
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
