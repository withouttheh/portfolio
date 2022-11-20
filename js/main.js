(function() {

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

	const addListener = (btns) => { 
		for(let i = 0; i < btns.length; i++) {
			if (!btns[i]) {
				return false
			}
			btns[i].addEventListener("click", toggleMenu);	
		}
	} 

	const btns = [menuBtn, menu]
	addListener(btns)

// SCROLL TO ELEMENT

	const projects = document.getElementById('projects')
	const projectsBtn = document.getElementById('projects-btn')
	const projectsLink = document.getElementById('projects-link')

	const contact = document.getElementById('contact')
	const contactBtn = document.getElementById('contact-btn')
	const contactLink = document.getElementById('contact-link')

	const home = document.getElementById('home')
	const homeBtn = document.getElementById('home-btn')
	const homeLink = document.getElementById('home-link')


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

	const homeScroll = () => {
		home.scrollIntoView({ 
				behavior: 'smooth' 
			})
	}

	if (projectsBtn) {
		projectsBtn.addEventListener('click', () => {
			setTimeout(projectsScroll, 500)
		})
		projectsLink.addEventListener('click', () => {
			projectsScroll()
		})
	}


	if (contactBtn){
		contactBtn.addEventListener('click', () => { 
			setTimeout(contactScroll, 500)
		})

		contactLink.addEventListener('click', () => {
			contactScroll()
		})
	} 

	homeBtn.addEventListener('click', () => {
		homeScroll()
	})

// INTERSECTION OBSERVER

	const options = { threshold: 0 };
	const headerEl = document.getElementById("header");
	const mainEl = document.getElementById("main");

	const intersectionCallback = (entries) => {
	    const [entry] = entries;

	    if (!entry.isIntersecting) {
	         homeBtn.classList.add(
	            "enabled"
	        );
	    } else {
	    	homeBtn.classList.remove(
	            "enabled"
	        )
	    }
	};

	let observer = new IntersectionObserver(intersectionCallback, options);
	observer.observe(mainEl);

// MODAL
 
	const modal = document.getElementById('modal') 
	const modalOpenBtn = document.getElementById('form-link')
	const modalCloseBtn = document.getElementById('close-modal')

	if (!modal) {
		return false
	} else {
		modalOpenBtn.addEventListener('click', () => {
			modal.classList.add('open-modal')
		})

		modalCloseBtn.addEventListener('click', () => {
			modal.classList.remove('open-modal')
		})
	}

// DATE
 	const d = new Date();

	let year = d.getFullYear();

 	document.getElementById('year').textContent = year;

})();