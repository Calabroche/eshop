

setTimeout(loaderFadeOut, 2000);

function loaderFadeOut() {
  let loader = document.querySelector('.loader-layer');
  loader.style.opacity = 0;
  loader.style.width = 0;
  loader.style.height = 0;
};

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 0.2 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".big-text1", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");



/*Pour la section toucan. 'Dezooming'

const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider1");

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "90%", ease: Power2.easeInOut })

.fromTo(
    hero, 
    1.2,
    { width : "100%"},
    { width: "90%", ease: Power2.easeInOut }
    ) 
.fromTo(slider, 1.2, { x: "-100%" }, { x: '0%', ease: Power2.easeInOut}, "-=1.2 ");
*/
