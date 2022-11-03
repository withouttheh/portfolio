// SLIDE MENU 

// select dom items
const menuBtn = document.getElementById("burger");

const menu = document.getElementById("menu");

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
menu.addEventListener("click", toggleMenu);

// SCROLL TO ELEMENT

const projects = document.getElementById('projects')
const projectsBtn = document.getElementById('projects-btn')
const projectsLink = document.getElementById('projects-link')

const contact = document.getElementById('contact')
const contactBtn = document.getElementById('contact-btn')
const contactLink = document.getElementById('contact-link')

const contactScroll = () => {
	contact.scrollIntoView({ 
			behavior: 'smooth' 
		})
}

const projectsScroll = () => {
	projects.scrollIntoView({ 
			behavior: 'smooth' 
		})
}

projectsBtn.addEventListener('click', () => {
	setTimeout(projectsScroll, 500)
})

projectsLink.addEventListener('click', () => {
	projectsScroll()
})

contactBtn.addEventListener('click', () => { 
	setTimeout(contactScroll, 500)
})

contactLink.addEventListener('click', () => { 
	contactScroll()
})