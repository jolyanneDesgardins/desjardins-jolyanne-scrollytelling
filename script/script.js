gsap.registerPlugin(ScrollTrigger);
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
  .timeline( { scrollTrigger: {
    scrub: true,
  
       start: 'center bottom',
    end: 'center top',
    trigger: '.bulle-poisson',
  }})
  .from(".bulle-poisson", { x: "-100vw" },"+=5")

  .to(".bulle-poisson", { x: "75vw", ease: "none", duration: "5" }, "+=1.25")
  .to(".bulle-poisson", { opacity: 0 })
  .to(".texte.chapitre-1.p1", { opacity: 0 });

const parle = document.querySelector(".billy-parle");

let billyparle = gsap
  .timeline()

  .from(".billy-parle", { opacity: 0 }, "+=8")
  .to(".billy-parle", { opacity: 100 });

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

/* Poisson rouge
 *****************************************************************************************************************************/
const Poisson = document.querySelector(".poisson-rose");
gsap .timeline()
.from('.poisson-rose', { 
  x: "-95vw", 
    scrollTrigger: {
      scrub: true,
     
  
     
         start: 'center bottom',
      end: 'center top',
      trigger: '#chapitre-1',
    }
  })
/*let PoissonAnim = gsap
  .timeline()

  .from(".poisson-rose", { x: "30vw" }, "8")

  .to(".poisson-rose", { x: "-95vw", ease: "none" }, "+=1.25");

PoissonAnim.play();*/

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
  .timeline()

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
  .timeline()

  .from(".lola-chapitre4", { x: "-30vw" })

  .to(".lola-chapitre4", { x: "95vw", ease: "none", duration: "3" }, "+=1.25");

const main = document.querySelector(".main-zoom");

let mainZoom = gsap
  .timeline()

  .from(".main-zoom", { scale: "1" })

  .to(
    ".main-zoom",
    { scale: "3", duration: "3", y: "-105vh", x: "50vw" },
    "+=4"
  );
/*meduse ******/

const meduse = document.querySelector(".lola-chapitre4");

let meduseAnim = gsap
  .timeline()

  .from(".meduse", { y: "30vh" })

  .to(".meduse", { y: "-95vh", ease: "none", duration: "3" }, "+=1.25");

const flash = document.querySelector(".flash");

let flashAnim = gsap
  .timeline()

  .from(".flash", { scale: "0" }, "+=10")

  .to(".flash", { scale: "5", duration: "3" }, "+=4")
  .to(".flash", { scale: "0" });

 /* let coffre = gsap
  .timeline()
  .from(".coffre", {opacity:0},"+=5")
  .to(".coffre", {opacity:100})
*/
let coffreHaut= gsap

.timeline( { scrollTrigger: {
  scrub: true,
  markers: true,
     start: 'center center',
  end: 'center 50%',
  trigger: '#chapitre-2',
}})
  .from (".coffre-haut",{ y: "-5vh" })
  .to(".coffre-haut",{ y: "-20vh" })

