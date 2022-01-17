// navigation

const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;

var slideNumber = 0;

// image slide next button
nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });


    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});


// image slide previsous button
prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });


    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});


// image slide autoplay
var playSlider;

var repeater = () => {
    playSlider = setInterval(function() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });

        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        });


        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 4000);
}
repeater();


// stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});


// start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
    repeater();
});