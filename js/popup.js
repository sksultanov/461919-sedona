var link = document.querySelector(".button-interesting");
var popup = document.querySelector(".interesting-form");

var race = popup.querySelector("[name=date-race]");
var form = popup.querySelector("form");
var departure = popup.querySelector("[name=date-departure]");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.classList.toggle("form-show");
});

form.addEventListener("submit", function (evt) {
  if (!race.value || !departure.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");

  }
});




