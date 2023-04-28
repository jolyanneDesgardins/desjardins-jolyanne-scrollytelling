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

let PoissonAnim = gsap
  .timeline()

  .from(".poisson-rose", { x: "30vw" })

  .to(".poisson-rose", { x: "-95vw", ease: "none" }, "+=1.25");

PoissonAnim.play();

/* Algue transition
 ***************************************************************************************/
const transition = document.querySelector(".transition-algue");

let transitionAnim = gsap
  .timeline({})

  .to(".transition-algue", { scale: 4, duration: 4 }, "+=3")

  .to("transition-algue", { scale: 4 });
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
/*bulle et billy
 ********************************************************/

/*const bulle = document.querySelector(".bulle-poisson");

let bullePoisson = gsap
  .timeline()

  .from(".bulle-poisson", { x: "-30vw" })

  .to(".bulle-poisson", { x: "75vw", ease: "none", duration: "3" }, "+=1.25")
  .to(".bulle-poisson", { opacity: 0 });*/
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
    { scale: "5", duration: "3", y: "-105vh", x: "-50vw" },
    "+=4"
  );
/*meduse ******/

const meduse = document.querySelector(".lola-chapitre4");

let meduseAnim = gsap
  .timeline()

  .from(".meduse", { y: "30vh" })

  .to(".meduse", { y: "-95vh", ease: "none", duration: "3" }, "+=1.25");
