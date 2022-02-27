var drop = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < drop.length; i++) {
    drop[i].addEventListener("click", function() {
        var content = this.parentElement.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}