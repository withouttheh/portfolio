
























const validateRequired = (el) => {

	if (isRequired(el)) {
		let valid = !isEmpty(el);
		if (!valid) {
			setErrorMessage(el, 'Field is required')
		}
		return valid
	}
	return true
}

const isRequired = (el) => {
	return ((typeof el.required === 'boolean') && el.required || (typeof el.required === 'string'))
}

const isEmpty = (el) => {
	return !el.value || el.value == el.placeholder;
}

const validateTypes = (el) => {
	if (!el.value) {
		return true
	}
	let type = el.getAttribute('type')
	if (typeof validateType[type] === 'function') {
		return validateType[type](el)
	}
	else {
		return true
	}
}

let validateType = {
	email: (el) => {
		let valid = /[^©]+@[^@]+/.test(el.value);
		if (!valid) {
		 	setErrorMessage(el, 'Please enter a valid email');
		}
		return valid  
	}, 
}

const setErrorMessage = (el, message) => { 
 	$(el).data('errorMessage', message)
}

const showErrorMessage = (el) => {
	let $el = $(el)
	let $errorContainer = $el.siblings('.error')

	if(!$errorContainer.length) {
		$errorContainer = $('>span class="error"></span>').insertAfter($el)
	}
	$errorContainer.text($(el).data('errorMessage'))
}
