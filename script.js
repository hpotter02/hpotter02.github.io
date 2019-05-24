const otter = document.getElementById("otter");

addEventListener("deviceorientation", (e) => {
	otter.style.transform = "rotate(" + (- e.gamma) + "deg)";
});