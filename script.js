"use strict";

if (location.protocol === "http:") location.replace(/^http:/, "https:");

const otter = document.getElementById("otter");

addEventListener("deviceorientation", (e) => {
	otter.style.transform = "rotate(" + (- e.gamma) + "deg)";
});

function resizeOtter() {
	if (innerHeight > innerWidth) {
		otter.style.width = "100vw";
		otter.style.height = "50vw";
	} else {
		otter.style.width = "100vh";
		otter.style.height = "50vh";
	}
}

addEventListener("resize", resizeOtter);
resizeOtter();