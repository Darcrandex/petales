import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

export function initLenis() {
  const lenis = new Lenis({})

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  // 滚动的物理惯性
  gsap.ticker.lagSmoothing(0)

  // 动态配置图片的缩放原点
  document.querySelectorAll('img.photo:not([data-origin])').forEach((img, index) => {
    img.setAttribute('data-origin', index % 2 === 0 ? 'left' : 'right')
  })

  // 初始化图片的缩放，隐藏图片
  gsap.set('img.photo', { force3D: true, scale: 0 })

  // 注册 row 元素滚动
  const rows = document.querySelectorAll('.row')
  rows.forEach((row, index) => {
    const rowImages = row.querySelectorAll('img.photo')

    if (rowImages.length > 0) {
      row.id = `row-${index}`

      // 图片入屏动画
      ScrollTrigger.create({
        id: `scaleIn-${index}`,
        trigger: row,
        start: 'top bottom',
        end: 'bottom bottom-=10%',
        scrub: 1,
        invalidateOnRefresh: true,

        onUpdate(self) {
          if (self.isActive) {
            const progress = self.progress
            const easedProgress = Math.min(1, 1.5 * progress)
            const scaleValue = gsap.utils.interpolate(0, 1, easedProgress)

            rowImages.forEach((img) => {
              gsap.set(img, { scale: scaleValue, force3D: true })
            })

            if (progress > 0.95) {
              gsap.set(rowImages, { scale: 1, force3D: true })
            }
          }
        },

        onLeave() {
          gsap.set(rowImages, { scale: 1, force3D: true })
        },
      })

      // 图片出屏动画
      ScrollTrigger.create({
        id: `scaleOut-${index}`,
        trigger: row,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        scrub: 1,
        invalidateOnRefresh: true,

        onEnter() {
          gsap.set(rowImages, { scale: 1, force3D: true })
        },

        onUpdate(self) {
          if (self.isActive) {
            const progress = self.progress
            const scaleValue = gsap.utils.interpolate(1, 0, progress)

            rowImages.forEach((img) => {
              gsap.set(img, { scale: scaleValue, force3D: true, clearProps: progress === 1 ? 'scale' : '' })
            })
          } else {
            const isAbove = self.scroll() < self.start
            if (isAbove) {
              gsap.set(rowImages, { scale: 1, force3D: true })
            }
          }
        },
      })
    }
  })

  window.addEventListener('resize', () => {
    ScrollTrigger.refresh(true)
  })
}
