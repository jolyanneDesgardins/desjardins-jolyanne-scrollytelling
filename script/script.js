gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);

/* Animation Flèche
 **********************************************************************************************/

const arrow = document.querySelector(".arrow");
let anim = gsap.from(".arrow", {
  duration: 1,
  repeat: -1,
  y: "-30",
  ease: "none",
  ease: "power1.in",
});
anim.play();

/*Compteur Sprite Scroll
 ************************************************************************************************/
let timer;

let body = document.querySelector("body");

document.body.classList.remove("is-scrolling");

window.addEventListener("scroll", (timer) => {
  clearTimeout(timer);
  body.classList.add("is-scrolling");
  timer = setTimeout(function () {
    body.classList.remove("is-scrolling");
  }, 1000);
});
/*bulle et billy
 ********************************************************/

const bulle = document.querySelector(".bulle-poisson");

let bullePoisson = gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      pin: true,
      start: "center center",
      end: "center top",
      trigger: "#chapitre-1",
    },
  })
  .from(".texte.chapitre-1.p2", { opacity: 0 })
  .from(".bulle-poisson", { x: "-100vw" }, "+=5")

  .to(".bulle-poisson", { x: "75vw", ease: "none", duration: "5" }, "+=1.25")
  .to(".bulle-poisson", { opacity: 0 })
  .to(".texte.chapitre-1.p1", { opacity: 0 })
  .to(".texte.chapitre-1.p2", { opacity: 100 })
  .from(".billy-parle", { opacity: 0 }, "+=8")
  .to(".billy-parle", { opacity: 100 })
  .from(".poisson-rose", { x: "30vw" })

  .to(".poisson-rose", { x: "-95vw" });
/* Poisson rouge
 *****************************************************************************************************************************/
/*const Poisson = document.querySelector(".poisson-rose");
gsap .timeline()
.from('.poisson-rose', { 
  x: "-95vw", 
    scrollTrigger: {
      scrub: true,
     
  
     
         start: 'center bottom',
      end: 'center top',
      trigger: '#chapitre-1',
    }
  })*/
/*let PoissonAnim = gsap
  .timeline({
    scrollTrigger: {
      scrub: true,

      start: "center bottom",
      end: "center top",
      trigger: "#chapitre-1",
    },
  })

  .from(".poisson-rose", { x: "30vw" }, "8")

  .to(".poisson-rose", { x: "-95vw", ease: "none" }, "+=1.25");

PoissonAnim.play();
const parle = document.querySelector(".billy-parle");

let billyparle = gsap
  .timeline()

  .from(".billy-parle", { opacity: 0 }, "+=8")
  .to(".billy-parle", { opacity: 100 });*/

/* Animation Poisson Blue
 *******************************************************************************************************/

const queue = document.querySelector(".-blue-queue");
let queueAnim = gsap.to(".blue-queue", {
  rotate: -15,
  repeat: -1,
  yoyo: true,
  ease: "none",
  duration: 1.5,
});

const nageoire = document.querySelector(".blue-nageoire");
let nageoireAnim = gsap.to(".blue-nageoire", {
  rotate: -2,
  repeat: -1,
  yoyo: true,
  ease: "none",
  duration: 1.5,
});

/* Algue transition
 ***************************************************************************************/
/*const transition = document.querySelector(".transition-algue");

let transitionAnim = gsap
  .timeline({})

  .to(".transition-algue", { scale: 4, duration: 4 }, "+=3")

  .to("transition-algue", { scale: 4 });*/
/*Poisson Rouge
 ********************************************************/

const PoissonRouge = document.querySelector(".poisson-rouge");

let PoissonRougeAnim = gsap
  .timeline()

  .from(".poisson-rouge", { x: "30vw" })

  .to(".poisson-rouge", { x: "-95vw", ease: "none" }, "+=1.25");

PoissonRougeAnim.play();
/*billy
 ********************************************************/
const nage = document.querySelector(".billy-nage-chapitre4");

let billynageAnim = gsap
  .timeline({
    scrollTrigger: {
      scrub: true,

      markers: true,
      start: "center center",
      end: "center 20%",
      trigger: "#chapitre-4",
    },
  })

  .from(".billy-nage-chapitre4", { x: "-30vw" })

  .to(
    ".billy-nage-chapitre4",
    { x: "95vw", ease: "none", duration: "3" },
    "+=1.25"
  );

/*lola
 ********************************************************/

const lola = document.querySelector(".lola-chapitre4");

let lolaNage = gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      markers: true,

      start: "center center",
      end: "center 20%",
      trigger: "#chapitre-4",
    },
  })

  .from(".lola-chapitre4", { x: "-30vw" })

  .to(".lola-chapitre4", { x: "95vw", ease: "none", duration: "3" }, "+=1.25");

const main = document.querySelector(".main-zoom");

let mainZoom = gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      markers: true,
      pin: true,
      start: "center center",
      end: "center 20%",
      trigger: "#chapitre-3",
    },
  })
  .to(".texte.chapitre-3.p2", { opacity: 0 })
  .to(".texte.chapitre-3.p1", { opacity: 100 })
  .from(".main-zoom", { opacity: 0, scale: "1" })
  .to(".main-zoom", { opacity: 0, scale: "1" })
  .to(".main-zoom", { scale: "3", duration: "3", y: "-50vh", x: "50vw" }, "+=4")
  .to(".main-zoom", { opacity: 100, scale: "1" })
  .to(".texte.chapitre-3.p2", { opacity: 100 })
  .to(".texte.chapitre-3.p1", { opacity: 0 });
/*meduse ******/

const meduse = document.querySelector(".lola-chapitre4");

let meduseAnim = gsap
  .timeline({
    scrollTrigger: {
      scrub: true,

      markers: true,
      start: "center 60%",
      end: "center 20%",
      trigger: "#chapitre-5",
      toggleActions: "restart complete reverse",
    },
  })

  .from(".texte.chapitre-5.p1", { opacity: 100 })
  .to(".texte.chapitre-5.p2", { opacity: 0 })
  .from(".meduse", { y: "30vh" })

  .to(".meduse", { y: "-95vh", ease: "none", duration: "3" })
  .to(".texte.chapitre-5.p1", { opacity: 0 })
  .to(".texte.chapitre-5.p2", { opacity: 100 });

let flashAnim = gsap
  .timeline({
    scrollTrigger: {
      scrub: true,
      pin: true,
      markers: true,
      start: "center center",
      end: "center 20%",
      trigger: "#chapitre-2",
    },
  })
  .from(".coffre", { opacity: 0 })
  .from(".flash", { scale: "0" })
  .to(".coffre", { opacity: 0 })
  .to(".flash", { scale: "5", duration: "3" }, "+=4")
  .to(".flash", { scale: "0" })
  .to(".coffre", { opacity: 100 })
  .from(".coffre-haut", { y: "-5vh" })
  .to(".medaillon", { zIndex: 5 })
  .to(".coffre-haut", { y: "-25vh" });
/* let coffre = gsap
  .timeline()
  .from(".coffre", {opacity:0},"+=5")
  .to(".coffre", {opacity:100})
*/
/*let coffreHaut = gsap

  .timeline({
    scrollTrigger: {
      scrub: true,
      pin: true,
      markers: true,
      start: "center center",
      end: "center 20%",
      trigger: "#chapitre-2",
    },
  })
  .from(".coffre-haut", { y: "-5vh" })
  .to(".medaillon", { zIndex: 5 })
  .to(".coffre-haut", { y: "-25vh" });*/

let largeurTotaleDuDocument = document.body.scrollWidth;
gsap.to(".loin", {
  scrollTrigger: {
    scrub: true,
    markers: true,
    trigger: "#chapitre-4",
  },

  x: largeurTotaleDuDocument * -0.25,
  ease: "none",
});

gsap.to(".moyen", {
  scrollTrigger: {
    scrub: true,
    markers: true,

    trigger: "#chapitre-4",
  },
  x: largeurTotaleDuDocument * 0.4,
  ease: "none",
});

gsap.to(".proche", {
  scrollTrigger: {
    scrub: true,
    markers: true,
    pin: true,
    trigger: "#chapitre-4",
  },
  x: "25vw",
  x: largeurTotaleDuDocument * 0.75,
  ease: "none",
});
/*
gsap.to("#parallax-bg-1", {
  scrollTrigger: {
    scrub: true,
    markers: true,
  },
  y: hauteurTotaleDuDocument * -0.25,
  ease: "none",
});

gsap.to("#parallax-bg-2", {
  scrollTrigger: {
    scrub: true,
    markers: true,
  },
  y: hauteurTotaleDuDocument * -0.4,
  ease: "none",
});

gsap.to("#parallax-bg-3", {
  scrollTrigger: {
    scrub: true,
    markers: true,
  },
  y: hauteurTotaleDuDocument * -0.75,
  ease: "none",
});*/

gsap.from(
  "#star",

  {
    drawSVG: "0 0",
    duration: 10,
  }
);

gsap.registerPlugin(MorphSVGPlugin);

gsap.to("#etoilefull", {
  morphSVG: "#etincelle",
  duration: 10,
});
gsap.registerPlugin(MotionPathPlugin);

gsap.to("#etoile", {
  duration: 5,
  repeat: 12,
  repeatDelay: 3,
  yoyo: true,
  ease: "power1.inOut",
  motionPath: {
    path: "#path",
    align: "#path",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],
  },
});

/*gsap.to("#etoilefull", {
  motionPath: {
    path: "#path",
    align: "#path",
    start:0,
    end:1
  },
  duration: 4,
  repeat: -1,
  yoyo: true,
});*/
