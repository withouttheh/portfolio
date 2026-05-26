export function initForm() {
  const form = document.querySelector('form')
  if (!form) return

  const fields = {
    name: {
      el: document.getElementById('name'),
      error: document.getElementById('name-error'),
      msg: 'Field is required',
    },
    email: {
      el: document.getElementById('email'),
      error: document.getElementById('email-error'),
      msg: 'Field is required (e.g. user@domain.com)',
    },
    message: {
      el: document.getElementById('message'),
      error: document.getElementById('message-error'),
      msg: 'Field is required',
    },
  }

  const EMAIL_REGEX =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const showError = ({ error, msg }) => {
    error.classList.add('error')
    error.textContent = msg
  }

  const clearError = ({ error }) => {
    error.classList.remove('error')
    error.textContent = ''
  }

  form.noValidate = true

  form.addEventListener('submit', (e) => {
    let isValid = true
    for (const key of Object.keys(fields)) {
      const field = fields[key]
      if (!field.el.validity.valid) {
        showError(field)
        isValid = false
      } else {
        clearError(field)
      }
    }
    if (!isValid) e.preventDefault()
  })

  fields.name.el?.addEventListener('input', () => {
    if (fields.name.el.validity.valid) clearError(fields.name)
  })

  fields.email.el?.addEventListener('input', () => {
    if (EMAIL_REGEX.test(fields.email.el.value)) clearError(fields.email)
  })

  fields.message.el?.addEventListener('input', () => {
    if (fields.message.el.validity.valid) clearError(fields.message)
  })
}
