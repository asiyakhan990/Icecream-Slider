// GSAP setup
gsap.registerPlugin(ScrollTrigger);

// Intro animation
window.addEventListener("load", () => {
  const h2 = document.querySelector(".hero h2");
  const ice = document.querySelector(".ice");
  const h3 = document.querySelector(".hero-text h3");
  const p = document.querySelector(".hero-text p");

  gsap.set([h2, ice, h3, p], { opacity: 0 });
  gsap.set(h2, { x: 200 });
  gsap.set(ice, { y: 200 });
  gsap.set([h3, p], { y: 50 });

  const tl = gsap.timeline();
  tl.to(h2, { x: 0, opacity: 1, duration: 1, ease: "power3.out" })
    .to(ice, { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.5")
    .to(h3, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "+=0.2")
    .to(p, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.3");
});

// Hero scroll movement
const tlHero = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    endTrigger: ".section2",
    end: "top+=100 top",
    scrub: true,
  },
});
tlHero
  .to(".ice", { x: -400, y: 830, ease: "power1.out" }, 0)
  .to(".chat", { x: 40, y: 680, ease: "power1.out" }, 0)
  .to(".chat1", { x: -1000, y: 850, ease: "power1.out" }, 0)
  .to(".chat2", { x: -780, y: 1150, ease: "power1.out" }, 0)
  .to(".ice", { x: -10, y: 1600, ease: "power1.out" });

// Section 1 text animation
gsap.from(".section1-text h3", {
  scrollTrigger: {
    trigger: ".section1",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power3.out",
});
gsap.from(".section1-text p", {
  scrollTrigger: {
    trigger: ".section1",
    start: "top 80%",
    toggleActions: "play none none none",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
});

// Section 2 rotation animations
gsap.fromTo(
  ".three",
  { rotate: -180 },
  {
    rotate: -270,
    duration: 1.8,
    ease: "power2.out",
    transformOrigin: "left bottom",
    scrollTrigger: {
      trigger: ".section2",
      start: "top 95%",
      toggleActions: "play reverse play reverse",
    },
  }
);
gsap.fromTo(
  ".two",
  { rotate: -360 },
  {
    rotate: -270,
    duration: 1.8,
    ease: "power2.inOut",
    transformOrigin: "right bottom",
    scrollTrigger: {
      trigger: ".section2",
      start: "top 95%",
      toggleActions: "play reverse play reverse",
    },
  }
);
