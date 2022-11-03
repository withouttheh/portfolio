const sliderWeb = document.getElementById('slider-web')
const sliderData = document.getElementById('slider-data')
const webBtn = document.getElementById('web-btn')
const dataBtn = document.getElementById('data-btn')

const changeSlide = () => {
	console.log('Hi')
} 

webBtn.addEventListener('click', changeSlide)
dataBtn.addEventListener('click', changeSlide)

// select dom items
const menuBtn = document.getElementById("burger");

const menu = document.getElementById("menu");

const topBun = document.getElementById(".top-bun");
const btmBun = document.getElementById(".bottom-bun");

// Set the initial state of the menu
let showMenu = false;

const toggleMenu = () => {
	if (!showMenu) {
		menuBtn.classList.add("open");
		menu.classList.add("show");

		// Reset the menu state
		showMenu = true;
	} else {
		menuBtn.classList.remove("open");
		menu.classList.remove("show");

		// Reset the menu state
		showMenu = false;
		}
}

menuBtn.addEventListener("click", toggleMenu);

