window.onload = () => {
    gsap.to(".animation-text1-left", {
        scrollTrigger: {
            trigger: ".animation-text1-left",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        x: -887,
        duration: 10,    
    }) 

    gsap.to(".animation-icones-top", {
        scrollTrigger: {
            trigger: ".animation-icones-top",
            start: "top 120%",
            end: "bottom 130%",
            scrub: 0.5,
        },
    
        y: -500,
        duration: 10,    
    }) 

    gsap.to(".animation-text2-right", {
        scrollTrigger: {
            trigger: ".animation-text2-right",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        x: 887,
        duration: 10,    
    })

    gsap.to(".animation-text3-right", {
        scrollTrigger: {
            trigger: ".animation-text3-right",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        x: 930,
        duration: 10,    
    }) 
    
    gsap.to(".animation-grafica1-opa", {
        scrollTrigger: {
            trigger: ".animation-grafica1-opa",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        opacity: 1,
        duration: 10,    
    })

    gsap.to(".animation-grafica2-opa", {
        scrollTrigger: {
            trigger: ".animation-grafica2-opa",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        opacity: 1,
        duration: 10,    
    })

    gsap.to(".animation-icon1-left", {
        scrollTrigger: {
            trigger: ".animation-icon1-left",
            start: "top 90%",
            end: "bottom 80%",
            scrub: 0.5,
        },
    
        x: -375,
        duration: 10,    
    }) 

    gsap.to(".animation-icon2-right", {
        scrollTrigger: {
            trigger: ".animation-icon2-right",
            start: "top 90%",
            end: "bottom 80%",
            scrub: 0.5,
        },
    
        x: 375,
        duration: 10,    
    }) 

    gsap.to(".animation-text5-left", {
        scrollTrigger: {
            trigger: ".animation-text5-left",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        x: -887,
        duration: 10,    
    }) 

    gsap.to(".animation-text6-left", {
        scrollTrigger: {
            trigger: ".animation-text6-left",
            start: "top 100%",
            end: "bottom 100%",
            scrub: 0.5,
        },
    
        x: -887,
        duration: 10,    
    })
}