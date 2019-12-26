
// HOME ANIMATION

window.addEventListener("load", () => {
	const diamond = document.getElementsByClassName("diamond")
	const text = document.getElementById("diamond-con").querySelectorAll("span")
	const text2 = document.getElementById("text-con").querySelectorAll("span")
	document.getElementById("loading").classList.add("load-off")
	document.getElementById("navbar").classList.add("navbar-show")
	document.getElementById("text-con").classList.add("con-fadeout")
	for (x = 0; x < diamond.length; x++) {
		diamond[x].classList.add("diamond-anim");
		diamond[x].classList.add("diamond-color")
	}
	for (x = 0; x < text.length; x++) {
		text[x].classList.add("text-anim")
	}
	for (x = 0; x < text2.length; x++) {
		text2[x].classList.add("text-anim")
	}
	if (window.location.hash != "" && window.location.hash != "#Home") {
		document.getElementById("navbar").style.transition = ".5s .75s"
	}




// ABOUT ME TYPING START

	if (window.location.hash == "#About_Me") {
		document.getElementById("typed-on").innerHTML = "buddy()"
		document.getElementById("credit-head").classList.add("credit-show")
	}
})
document.getElementsByClassName("diamond")[5].addEventListener("transitionend", () => {
	setTimeout(() => {document.getElementById("text-con").classList.add("con-hide");
	document.getElementById("text-con2").classList.add("con-show");
	setTimeout(() => {
		const text3 = document.getElementById("text-con2").querySelectorAll("span")
		for (x = 0; x < text3.length; x++) {
			text3[x].classList.add("text-anim")
		}
		}, 1000)
	}, 9000)
})
document.getElementById("navbar").addEventListener("transitionend", () => {
	const diamond = document.getElementsByClassName("diamond")
	for (x = 0; x < diamond.length; x++) {
		diamond[x].classList.add("diamond-hov")
	}
})

// MEMBERS HOVER

const navbar = document.getElementById("members-navbar")
navbar.addEventListener("mouseover", event => {
const x = event.target.className
for (i = 1; i < 7; i++) {
const hover = "hover" + i;
const pop = "pop" + i;
	if (x == hover) {
		document.getElementById(pop).classList.add("popup")
	}
}})
navbar.addEventListener("mouseout", event => {
const x = event.target.className
for (i = 1; i < 7; i++) {
const hover = "hover" + i;
const pop = "pop" + i;
	if (x == hover) {
		document.getElementById(pop).classList.remove("popup")
	}
}})
navbar.addEventListener("click", event => {
const x = event.target.className
for (i = 1; i < 7; i++) {
const hover = "hover" + i;
const pop = "pop" + i;
	if (x == hover) {
		document.getElementById(pop).classList.remove("popup")
	}
}})


// --- STORIES ---

// MENU HOVER ---

let xTarget = 0
document.getElementById("stories-menu").addEventListener("mouseover", event => {
	switch (event.target.text) {
		case "Chapter 1": color = "red"; x = 0; break;
		case "Chapter 2": color = "blue"; x = 1; break;
		case "Chapter 3": color = "purple"; x = 2; break;
		case "Chapter 4": color = "brown"; x = 3; break;
		case "Chapter 5": color = "yellow"; x = 4; break;
		case "Chapter 6": color = "green"; x = 5; break;
		case "Chapter 7": color = "hotpink"; x = 6; break;
		case "Chapter 8": color = "coral"; x = 7; break;
		case "Chapter 9": color = "grey"; x = 8; break;
		case "Chapter 10": color = "silver"; x = 9; break;
	}
	document.getElementById("stories-main").style.backgroundColor = color
	const chapter = document.getElementsByClassName("chapter")
	chapter[xTarget].classList.remove("desc-show")
	chapter[x].classList.add("desc-show")
	if (event.target.classList.contains("menu") == true) {
		event.target.classList.add("big")
	}
})
document.getElementById("stories-menu").addEventListener("mouseout", event => {
	event.target.classList.remove("big")
	if (event.target.classList.contains("menu") == true) {
		switch (event.target.text) {
			case "Chapter 1": x = 0; break;
			case "Chapter 2": x = 1; break;
			case "Chapter 3": x = 2; break;
			case "Chapter 4": x = 3; break;
			case "Chapter 5": x = 4; break;
			case "Chapter 6": x = 5; break;
			case "Chapter 7": x = 6; break;
			case "Chapter 8": x = 7; break;
			case "Chapter 9": x = 8; break;
			case "Chapter 10": x = 9; break;
		}
		xTarget = x
	}
})


// --- ALBUMS ---

// ALBUMS DATE ---

const debut = new Date(2015, 0, 14, 22)
const today = new Date()
const passed = Math.floor((today - debut) / 8.64e7)
const year = Math.floor(passed / 365)
const day = passed % 365
let xDay = 0
let xYear = 0
let stop = 0
const cnd = [[10, 200], [30, 100], [45, 65], [60, 30], [75, 10], [100, 0]]

function countdown(cnd) {
	const zDay = setInterval(() => {
		if (xDay > 364) {
			xDay = 0
			xYear++
		}
		if (stop == cnd.length - 1) {
			document.getElementById("albums-date").classList.add("cnd-off")
			document.getElementById("albums-text").classList.add("cnd-off")
			document.getElementById("albums-icon").classList.add("anim-on")
			document.getElementById("albums-slide").classList.add("darker")
		}
		if (((365 * year) + day) - ((365 * xYear) + xDay) == cnd[stop][1]) {
			clearInterval(zDay)
			stop++
			if (stop < cnd.length) {
				countdown(cnd)
			}
		}
		document.getElementById("albums-date").innerHTML = `${xYear} years | ${xDay} days`
		xDay++
	}, cnd[stop][0])
}

// ALBUMS SLIDE

window.addEventListener("load", () => {
	if (window.location.hash == "#Albums") {
		setTimeout(() => {
			if (xDay == 0) {countdown(cnd)};
			const slide = document.getElementsByClassName("slide-bg")
			for (x = 0; x < slide.length; x++) {
			slide[x].classList.add("slide-on")
			}
		}, 1000)
	}
	function albumsSlide() {
		const slide_bg = document.getElementsByClassName("slide-bg")
		const xScreen = Math.ceil(window.innerWidth / (window.innerHeight * 4))
		const xxScreen = Math.ceil(window.innerWidth / window.innerHeight)
		for (x = 1; x <= slide_bg.length; x++) {
			let xBG = ""
			let count = x
			for (y = 0; y < xScreen; y++) {
				for (z = 0; z < 4; z++) {
					if (count > 4) {count = 1}
					xBG += `<div style="background-image: url('/img/albums/main/${count}.jpg');width: ${window.innerHeight}px"></div>`;
					count++
				}
			}
			count = x
			for (z = 0; z < xxScreen; z++) {
				if (count > 4) {count = 1}
				xBG += `<div style="background-image: url('/img/albums/main/${count}.jpg');width: ${window.innerHeight}px"></div>`
				count++
			}
			slide_bg[x - 1].innerHTML = xBG
		}
	}
	albumsSlide()
})

// ALBUMS ITUNES

const itunes = document.getElementById("albums-all").querySelectorAll("iframe")
for (x = 0; x < itunes.length; x++) {
	itunes[x].setAttribute("allow", "autoplay *; encrypted-media *");
	itunes[x].setAttribute("frameborder", "0");
	itunes[x].setAttribute("height", "450");
	itunes[x].setAttribute("style", "width:100%;max-width:700px;overflow:hidden;background:transparent;");
	itunes[x].setAttribute("sandbox", "allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation");
	switch (x) {
		case 0:
			source = "https://embed.music.apple.com/us/album/gfriend-1st-mini-album-season-of-glass-ep/1305056370?app=music"
			break;
		case 1:
			source = "https://embed.music.apple.com/us/album/gfriend-2nd-mini-album-flower-bud-ep/1305043068?app=music"
			break;
		case 2:
			source = "https://embed.music.apple.com/us/album/snowflake/1078127178?app=music"
			break;
		case 3:
			source = "https://embed.music.apple.com/us/album/gfriend-the-1st-album-lol/1133029174?app=music"
			break;
		case 4:
			source = "https://embed.music.apple.com/us/album/the-awakening-ep/1212180082?app=music"
			break;
		case 5:
			source = "https://embed.music.apple.com/us/album/gfriend-the-5th-mini-album-repackage-rainbow/1282303070?app=music"
			break;
		case 6:
			source = "https://embed.music.apple.com/us/album/gfriend-the-6th-mini-album-time-for-the-moon-night/1378209147?app=music"
			break;
		case 7:
			source = "https://embed.music.apple.com/us/album/gfriend-summer-mini-album-sunny-summer-ep/1414199183?app=music"
			break;
		case 8:
			source = "https://embed.music.apple.com/us/album/gfriend-the-2nd-album-time-for-us/1449453361?app=music"
			break;
		case 9:
			source = "https://embed.music.apple.com/us/album/fever-season/1470921587?app=music"
			break;
		case 10:
			source = "https://embed.music.apple.com/jp/album/fallin-light/1483715338?app=music"
			break;
	}
	itunes[x].setAttribute("src", source)
}

// ALBUMS BACKGROUND

const albums_bg = document.getElementsByClassName("albums-bg")
for (x = 0; x < albums_bg.length; x++) {
	albums_bg[x].style.backgroundImage = "url(../img/albums/" + (x + 1) + ".jpg)"
}

// ALBUMS NAVBAR

const albums = document.getElementById("albums-navbar").querySelectorAll("a")
const albums2 = document.getElementById("albums-navbar").querySelectorAll("img")
for (x = 0; x < albums.length; x++) {
	albums[x].setAttribute("href", "#Albums/" + (x + 1));
	albums2[x].setAttribute("src", "../img/albums/" + (x + 1) + ".jpg")
}
const hover = document.getElementsByClassName("hover")
for (x = 0; x < hover.length; x++) {
	if (x != 6) {
		hover[x].innerHTML = hover[x].previousElementSibling.getAttribute("alt")
	} else {
		hover[x].innerHTML = `<div id="tftmn">${hover[x].previousElementSibling.getAttribute("alt")}</div>`
	}
}

document.getElementById("albums-icon").addEventListener("mouseover", () => {
	document.getElementById("albums-navbar").classList.add("navbar-show")
})
document.getElementById("albums-navbar").addEventListener("mouseover", () => {
	document.getElementById("albums-navbar").classList.add("navbar-show")
})
document.getElementById("albums-navbar").addEventListener("mouseout", () => {
	document.getElementById("albums-navbar").classList.remove("navbar-show")
})

// ALBUMS TRIGGER

function slideMove() {
	setTimeout(() => {
		if (xDay == 0) {countdown(cnd)};
		const slide = document.getElementsByClassName("slide-bg")
		for (x = 0; x < slide.length; x++) {
		slide[x].classList.add("slide-on")
		}
	}, 500)
}
document.getElementById("navbar").addEventListener("click", event => {
	if (event.target.className == "albums-clk") {slideMove()}
})
document.addEventListener("wheel", () => {
	if (window.location.hash == "#Albums") {slideMove()}
})
document.addEventListener("keydown", event => {
	if (window.location.hash == "#Stories" && event.keyCode == 40) {slideMove()}
})





// ABOUT ME

function buddy() {
	var coeg = new Typed("#typed", {
	strings: ["KIM SOJUNG", "JUNG YERIN", "JUNG EUNBI", "CHOI YUNA", "HWANG EUNBI", "KIM YEWON", "YEOJA CHINGU", "CREATE WITH LOVE<br>FROM <span class='typed-style'>INDONESIAN</span> BUDDY"],
	typeSpeed: 80,
	backSpeed: 80,
	startDelay: 1000,
	backDelay: 500,
	smartBackspace: false,
	loop: false,
	onComplete: () => {}
})}
function fans() {
	var coeg = new Typed("#typed2", {
	strings: ["STAN TALENT ?", "STAN GFRIEND !"],
	typeSpeed: 80,
	backSpeed: 80,
	startDelay: 500,
	backDelay: 500,
	smartBackspace: true,
	loop: false,
	onComplete: () => {}
})}
function typed() {
	document.getElementById("typed-on").innerHTML = "buddy()"
	document.getElementById("credit-head").classList.add("credit-show")
}

document.addEventListener("wheel", () => {
	if (window.location.hash == "#About_Me") {typed()}
})
document.addEventListener("keydown", event => {
	if (window.location.hash == "#Awards" && event.keyCode == 40) {typed()}
})
document.getElementById("navbar").addEventListener("click", event => {
	if (event.target.className == "aboutme-clk") {typed()}
})
// document.addEventListener("wheel", (event) => {
// 	console.log(event.target)
// })

// THIS CODE MUST PLACE IN THE BOTTOM !!!
// ALBUMS BACKGROUND

