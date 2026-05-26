const PARTICLE_COUNT = 280
const ARMS = 3
const MAX_R = 190
const TILT = 0.38
const STAR_COUNT = 110

function makeParticle(arm) {
  const t = Math.random()
  return {
    arm,
    angle: (arm / ARMS) * Math.PI * 2 + t * Math.PI * 3.6 + Math.random() * 0.4,
    r: t * MAX_R + 12,
    t,
    speed: (0.006 / (t * 0.85 + 0.15)) * (0.65 + Math.random() * 0.7),
    size: (1 - t * 0.8) * 2.4 + 0.3,
    hue: 210 + t * 70 + (Math.random() * 30 - 15),
    sat: 70 + Math.random() * 30,
    lit: 55 + Math.random() * 25,
    alpha: (0.85 - t * 0.45) * (Math.random() * 0.45 + 0.5),
    life: Math.random(),
    decay: 0.0008 + Math.random() * 0.0012,
  }
}

export function initVortex(canvas) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const ctx = canvas.getContext('2d')
  let W, H

  let mouseX = 0
  let mouseY = 0
  let vx = 0
  let vy = 0

  const stars = Array.from({ length: STAR_COUNT }, () => ({
    x: 0, y: 0, r: 0, a: 0, da: 0,
  }))

  const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) =>
    makeParticle(i % ARMS)
  )

  function initStars() {
    for (const s of stars) {
      s.x = Math.random() * W
      s.y = Math.random() * H
      s.r = Math.random() * 1.3 + 0.2
      s.a = Math.random() * 0.55 + 0.15
      s.da = (Math.random() * 0.008 + 0.002) * (Math.random() < 0.5 ? 1 : -1)
    }
  }

  function resize() {
    W = canvas.width = canvas.offsetWidth
    H = canvas.height = canvas.offsetHeight
    vx = W / 2
    vy = H / 2
    mouseX = W / 2
    mouseY = H / 2
    initStars()
  }

  window.addEventListener('resize', resize, { passive: true })
  resize()

  document.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect()
    mouseX = e.clientX - rect.left
    mouseY = e.clientY - rect.top
  }, { passive: true })

  let raf
  function tick() {
    raf = requestAnimationFrame(tick)

    // Smooth follow mouse
    vx += (mouseX - vx) * 0.04
    vy += (mouseY - vy) * 0.04

    // Motion blur trail
    ctx.fillStyle = 'rgba(5, 8, 22, 0.16)'
    ctx.fillRect(0, 0, W, H)

    // Stars
    for (const s of stars) {
      s.a += s.da
      if (s.a > 0.75 || s.a < 0.1) s.da *= -1
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255,255,255,${s.a})`
      ctx.fill()
    }

    // Central radial glow
    const glow = ctx.createRadialGradient(vx, vy, 0, vx, vy, 90)
    glow.addColorStop(0, 'rgba(79, 130, 255, 0.22)')
    glow.addColorStop(0.45, 'rgba(110, 60, 210, 0.08)')
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = glow
    ctx.fillRect(0, 0, W, H)

    // Vortex particles (2.5D tilted plane)
    for (const p of particles) {
      p.angle += p.speed
      p.life -= p.decay

      if (p.life <= 0) {
        const fresh = makeParticle(p.arm)
        Object.assign(p, fresh)
        p.life = 0.02 + Math.random() * 0.15
        continue
      }

      const fade = Math.min(p.life / 0.18, 1)
      const px = vx + Math.cos(p.angle) * p.r
      const py = vy + Math.sin(p.angle) * p.r * TILT

      ctx.beginPath()
      ctx.arc(px, py, p.size * fade, 0, Math.PI * 2)
      ctx.fillStyle = `hsla(${p.hue},${p.sat}%,${p.lit}%,${p.alpha * fade})`
      ctx.fill()
    }
  }

  tick()
  return () => cancelAnimationFrame(raf)
}
