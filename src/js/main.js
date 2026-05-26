import '../css/input.css'
import '../css/components/menu.css'
import '../css/components/overlay.css'
import '../css/components/modal.css'
import '../css/components/form.css'

import { initMenu } from './modules/menu.js'
import { initScrollNav, initBackToTop, initFrostedNav } from './modules/scroll.js'
import { initModal } from './modules/modal.js'
import { initForm } from './modules/form.js'
import { initVortex } from './modules/vortex.js'

const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = new Date().getFullYear()

const vortexCanvas = document.getElementById('vortex')
if (vortexCanvas) initVortex(vortexCanvas)

initMenu()
initScrollNav()
initBackToTop()
initFrostedNav()
initModal()
initForm()
