function hamburgerMenu() {
    var x = document.getElementById("navbarNav");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}