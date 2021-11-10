const modal = document.querySelector("#myModal");
const info = document.querySelector(".main__skill_block");
const closeElement = document.querySelector("#close_btn");
const tooltip = document.querySelector("#tooltip");

info.addEventListener("click", () => {
	modal.classList.add("show_modal");
	document.body.classList.add("fixed");
});

closeElement.addEventListener("click", () => {
	modal.classList.remove("show_modal");
	document.body.classList.remove("fixed");
});

info.addEventListener("mouseover", () => {
	let cursorPositionX = window.event.pageX;
	let cursorPositionY = window.event.pageY;
	if (document.documentElement.clientWidth - cursorPositionX < 100) {
		cursorPositionX -= 200;
	}
	tooltip.style.left = cursorPositionX + "px";
	tooltip.style.top = cursorPositionY + "px";
	tooltip.style.display = "block";
});

info.addEventListener("mouseout", () => {
	tooltip.style.display = "none";
});
