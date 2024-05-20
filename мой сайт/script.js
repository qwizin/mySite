// Get the modal
var modal = document.getElementById("myModal");

// Get the link that opens the modal
var link = document.getElementById("openModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the link, open the modal
link.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the link that opens the modal
var link2 = document.getElementById("openModal2");

// When the user clicks on the link, open the modal
link2.onclick = function(event) {
    event.preventDefault();
    modal2.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}


