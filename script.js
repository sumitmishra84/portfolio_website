
const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("animate-toggle");
});

/*======================RESUME===================*/
const accordionItems = document.querySelectorAll(".resume-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".resume-header"),
    content = item.querySelector(".resume-content"),
    icon = item.querySelector(".resume-icon i");

  header.addEventListener("click", () => {
    const isOpen = item.classList.toggle("accordion-open");

    content.style.height = isOpen ? content.scrollHeight + "px" : "0";
    icon.className = isOpen ? "ri-subtract-line" : "ri-add-line";

    accordionItems.forEach((otherItem) => {
      if (
        otherItem !== item &&
        otherItem.classList.contains("accordion-open")
      ) {
        otherItem.querySelector(".resume-content").style.height = "0";
        otherItem.querySelector(".resume-icon i").className = "ri-add-line";
        otherItem.classList.remove("accordion-open");
      }
    });
  });
});




/*======================Background color===================*/
const scrollHeader = () => {
  const header = document.getElementById('header');

  window.scrollY >= 20
    ? header.classList.add('bg-header')
    : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);



/*======================REMOVE MENU MOBILE===================*/
const navLink =document.querySelectorAll('.nav-link');

const  linkAction =()=>{
  const navManu=document.getElementById('nav-menu');

  navToggle.classList.remove('animate-toggle');
  navManu.classList.remove('show-menu')
};

navLink.forEach((n)=>n.addEventListener('click', linkAction))




/*======================COLOR===================*/

/*======================The COLORS===================*/
const colors = document.querySelectorAll(".style-switcher-color");

colors.forEach((color) => {
  color.onclick = () => {
    const activeColor = color.style.getPropertyValue("--hue");

    colors.forEach((c) => c.classList.remove("active-color"));
    color.classList.add("active-color");

    document.documentElement.style.setProperty("--hue", activeColor);
  };
});


/*======================SCROLL SECTIONS ACTIVE LINK===================*/
const sections=document.querySelectorAll('section[id]');
const scrollActive =()=>{
  const scrollY=window.pageYOffset;

  sections.forEach((current)=>{
    const sectionHeight=captureEvents.offsetHeight,
    sectionTop=current.offsetTop  - 58,
    sectionId=current.getAttribute('id'),
    sectionClass=document.querySelector('.nav-menu a[href*='+ sectionId + ']')

    if(scrollY>sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')
    }else{
      sectionClass.classList.remove('active-link')
    }
  });
};


window.addEventListener('load', scrollActive);



/*======================SERVICES SWIPER===================*/

var servicesSwiper = new Swiper(".services-swiper", {
  spaceBetween: 40, // Yeh cards ke beech ka gap set karta hai
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

/*======================MIXITUP FILTER PORTFOLIO ===================*/
var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mix", // ✅ correct
  },
  animation: {
    duration: 300,
  },
});

// ACTIVE WORK

const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach((a) => {
    a.classList.remove("active-work");
  });

  this.classList.add("active-work");
}
linkWork.forEach((a) => a.addEventListener("click", activeWork));

/*======================TESTIMONIALS SWIPER===================*/
var servicesSwiper = new Swiper(".testimonials-swiper", {
  spaceBetween: 40, // Yeh cards ke beech ka gap set karta hai
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

/*======================EMAIL JS ===================*/
// Select all elements correctly
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementsByName("name")[0],
  contactEmail = document.getElementsByName("email")[0],
  contactSubject = document.getElementsByName("subject")[0],
  contactMessage = document.getElementsByName("message")[0],
  message = document.getElementById("message");

// Send email function
const sendEmail = (e) => {
  e.preventDefault();

  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactSubject.value === "" ||
    contactMessage.value === ""
  ) {
    message.classList.remove("color-first");
    message.classList.add("color-red");
    message.textContent = "Write all the input fields";

    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_oubijm9", // ✅ Your EmailJS Service ID
        "template_w0muwcn", // ✅ Your Template ID
        "#contact-form", // ✅ Form selector
        "buS4AOHuQ4QUE3Tq0" // ✅ Your Public Key
      )
      .then(
        () => {
          message.classList.remove("color-red");
          message.classList.add("color-first");
          message.textContent = "Message sent successfully!";

          setTimeout(() => {
            message.textContent = "";
          }, 5000);
        },
        (error) => {
          alert("Oops! Something went wrong...", error);
        }
      );

    // Clear fields after submit
    contactName.value = "";
    contactEmail.value = "";
    contactSubject.value = "";
    contactMessage.value = "";
  }
};

// Add event listener to form
contactForm.addEventListener("submit", sendEmail);

/*======================STYLE SWITCHER ===================*/

const styleSwitcher = document.getElementById("style-switcher");
const switcherToggle = document.getElementById("switcher-toggle"); // ✔️ Corrected
const switcherClose = document.getElementById("switcher-close");

// Open switcher on settings icon click
switcherToggle.addEventListener("click", () => {
  styleSwitcher.classList.add("show-switcher");
});

// Close switcher on close button click
switcherClose.addEventListener("click", () => {
  styleSwitcher.classList.remove("show-switcher");
});



/*======================Light/Dark Mode===================*/
document.querySelectorAll('input[name="body-theme"]').forEach((input) => {
  input.addEventListener("change", () => {
    if (input.value === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
});







