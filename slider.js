const slide = document.querySelectorAll(".slide");
console.log(slide);

let counter = 0;
const totalSlides = slide.length;

slide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const autoSlide = () => {
    counter++;
    if (counter === totalSlides) {
        counter = 0;  
    }
    slideImage();
};

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = totalSlides - 1; 
    }
    slideImage();
};
const goNext = () => {
    counter++;
    if (counter === totalSlides) {
        counter = 0; 
    }
    slideImage();
};

const slideImage = () => {
    slide.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

setInterval(autoSlide, 3000); 



