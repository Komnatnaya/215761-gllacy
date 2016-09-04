var link = document.querySelector(".open-feedback");
var popup = document.querySelector(".feedback");
var overlay = document.querySelector(".overlay");

var close = popup.querySelector(".feedback-close");
var form = popup.querySelector("form");

var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=user-email]");
var textarea = popup.querySelector("[name=text]");

link.addEventListener("click", function(event) { 				event.preventDefault();
	popup.classList.add("feedback-show");
	overlay.classList.add("overlay-show");					username.focus();	
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("feedback-show");
	overlay.classList.remove("overlay-show");
	popup.classList.remove("feedback-error");
});

form.addEventListener("submit", function(event) {
	if (!username.value || !email.value || !textarea.value) {
		event.preventDefault();
		popup.classList.remove("feedback-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("feedback-error"); 
	} else {
		localStorage.setItem("username", username.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("feedback-show")) {
			popup.classList.remove("feedback-show");
			overlay.classList.remove("overlay-show");
			popup.classList.remove("feedback-error");
		}
	}
});