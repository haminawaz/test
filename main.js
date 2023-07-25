// ===== Show Menu =====

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// menu show

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// menu hidden
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// ===== Remove Menu Mobile =====

const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

// ===== Change Background header =====

const scrollHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);

// ===== Scroll section Active Link =====

const section = document.querySelectorAll('section[id]')

const scrollActive = () => {

  const scrollY = window.pageYOffset

section.forEach(current =>{
  const sectionHeight = current.offsetHeight
  const sectionTop = current.offsetTop - 58
  const sectionId = current.getAttribute('id')
  const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
    sectionsClass.classList.add('active-link')
  }else {
    sectionsClass.classList.remove('active-link')
  }

})
}



window.addEventListener('scroll', scrollActive)


// ===== Scroll Show Up =====

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

// ===== Scroll Reveal Animation =====

const sr = ScrollReveal({
  origin: 'top',
  distance : '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay:700, origin: 'bottom'})
sr.reveal(`.logos__img, .program__card, .pricing__card`, {interval: 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
sr.reveal(`.choose__content, .calculate__img`, {origin: 'right',})


// ===== Calculate js =====

const calculateForm = document.getElementById("calculate-form");
const calculateCm = document.getElementById("calculate-cm");
const calculateKg = document.getElementById("calculate-kg");
const calculateMessage = document.getElementById("calculate-message");

const calculateBmi = (e) => {
  e.preventDefault();

  //   check if the field has a value
  if (calculateCm.value === "" || calculateKg.value === "") {
    // add or remove color
    calculateMessage.classList.remove("color-green");
    calculateMessage.classList.add("color-red");

    // show message
    calculateMessage.textContent = "FIll in the Height and Weight 👨‍💻";

    // remove message in 3 seconds

    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 3000);
  } else {
    //  BMI Formula
    const cm = calculateCm.value / 100;
    const kg = calculateKg.value;
    const bmi = Math.round(kg / (cm * cm));

    // show health status
    if (bmi < 18.5) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = ` Your BMI is ${bmi} and you are Skinny 😔 `;
    } else if (bmi < 25) {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = ` Your BMI is ${bmi} and you are Healthy 🥳 `;
    } else {
      calculateMessage.classList.add("color-green");
      calculateMessage.textContent = ` Your BMI is ${bmi} and you are Overweight 😔 `;
    }

    //  To clear input field
    calculateCm.value = "";
    calculateKg.value = "";

    // Remove message 4 seconds
    setTimeout(() => {
      calculateMessage.textContent = "";
    }, 4000);
  }
};

calculateForm.addEventListener("submit", calculateBmi);

// ===== email js =====

const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')
const contactUser = document.getElementById('contact-user')

const sendEmail = (e) => {
e.preventDefault()

// check if the field has value 

if(contactUser.value === '') {
  // add or remove color 
  
  contactMessage.classList.remove('color-green')
  contactMessage.classList.add('color-red')

  // show message 
  contactMessage.textContent = 'You must enter your EMAIL 👆 '

  // remove message in 3 seconds 

  setTimeout (()=>{
    contactMessage.textContent = ''
  }, 3000)
} else{
   // service-IDBCursor, templat-IDBCursor, #form , Public-key 
 emailjs.sendForm('service_jcnarre', 'template_2ugadkl', '#contact-form', 'IbOUkzCBKiyjWIc4F').then(()=>{

  // show message and color 

contactMessage.classList.add('color-green');
contactMessage.textContent = 'You registered successfully 💪'

setTimeout(()=>{
  contactMessage.textContent = ''
}, 3000)

 }, (error) =>{
                     // mail sending error
    alert('OOPS! SOMETHING HAS FAILED...', error) 

 })

//  to clear input field 
 
  contactMessage.value = ''
}

}

contactForm.addEventListener('submit', sendEmail)

