const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');

const burgerBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

function handleNav() {
    nav.classList.toggle('nav--active');

    burgerBtnBars.classList.remove('black-bars-color')

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active');
        });
    });

    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () =>{
    let delaytime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delaytime + 's';
        delaytime++;
    })
     
}


const handleObserver = () => {

    const currentSection = window.scrollY;

    allSections.forEach(section =>{

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
            burgerBtnBars.classList.add('black-bars-color')
        } else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
            burgerBtnBars.classList.remove('black-bars-color')
        }

    })
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();

navBtn.addEventListener('click', handleNav)

window.addEventListener('scroll', handleObserver)