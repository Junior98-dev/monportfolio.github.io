const btnMenu = document.querySelector('.btn-rond-menu')
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click',() => {
    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')
})

if(window.matchMedia('(max-width: 1300px)')){
    allItemNav.forEach(item => {
        item.addEventListener('click',() => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active');
        })
    })
}
// Animation écriture accueil

const txtAnim = document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
})
typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Moi c\'est Junior KOUNKOUD')
.pauseFor(300)
.typeString('<strong>, Développeur HTML5/CSS3-JavaScript</strong> !')
.pauseFor(1000)
.deleteChars(23)
.typeString('<span style="color: #27ae60;"> Java</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: #AE39ff;"> J2EE</span> !')
.pauseFor(1000)
.deleteChars(6)
.typeString('<span style="color: midnightblue;"> Java/Angular</span> !')
.pauseFor(1000)
.deleteChars(14)
.typeString('<span style="color: #ff6910;"> Full-Stack</span> !')
.start()

// Animation Contact

const input_fields = document.querySelectorAll('input');

for(let i = 0; i < input_fields.length; i++){
    let field = input_fields[i];

    field.addEventListener('input',(e) => {
        if(e.target.value !== ''){
            e.target.parentNode.classList.add('animation')
        }else if (e.target.value == ''){
            e.target.parentNode.classList.remove('animation')
        }
    })

}
// Animation GSAP + ScrollMagic

 const navbar = document.querySelector('.nav-gauche');
 const titre = document.querySelector('h1');
 const btn = document.querySelectorAll('.btn-acc');
 const btnMedia = document.querySelectorAll('.media');
 const btnRondAccueil = document.querySelector('.btn-rond');

 const TL1 = gsap.timeline({paused: true});

 TL1
 .to(navbar, {left: '0px', ease: Power3.easeOut, duration: 0.6})
 .from(titre, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4})
 .staggerFrom(btn, 1, {opacity: 0}, 0.2, '-=0.30')
 .staggerFrom(btnMedia, 1, {opacity: 0}, 0.2, '-=0.75')
 .from(btnRondAccueil, {y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.4}, '-=1')

 

 window.addEventListener('load', () =>{
    TL1.play();
 })