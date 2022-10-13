window.onload=function() {
	const burger = document.getElementById("burger");
	burger.addEventListener("click", toggleMenu);
}

function toggleMenu() {
	var menu = document.getElementById("menu");
	var mainBody = document.getElementById("main-body");
	menu.classList.toggle("show");
	mainBody.classList.toggle("shrink");
}
