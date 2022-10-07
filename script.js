window.onload=function() {
	const burger = document.getElementById("burger");
	burger.addEventListener("click", toggleMenu);
}

function toggleMenu() {
	var menu = document.getElementById("menu");
	menu.classList.toggle("show");
}
