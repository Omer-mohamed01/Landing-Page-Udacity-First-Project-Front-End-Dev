/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

                            //menu unorderd list elements
let container = document.querySelector('#navbar__list');
let sections = document.querySelectorAll('section');
sections.forEach((sec) => {
    let link = document.createElement('li');
    let sectionId = sec.getAttribute('id');
    link.setAttribute('class', sectionId)
    let anchor = document.createElement('a');
    let anchorLink = sec.getAttribute('id');
    let anchorText = sec.getAttribute('data-nav');
    anchor.setAttribute('href', '#' + anchorLink);
    anchor.setAttribute('class', 'menuLink');
    anchor.textContent = anchorText;
    link.appendChild(anchor);
    container.appendChild(link);

});
                            //to smooth scroll
container.addEventListener('click', function scrollToSection(event) {
    event.preventDefault();
    for (const sec of sections) {
        if (event.target.getAttribute('href').substring(1) === sec.id) {
            sec.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }
});
                            //set active class for links
let navList = document.querySelectorAll("header nav ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navList.forEach((li) => {
    li.classList.remove('link-active-class');
    if (li.classList.contains(current)) {
      li.classList.add('link-active-class');
    }
  });
});


                            //image on click
let sectionOfImage = document.getElementById('section1');
let image = document.getElementById('image');

function addImage() {
    sectionOfImage.appendChild(image);
};

function removeImage() {
    image.remove();
};

image.addEventListener('dblclick', removeImage);
sectionOfImage.addEventListener('click', addImage)

                            //add footer
let footer = document.createElement('footer');
footer.setAttribute('class', 'page__footer');
let footerAnchor = document.createElement('a');
footerAnchor.setAttribute('href', 'https://www.udacity.com/')
footerAnchor.setAttribute('target', '_blank')
let footerParagraph = document.createElement('p');
footerParagraph.textContent = "\u00A9 Udacity";
footerAnchor.appendChild(footerParagraph);
footer.appendChild(footerAnchor);
document.body.appendChild(footer);
