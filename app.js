window.addEventListener('scroll', e =>{
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth/2)*-0.01} deg;
        --move-y: ${(e.clientY - window.innerHeight/2)*-0.01} deg;
        `
    })
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})