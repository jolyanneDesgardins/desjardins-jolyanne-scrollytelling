gsap.registerPlugin(ScrollTrigger), gsap.registerPlugin(DrawSVGPlugin);
const arrow = document.querySelector(".arrow");
let anim = gsap.from(".arrow", {
  duration: 1,
  repeat: -1,
  y: "-30",
  ease: "none",
  ease: "power1.in",
});
anim.play();
let timer,
  body = document.querySelector("body");
document.body.classList.remove("is-scrolling"),
  window.addEventListener("scroll", (e) => {
    clearTimeout(e),
      body.classList.add("is-scrolling"),
      (e = setTimeout(function () {
        body.classList.remove("is-scrolling");
      }, 1e3));
  });
const bulle = document.querySelector(".bulle-poisson");
let bullePoisson = gsap
  .timeline({
    scrollTrigger: {
      scrub: !0,
      pin: !0,
      start: "center center",
      end: "center top",
      trigger: "#chapitre-1",
    },
  })
  .from(".texte.chapitre-1.p2", { opacity: 0 })
  .from(".bulle-poisson", { x: "-100vw" }, "+=5")
  .to(".texte.chapitre-1.p2", { opacity: 0 })
  .to(".bulle-poisson", { x: "75vw", ease: "none", duration: "5" }, "+=1.25")
  .to(".bulle-poisson", { opacity: 0 })
  .to(".texte.chapitre-1.p1", { opacity: 0 })
  .to(".texte.chapitre-1.p2", { opacity: 100 })
  .from(".billy-parle", { opacity: 0 }, "+=8")
  .to(".billy-parle", { opacity: 100 })
  .from(".poisson-rose", { x: "30vw" })
  .to(".poisson-rose", { x: "-95vw" });
const queue = document.querySelector(".-blue-queue");
let queueAnim = gsap.to(".blue-queue", {
  rotate: -15,
  repeat: -1,
  yoyo: !0,
  ease: "none",
  duration: 1.5,
});
const nageoire = document.querySelector(".blue-nageoire");
let nageoireAnim = gsap.to(".blue-nageoire", {
  rotate: -2,
  repeat: -1,
  yoyo: !0,
  ease: "none",
  duration: 1.5,
});
const PoissonRouge = document.querySelector(".poisson-rouge");
let PoissonRougeAnim = gsap
  .timeline()
  .from(".poisson-rouge", { x: "30vw" })
  .to(".poisson-rouge", { x: "-95vw", ease: "none" }, "+=1.25");
PoissonRougeAnim.play();
const nage = document.querySelector(".billy-nage-chapitre4");
let billynageAnim = gsap
  .timeline({
    scrollTrigger: {
      scrub: !0,
     
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
const lola = document.querySelector(".lola-chapitre4");
let lolaNage = gsap
  .timeline({
    scrollTrigger: {
      scrub: !0,
      markers: !0,
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
      scrub: !0,
      markers: !0,
      pin: !0,
      start: "center 50%",
      end: "center 20%",
      trigger: "#chapitre-3",
    },
  })
  .from(".texte.chapitre-3.p1", { opacity: 100 })
  .from(".texte.chapitre-3.p1", { opacity: 0 })
  .from(".main-zoom", { opacity: 0, scale: "1" })
  .to(".main-zoom", { scale: "3", duration: "3", y: "-5vh" }, "+=4")
  .to(".main-zoom", { opacity: 0, scale: "1" })
  .to(".texte.chapitre-3.p2", { opacity: 100 })
  .to(".texte.chapitre-3.p1", { opacity: 0 });
const meduse = document.querySelector(".lola-chapitre4");
let meduseAnim = gsap
    .timeline({
      scrollTrigger: {
        scrub: !0,
        markers: !0,
        start: "center 60%",
        end: "center 20%",
        trigger: "#chapitre-5",
        scrub: !0,
      },
    })
    .from(".texte.chapitre-5.p1", { opacity: 100 })
    .to(".texte.chapitre-5.p2", { opacity: 0 })
    .to(".texte.chapitre-5.p1", { opacity: 0 })
    .to(".texte.chapitre-5.p2", { opacity: 100 }),
  flashAnim = gsap
    .timeline({
      scrollTrigger: {
        scrub: !0,
        pin: !0,
        markers: !0,
        start: "center center",
        end: "center 20%",
        trigger: "#chapitre-2",
      },
    })
    .from(".texte.chapitre-2.p2", { opacity: 0 })
    .from(".coffre", { opacity: 0 })
    .from(".flash", { scale: "0" })
    .to(".texte.chapitre-2.p1", { opacity: 0 })
    .to(".texte.chapitre-2.p2", { opacity: 100 })
    .to(".coffre", { opacity: 0 })
    .to(".flash", { scale: "5", duration: "3" }, "+=4")
    .to(".flash", { scale: "0" })
    .to(".coffre", { opacity: 100 })
    .from(".coffre-haut", { y: "-5vh" })
    .to(".medaillon", { zIndex: 5 })
    .to(".coffre-haut", { y: "-25vh" }),
  largeurTotaleDuDocument = document.body.scrollWidth;
gsap.to(".loin", {
  scrollTrigger: { scrub: !0, markers: !0, trigger: "#chapitre-4" },
  x: -0.25 * largeurTotaleDuDocument,
  ease: "none",
}),
  gsap.to(".moyen", {
    scrollTrigger: { scrub: !0, markers: !0, trigger: "#chapitre-4" },
    x: 0.4 * largeurTotaleDuDocument,
    ease: "none",
  }),
  gsap.to(".proche", {
    scrollTrigger: { scrub: !0, markers: !0, pin: !0, trigger: "#chapitre-4" },
    x: "25vw",
    x: 0.75 * largeurTotaleDuDocument,
    ease: "none",
  }),
  gsap.from("#star", { drawSVG: "0 0", duration: 10 }),
  gsap.registerPlugin(MorphSVGPlugin),
  gsap.to("#etoilefull", { morphSVG: "#etincelle", duration: 10 }),
  gsap.registerPlugin(MotionPathPlugin),
  gsap.to("#etoile", {
    duration: 5,
    repeat: 12,
    repeatDelay: 3,
    yoyo: !0,
    ease: "power1.inOut",
    motionPath: {
      path: "#path",
      align: "#path",
      autoRotate: !0,
      alignOrigin: [0.5, 0.5],
    },
  });
let chapitre6 = gsap
  .timeline({
    scrollTrigger: {
      scrub: !0,
      pin: !0,
      markers: !0,
      start: "center center",
      end: "center 20%",
      trigger: "#chapitre-6",
    },
  })
  .from(".texte.chapitre-6.p1", { opacity: 100, duration: 6 })
  .to(".texte.chapitre-6.p1", { opacity: 0 })
  .from(".texte.chapitre-6.p2", { opacity: 0 })
  .to(".texte.chapitre-6.p2", { opacity: 100 });
