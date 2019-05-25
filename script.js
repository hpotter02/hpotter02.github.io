"use strict";

if (location.protocol === "http:") location.href = location.href.replace(/^http:/, "https:");

const otter = document.getElementById("otter");

function rotateOtter(angle) {
	otter.style.transform = "rotate(" + (angle) + "deg)";
}

function processMouseMove(e) {
	const xFromCenter = innerWidth / 2 - e.clientX;
	const yFromCenter = innerHeight / 2 - e.clientY;
	let angle = Math.atan(yFromCenter / xFromCenter) * 180 / Math.PI;
	if (xFromCenter > 0) angle += 180;
	// Add 20 degrees, so that the otter looks directly at your mouse pointer:
	angle += (angle <= 340) ? 20 : -340;
	rotateOtter(angle);
}

addEventListener("mousemove", processMouseMove);

let isMoveHandlerRemoved = false;
addEventListener("deviceorientation", (e) => {
	if (!isMoveHandlerRemoved) {
		removeEventListener("mousemove", processMouseMove);
		isMoveHandlerRemoved = true;
	}
	rotateOtter(-e.gamma);
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