let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
let autoSlideInterval;

// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
}

// Function to go to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
}

// // Function to update the current slide
function updateSlide() {
  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

// // Automatic slide transition every 3 seconds
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 3000);
}

// // Pause slide transition on hover
document.querySelector(".slider").addEventListener("mouseenter", () => {
  clearInterval(autoSlideInterval);
});

// // Resume slide transition when not hovering
document
  .querySelector(".slider")
  .addEventListener("mouseleave", startAutoSlide);

// Start the slideshow
updateSlide();
startAutoSlide();
