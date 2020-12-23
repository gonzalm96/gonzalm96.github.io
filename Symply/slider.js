function openModal(n) {
    if(n === 1){
        document.getElementById("myModal1").style.display = "block";
    }
    else if (n === 2) {
        document.getElementById("myModal2").style.display = "block";
    }
    else if (n === 3) {
        document.getElementById("myModal3").style.display = "block";
    }
}

// Close the Modal
function closeModal(n) {
    if (n === 1) {
        document.getElementById("myModal1").style.display = "none";
    }
    else if (n === 2) {
        document.getElementById("myModal2").style.display = "none";
    }
    else if (n === 3) {
        document.getElementById("myModal3").style.display = "none";
    }
}

var slideIndex = 1;
showSlides(slideIndex,1);

// Next/previous controls
function plusSlides(n,x) {
    showSlides(slideIndex += n,x);
}

// Thumbnail image controls
function currentSlide(n,slider) {
    showSlides(slideIndex = n,slider);
}

function showSlides(n,sliderSelect) {
    console.log(sliderSelect);
    console.log
    var i;
    var slides;
    if(sliderSelect === 1){
        slides = document.getElementsByClassName("mySlides1");
    }
    else if (sliderSelect === 2) {
        slides = document.getElementsByClassName("mySlides2");
    }
    else if (sliderSelect === 3) {
        slides = document.getElementsByClassName("mySlides3");
    }
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}