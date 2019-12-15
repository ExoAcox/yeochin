
// HOME ANIMATION

window.addEventListener("load", () => {
const diamond = document.getElementsByClassName("diamond")
const text = document.getElementById("diamond-con").querySelectorAll("span")
console.log(text)
for (x = 0; x < diamond.length; x++) {
	diamond[x].classList.add("diamond-anim");
	diamond[x].classList.add("diamond-color")
}
for (x = 0; x < text.length; x++) {
	text[x].classList.add("text-anim")
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

const albums = document.getElementsByClassName("albums-bg")
for (x = 1; x <= albums.length; x++) {
	albums[x].style.backgroundImage = "url(../img/albums/" + x + ".jpg)"
}