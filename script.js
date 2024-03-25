function locomotiveScroll(){

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('.main', {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector('.main').style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

locomotiveScroll();

function heroPageAnimation(){
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

}

heroPageAnimation();


function section2Animation(){
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
            start: "top top",
            end: "bottom 1%",
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
            start: "top top",
            end: "bottom 1%",
            // markers: true,
            scrub: 2
        },
        x: 800,
        duration: 5,
    })
}

section2Animation();


function section3Animation(){
    
    gsap.from(".section3>.up>.top>h1, .section3>.up>.top>.top-right>.img, .section3>.up>.top>.top-right>button, .section3>.up>.bottom>.left-p>p, .section3>.up>.bottom>.right-h1>h1",{
        scrollTrigger:{
            scroller: ".main",
            trigger: ".section3",
            start: "top 70%",
            end: "bottom bottom",
            // markers: true
        },
        opacity: 0,
        duration: 1.5,
        stagger: .1,
        ease: "elastic.out(1, .8)",
        x: 200
    })

    gsap.to(".section3 .up>.top",{
        scrollTrigger: {
            scroller: ".main",
            trigger: ".section3>.up>.top",
            start: "top 15%",
            end: "bottom 16%",
            // markers: true,
            scrub: 2
        },
        x: 100,
        pin: "true",
        duration: 2,
    })

    gsap.to(".section3 .up>.bottom",{
        scrollTrigger: {
            scroller: ".main",
            trigger: ".section3>.up>.top",
            start: "top 13%",
            end: "bottom 14%",
            // markers: true,
            scrub: 2
        },
        x: -100,
        pin: "true",
        duration: 2,
    })

    gsap.from(".section3>.diamond>hr",{
        scrollTrigger:{
            scroller: ".main",
            trigger: ".section3>.diamond",
            start: "top 70%",
            end: "bottom bottom",
            // markers: true
        },
        opacity: 0,
        width: "100%",
        duration: 1,
        delay: 1,
        stagger: .1,
        ease: "elastic.out(1, .8)",
    })

    gsap.from(" .section3>.diamond>.circleLeft, .section3>.diamond>.circleRight",{
        scrollTrigger:{
            scroller: ".main",
            trigger: ".section3>.diamond",
            start: "top 70%",
            end: "bottom bottom",
            // markers: true
        },
        opacity: 0,
        scale: 1.2,
        left: "50%",
        duration: 1,
        delay: 1,
        stagger: .1,
        ease: "elastic.out(.3, .9)",
    })
    
    gsap.from(".section3>.diamond>.diamond-img img",{
        scrollTrigger:{
            scroller: ".main",
            trigger: ".section3>.diamond",
            start: "top 70%",
            end: "bottom bottom",
            autoAlpha: 1
            // markers: true
        },
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: {
            from: "center",
            amount: 0.5
        },
        scale: .5,
        ease: "elastic.out(1, .7)",
    })

    gsap.from(".section3>.diamond>.diamond-img>.img>h2",{
        scrollTrigger:{
            scroller: ".main",
            trigger: ".section3>.diamond",
            start: "top 70%",
            end: "bottom bottom",
            autoAlpha: 1
            // markers: true
        },
        opacity: 0,
        duration: 2,
        stagger: {
            from: "center",
            amount: 0.5
        },
        scale: .95,
        y: 150, 
        ease: "elastic.out(1, .7)",
    })

}

section3Animation();

//  gsap.to(".diamond-img .c",{
//     x:-180,
//     scale:1.2,
//     rotate:360,
//     scrollTrigger: {
//         scroller: ".main",
//         trigger: ".diamond-img .c",
//         start: "top 90%",
//         end: "bottom 70%",
//         // markers: true,
//         scrub: 2
//     },
   
// })
// gsap.to(".diamond-img .s",{
//     x:-180,
//     scale:1,
//     scrollTrigger: {
//         scroller: ".main",
//         trigger: ".diamond-img .s",
//         // start: "top 20%",
//         start: "top 90%",

//         end: "bottom 70%",
//         // markers: true,
//         scrub: 2
//     },
// })
// gsap.to(".diamond-img .w",{
//     x:-140,
//     scale:1,
//     scrollTrigger: {
//         scroller: ".main",
//         trigger: ".diamond-img .w",
//         // start: "top 20%",
//         start: "top 90%",

//         end: "bottom 70%",
//         // markers: true,
//         scrub: 2
//     },
// })


// gsap.to(".diamond-img .a",{
//     x:730,
//     scale:1,
//     scrollTrigger: {
//         scroller: ".main",
//         trigger: ".diamond-img .a",
//         // start: "top 20%",
//         start: "top 90%",

//         end: "bottom 70%",
//         // markers: true,
//         scrub: 2
//     },
//     // opacity: 0
// })

// gsap.to(".diamond-img .z",{
//     x:-180,
//     scale:1,
//     scrollTrigger: {
//         scroller: ".main",
//         trigger: ".diamond-img .z",
//         // start: "top 20%",
//         start: "top 90%",

//         end: "bottom 70%",
//         // markers: true,
//         scrub: 2
//     },
// })

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


let diamondContainer = document.querySelector('.diamond-img');

diamondContainer.addEventListener('click', function(e) {
    // let clicked = console.log(e.target.id);

    if(e.target.id == "one"){
        diamondContainer.innerHTML = `<div class="img" id="four">                      
                                            <img class="four" src="Assets/imgs/princess.png" alt="">
                                            <h2>Princess</h2>
                                        </div>
                                        <div class="img" id="five">                      
                                            <img class="five" src="Assets/imgs/pear.png" alt="">
                                            <h2>Pear</h2>
                                        </div>
                                        <div class="img" id="one">                      
                                            <img class="one center" src="Assets/imgs/oval.png" alt="">
                                            <h2 class="text">Oval</h2>
                                        </div>
                                        <div class="img" id="two">                      
                                            <img class="two" src="Assets/imgs/cushion.png" alt="">
                                            <h2>Cushion</h2>
                                        </div>
                                        <div class="img" id="three">                      
                                            <img class="three" src="Assets/imgs/round.png" alt="">
                                            <h2>Round</h2>
                                        </div>
                                        `

    }

    if(e.target.id == "two"){
        diamondContainer.innerHTML = ` <div class="img" id="five">                      
                                            <img class="five" src="Assets/imgs/pear.png" alt="">
                                            <h2>Pear</h2>
                                        </div>
                                        <div class="img" id="one">                      
                                            <img class="one" src="Assets/imgs/oval.png" alt="">
                                            <h2>Oval</h2>
                                        </div>
                                        <div class="img" id="two">                      
                                            <img class="two center" src="Assets/imgs/cushion.png" alt="">
                                            <h2 class="text">Cushion</h2>
                                        </div>
                                        <div class="img" id="three">                      
                                            <img class="three" src="Assets/imgs/round.png" alt="">
                                            <h2>Round</h2>
                                        </div>
                                        <div class="img" id="four">                      
                                            <img class="four" src="Assets/imgs/princess.png" alt="">
                                            <h2>Princess</h2>
                                        </div>
                                        `
    }

    if(e.target.id == "three"){
        diamondContainer.innerHTML = ` <div class="img" id="one">                      
                                            <img class="one" src="Assets/imgs/oval.png" alt="">
                                            <h2>Oval</h2>
                                        </div>
                                        <div class="img" id="two">                      
                                            <img class="two" src="Assets/imgs/cushion.png" alt="">
                                            <h2>Cushion</h2>
                                        </div>
                                        <div class="img" id="three">                      
                                            <img class="three center" src="Assets/imgs/round.png" alt="">
                                            <h2 class="text">Round</h2>
                                        </div>
                                        <div class="img" id="four">                      
                                            <img class="four" src="Assets/imgs/princess.png" alt="">
                                            <h2>Princess</h2>
                                        </div>
                                        <div class="img" id="five">                      
                                            <img class="five" src="Assets/imgs/pear.png" alt="">
                                            <h2>Pear</h2>
                                        </div>
                                        `
    }

    if(e.target.id == "four"){
        diamondContainer.innerHTML = ` 
                                        <div class="img" id="two">                      
                                            <img class="two" src="Assets/imgs/cushion.png" alt="">
                                            <h2>Cushion</h2>
                                        </div>
                                        <div class="img" id="three">                      
                                            <img class="" src="Assets/imgs/round.png" alt="">
                                            <h2>Round</h2>
                                        </div>
                                        <div class="img" id="four">                      
                                            <img class="four center" src="Assets/imgs/princess.png" alt="">
                                            <h2 class="text">Princess</h2>
                                        </div>
                                        <div class="img" id="five">                      
                                            <img class="five" src="Assets/imgs/pear.png" alt="">
                                            <h2>Pear</h2>
                                        </div>
                                        <div class="img" id="one">                      
                                            <img class="one" src="Assets/imgs/oval.png" alt="">
                                            <h2>Oval</h2>
                                        </div>
                                        `
    }

    if(e.target.id == "five"){
        diamondContainer.innerHTML = ` 
                                        <div class="img" id="three">                      
                                            <img class="" src="Assets/imgs/round.png" alt="">
                                            <h2>Round</h2>
                                        </div>
                                        <div class="img" id="four">                      
                                            <img class="four" src="Assets/imgs/princess.png" alt="">
                                            <h2>Princess</h2>
                                        </div>
                                        <div class="img" id="five">                      
                                            <img class="five  center" src="Assets/imgs/pear.png" alt="">
                                            <h2 class="text">Pear</h2>
                                        </div>
                                        <div class="img" id="one">                      
                                            <img class="one" src="Assets/imgs/oval.png" alt="">
                                            <h2>Oval</h2>
                                        </div>
                                        <div class="img" id="two">                      
                                            <img class="two" src="Assets/imgs/cushion.png" alt="">
                                            <h2>Cushion</h2>
                                        </div>
                                        `
    }

    gsap.from(".section3>.diamond>.diamond-img>.img>img",{
        scale: .5,
        opacity: 0,
        stagger: {
            from: "center",
            amount: 0.5
        },
        duration: 1.5,
        ease: "elastic.out(1, .7)",
    })
    gsap.from(".section3>.diamond>hr, .section3>.diamond>.circleRight, .section3>.diamond>.circleLeft",{
        opacity: 0,
        scale: .9,
        stagger: .1,
        duration: .7, 
        delay: .7,
    })
    gsap.from(".section3>.diamond>.diamond-img>.img>h2",{
        opacity: 0,
        duration: 2,
        stagger: {
            from: "center",
            amount: 0.5
        },
        scale: .5,
        y: 50, 
        ease: "elastic.out(1, .7)",
    })

})
