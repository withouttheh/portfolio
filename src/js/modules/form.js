const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const FIELDS = {
  name: { msg: 'Field is required' },
  email: { msg: 'Field is required (e.g. user@domain.com)' },
  message: { msg: 'Field is required' },
}

function showError(errorEl, msg) {
  errorEl.classList.add('error')
  errorEl.textContent = msg
}

function clearError(errorEl) {
  errorEl.classList.remove('error')
  errorEl.textContent = ''
}

export function initForm() {
  const form = document.querySelector('form')
  if (!form) return

  const resolved = Object.fromEntries(
    Object.entries(FIELDS).map(([id, meta]) => [
      id,
      {
        el: document.getElementById(id),
        error: document.getElementById(`${id}-error`),
        msg: meta.msg,
      },
    ])
  )

  form.noValidate = true

  form.addEventListener('submit', (e) => {
    let isValid = true
    for (const { el, error, msg } of Object.values(resolved)) {
      if (!el.validity.valid) {
        showError(error, msg)
        isValid = false
      } else {
        clearError(error)
      }
    }
    if (!isValid) e.preventDefault()
  })

  resolved.name.el?.addEventListener('input', () => {
    if (resolved.name.el.validity.valid) clearError(resolved.name.error)
  })

  resolved.email.el?.addEventListener('input', () => {
    if (EMAIL_REGEX.test(resolved.email.el.value)) clearError(resolved.email.error)
  })

  resolved.message.el?.addEventListener('input', () => {
    if (resolved.message.el.validity.valid) clearError(resolved.message.error)
  })
}
