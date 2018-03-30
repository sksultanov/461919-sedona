

var link = document.querySelector(".button-interesting");
var popup = document.querySelector(".interesting-form");
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("form-show");
});


