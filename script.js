const burger = document.getElementById("burger");
burger.addEventListener("click", toggleMenu);
burger.onclick = toggleMenu();

alert("!!!Q");

function toggleMenu() {
	var menu = document.getElementById("menu");
	alert("toggle");
	menu.classList.add("show");
	menu.style.display = "none";
}
