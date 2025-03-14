// Open the lightbox and show the first slide
function openLightbox() {
    document.getElementById("testimonial-lightbox").style.display = "block";
}

// Close the lightbox
function closeLightbox() {
    document.getElementById("testimonial-lightbox").style.display = "none";
}

// Show specific slide (image)
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Navigate between slides
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show the slide based on the current index
function showSlides(n) {
    let slides = document.getElementsByClassName("lightbox-slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slides[slideIndex - 1].style.display = "block";  
}

// Set initial slide index to 1
let slideIndex = 1;
showSlides(slideIndex);
