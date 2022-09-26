// VARIABLES ------------------------------------------------------------------------------------------------------------------------- 

const contentSection = document.querySelectorAll(".contentSection");

// FUNCTIONS ------------------------------------------------------------------------------------------------------------------------- 


// MAINSETUP ------------------------------------------------------------------------------------------------------------------------- 

const intersection_controls = {
    rootMargin: "0% 0% -25% 0%"
};

const observer = new IntersectionObserver((entries) => {
    
    entries.forEach(entry => {

        if (entry.isIntersecting){

            entry.target.classList.remove("contentHidden"); // Hide content and play animation. Content hidden in the first place so user doesnt see it play after the content has ALREADY loaded
            entry.target.classList.add("fadeFromBottom");

        }
    })    
}, intersection_controls);

observer.observe(contentSection[0]);
observer.observe(contentSection[1]);
observer.observe(contentSection[2]);

// MOBILE MENU -------------------------------------------------------------------------------------------------------------------------

const burger = document.querySelector(".mobile-menu-burger");

burger?.addEventListener("click", () => {
    const mobile_navbar = document.querySelector(".mobile-navigation-lists");

    mobile_navbar.classList.toggle("mobile-navigation-bar-active");
});

// SOCIAL MEDIA -------------------------------------------------------------------------------------------------------------------------

const instagram = document.getElementById("insta");
const flickr = document.getElementById("flickr");
const github = document.getElementById("github"); 

instagram?.addEventListener("click", () => {
    window.open("https://www.instagram.com/cyberlions8521/");
});

flickr?.addEventListener("click", () => {
    window.open("https://www.flickr.com/photos/195051844@N07/");
});

github?.addEventListener("click", () => {
    window.open("https://github.com/CyberLions-8521");
});