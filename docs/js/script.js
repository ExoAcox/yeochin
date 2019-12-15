
// HOME ANIMATION

window.addEventListener("load", () => {
const diamond = document.getElementsByClassName("diamond")
for (x = 0; x < diamond.length; x++) {
	diamond[x].classList.add("diamond-anim")
}
})


// MEMBERS HOVER

const navbar = document.getElementById("members-navbar")
navbar.addEventListener("mouseover", function(event) {
const x = event.target.className
for (i = 0; i < 7; i++) {
const hover = "hover" + i;
const pop = "pop" + i;
	if (x == hover) {
		document.getElementById(pop).classList.add("popup")
	}
}})
navbar.addEventListener("mouseout", function(event) {
const x = event.target.className
for (i = 0; i < 7; i++) {
const hover = "hover" + i;
const pop = "pop" + i;
	if (x == hover) {
		document.getElementById(pop).classList.remove("popup")
	}
}})
navbar.addEventListener("click", function(event) {
const x = event.target.className
for (i = 0; i < 7; i++) {
const hover = "hover" + i;
const pop = "pop" + i;
	if (x == hover) {
		document.getElementById(pop).classList.remove("popup")
	}
}})


// ALBUMS BACKGROUND

const sample = ["coeg", "sog", "fwb", "sfk", "lol", "tan", "rbw", "tmn", "ssm", "tfu", "srs", "fvr", "fll"]
const albums = document.getElementsByClassName("albums-bg")
for (x = 1; x <= albums.length; x++) {
	albums[x].style.backgroundImage = "url(../img/" + sample[x] + ".jpg)"
}