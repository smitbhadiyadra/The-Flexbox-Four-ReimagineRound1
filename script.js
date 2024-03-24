function locomotiveScroll(){

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('[data-scroll-container]', {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector('[data-scroll-container]').style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

locomotiveScroll();

let tl = gsap.timeline();

tl.from("nav,nav>.logo>img, nav>.logo>a",{
    opacity: 0,
    duration: 2.5,
    stagger: .06,
    y: -30,
    delay: .3,
    ease: "elastic.out(1, .5)",
},"anime")
.from("nav>.buttons>.search, nav>.buttons>.shop, nav>.buttons>.login",{
    opacity: 0,
    duration: 2.5,
    stagger: .06,
    x: 50,
    delay: 1.2,
    ease: "elastic.out(1, .5)",
},"anime")
.from(".hero>.container",{
    opacity: 0,
    duration: 1.5,
    scale: .8,
    stagger: .06,
    y: 200,
    delay: 1,
    ease: "elastic.out(.7, .7)",
},"anime")
.from(".hero>h3, .hero>h1, .hero>.buttons>.order, .hero>.buttons>.collection",{
    opacity: 0,
    duration: 1.9,
    stagger: .08,
    y: 50,
    delay: 1.4,
    ease: "elastic.out(1, .5)",
},"anime")



gsap.from(".section2>.left, .section2>.right, .section2>.left>.box>.circle, .section2>.left>.box>.halfCircle, .section2>.left>.box>.overlayArrow, .section2>.left>i, .section2>.left>h1,  .section2>.right>i,  .section2>.right>h1>  .section2>.right .box",{
    scrollTrigger:{
        scroller: ".main",
        trigger: ".section2",
        start: "top 70%",
        end: "bottom bottom",
        // markers: true
    },
    opacity: 0,
    duration: 1.5,
    stagger: .1,
    ease: "elastic.out(1, .8)",
    y: 100
})

gsap.to(".section2>.left",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section2",
        start: "top 20%",
        end: "bottom 20%",
        // markers: true,
        scrub: 2
    },
    x: -1200,
    duration: 5,
})
gsap.to(".section2>.right",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".section2",
        start: "top 20%",
        end: "bottom 20%",
        // markers: true,
        scrub: 2
    },
    x: 800,
    duration: 5,
})





var swiper = new Swiper(".mySwiper", {
    fadeEffect: { crossFade: true },
    virtualTranslate: true,
    autoplay: {
        delay: 3000
    },
    speed: 2000, 
    slidersPerView: 1,
    effect: "fade"
  });