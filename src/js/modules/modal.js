export function initModal() {
  const modal = document.getElementById('modal')
  if (!modal) return

  document.getElementById('form-link')?.addEventListener('click', () =>
    modal.classList.add('open-modal')
  )
  document.getElementById('close-modal')?.addEventListener('click', () =>
    modal.classList.remove('open-modal')
  )
}
