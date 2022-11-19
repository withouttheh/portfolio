(function() {
	// FORM VALIDATION 

 	const form = document.getElementsByTagName('form')[0];
 	
 	const email = document.getElementById('email');
	const emailError = document.getElementById('email-error');

	const name = document.getElementById('name')
	const nameError = document.getElementById('name-error')

	const message = document.getElementById('message')
	const messageError = document.getElementById('message-error')

 	form.noValidate = true; 

 	const elements = form.elements

 	let isFormValid
    let valid = {}
 	let errors = {
 		name: 'Field is required',
	 	email: 'Field is required (e.g. user@domain.com)',
	 	message: 'Field is required'
	}

	form.addEventListener('submit', function(e) {

	  	for (i = 0; i < (elements.length - 1); i++) {
	  		valid[elements[i].id] = elements[i].validity.valid
	  		if (!valid[elements[i].id]) {
	  			showError(elements[i], errors[elements[i].id])
	  		} else {
	  			removeError(elements[i])
	  		}

	  	}

	    for (let field in valid) {
	    	if (!valid[field]) {
	    		isFormValid = false
	    		break
	    	}
	    	isFormValid = true
	    }

	    if (!isFormValid) {
	    	e.preventDefault()
	    }
	})

	name.addEventListener('input', function(e) {
    	if (name.validity.valid) {
	        removeError(name)
    	}
	})

	email.addEventListener('input', function(e) {
		let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    	if (regex.test(email.value)) {
         	removeError(email)
     	}
 	})

 	message.addEventListener('input', function(e) {
    	if (message.validity.valid) {
	       removeError(message)
    	}
	})

	const removeError = (el) => {

		let errEl = el.nextElementSibling
		errEl.classList.remove('error')
		errEl.textContent = '' 
	}

	const showError = (el, msg) => {

		let errEl = el.nextElementSibling
		errEl.classList.add('error')
		errEl.textContent = msg
	}

})();