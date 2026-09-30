/* =====================================================
   VICKY PORTFOLIO
   script.js
   ===================================================== */


/* =========================
   1. MOBILE MENU
   ========================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


/* Close mobile menu
   when a navigation link is clicked
*/

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   2. DARK / LIGHT MODE
   ========================= */

const themeBtn = document.getElementById("themeBtn");


/*
   Check if user already selected
   a theme previously.
*/

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

} else {

    themeBtn.textContent = "🌙";

}


/*
   Toggle theme
*/

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

});


/* =========================
   3. ACTIVE NAVIGATION LINK
   ========================= */

const sections = document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >=
            sectionTop - sectionHeight * 0.25
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   4. CONTACT FORM
   ========================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please fill all the fields.");

        return;

    }


    /*
       Open user's email application.

       Replace the email address
       if required.
    */

    const subject =
        encodeURIComponent(
            `Portfolio Contact from ${name}`
        );

    const body =
        encodeURIComponent(
            `Name: ${name}\n\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );


    window.location.href =
        `mailto:vickysingh16001@gmail.com?subject=${subject}&body=${body}`;


    contactForm.reset();

});


/* =========================
   5. SCROLL REVEAL
   ========================= */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-content, " +
    ".skill-card, " +
    ".project-card, " +
    ".education-card, " +
    ".experience-card, " +
    ".contact-content"
);


/*
   Initial state
*/

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


/*
   Intersection Observer
*/

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   6. CURRENT YEAR
   ========================= */

const copyrightText =
    document.querySelector(".copyright p");

if (copyrightText) {

    copyrightText.innerHTML =
        `© ${new Date().getFullYear()} Vicky. All Rights Reserved.`;

}


/* =========================
   7. PREVENT BROKEN
      EXTERNAL LINKS
   ========================= */

const externalLinks =
    document.querySelectorAll(
        'a[target="_blank"]'
    );

externalLinks.forEach(link => {

    link.setAttribute(
        "rel",
        "noopener noreferrer"
    );

});