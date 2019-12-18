var header = document.querySelector(".header");
var nav = document.querySelector(".nav");
var hero = document.querySelector(".hero");
var heroText = document.querySelector(".hero-text");
var heroContent = document.querySelector(".hero-content");

const tl = new TimelineMax();
const MenuTl = new TimelineMax();

tl.fromTo(hero , 1.25, {
    height: "0%",
    width: "20%"
},{
    height: "100%",
    width: "100%",
    delay: 0.5
})
.fromTo(heroText, 0.5, {
    opacity: 0,
    y: 10
},{
    opacity: 1,
    y: 0
})
.fromTo(heroContent, 0.75, {
    opacity: 0,
    y: 10
}, {
    opacity: 1,
    y: 0,
    delay: -0.2
});


// Pilen som ska ta ner en till inriktningarna

var continueArrow = document.querySelector("#continue");

continueArrow.addEventListener('click', function() {

    document.getElementById('inriktningar').scrollIntoView();
});

//



var menu = document.querySelector("#burger");
var hiddenMenu = document.querySelector(".hidden-menu");
var closeMenu = document.querySelector("#close");
var menuItems = document.querySelectorAll(".hidden-wrapper a");

//     MenuTl.fromTo(hiddenMenu, 0.3, {opacity: 0}, {opacity: 1, delay: 0.1});               MenuTl.reverse();

menu.addEventListener('click', function() {

    hiddenMenu.style.display = "block";
    document.body.style.overflow = "hidden";
    setTimeout(function(){
        hiddenMenu.style.opacity = "1";
    },100);
});

closeMenu.addEventListener('click', function() {

    hiddenMenu.style.opacity = "0";
    setTimeout(function(){
        hiddenMenu.style.display = "none";
        document.body.style.overflow = "auto";
    },200);
});

for(var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function() {
        hiddenMenu.style.opacity = "0";
        setTimeout(function(){
            hiddenMenu.style.display = "none";
            document.body.style.overflow = "auto";
        },200);
    });
}





var nav = document.querySelector(".nav");
var closeOpen = document.querySelector("#open-close");
var closeOpenA = document.querySelector(".open-close-menu i");
var header = document.querySelector(".header");


// Få nav att försvinna

window.onscroll = function() {

    // När man scrollar så försvinner NAV
    this.nav.style.top = "-10%";

    // Öppna NAV bar kommer fram från -10% till 0% så den syns
    this.closeOpen.style.top = "0%";

    var d = document.documentElement;
    var offset = d.scrollTop;

    if(offset === 0) {

       this.nav.style.top = "0%";
        this.closeOpen.style.top = "-10%";
    }
    if(offset > this.header.offsetHeight - 50) {
        this.closeOpen.style.backgroundColor = "var(--gray)";
        this.closeOpenA.style.color = "white";
    } else {
        this.closeOpen.style.backgroundColor = "white";
        this.closeOpenA.style.color = "var(--gray)";
    }
};

// Få nav att komma tillbaka
closeOpen.addEventListener("click", function() {
    nav.style.top = "0%";
    closeOpen.style.top = "-10%";
})




/* Karusell */

var carousel = document.querySelector(".carousel");
var sm = document.querySelector("#socialaMedier");
var slider = document.querySelectorAll(".carousel-img");

var indexSlide = 0;


carouselSlider = () => {

    for(var i = 0; i < slider.length; i++) {
        slider[i].style.opacity = "0";
    }

    if(indexSlide >= slider.length) {
        indexSlide = 0;
    }
    if(indexSlide < 0) {
        indexSlide = slider.length - 1;
    }

    slider[indexSlide].style.opacity = "1";
}


carouselSlider();

var arrowRight = document.querySelector(".arrow-right");
var arrowLeft = document.querySelector(".arrow-left");

arrowRight.addEventListener('click', function() {

    indexSlide++;
    carouselSlider();
});

arrowLeft.addEventListener('click', function() {
    indexSlide--;
    carouselSlider();
});

/* */

console.log(window.innerWidth);

if(window.innerWidth > 500) {
    console.log("Hi");
}

/* Social Media Buttons */

var facebook = document.querySelector("#facebook");
var instagram = document.querySelector("#instagram");
var twitter = document.querySelector("#twitter");

facebook.addEventListener('click', function() {
    window.open("https://www.facebook.com/teknist/", '_blank');
});
instagram.addEventListener('click', function() {
    window.open("https://www.instagram.com/teknikprogrammet/", '_blank');
});
twitter.addEventListener('click', function() {
    window.open("https://twitter.com/teknikprogramm1", '_blank');
});



/* Ändra alla hover text till klicka text för mobilen */

var mobileText = document.querySelectorAll("#textmobile");

if(window.innerWidth < 1024) {
    for(var i = 0; i < mobileText.length; i++) {
        mobileText[i].innerHTML = "Klicka här!";
    }
}

