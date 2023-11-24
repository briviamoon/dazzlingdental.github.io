document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".services-slider");
    const slides = document.querySelectorAll(".service-slide");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;
    let isTransitioning = false;

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });
    });

    function updateSlider() {
        if (!isTransitioning) {
            slider.style.transform = `translateX(${-currentIndex * 100}%)`;

            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add("active");
                } else {
                    dot.classList.remove("active");
                }
            });
        }
    }

    function nextSlide() {
        if (!isTransitioning) {
            isTransitioning = true;

            if (currentIndex < slides.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
                setTimeout(() => {
                    slider.style.transition = "none";
                    updateSlider();
                    slider.offsetWidth; // Trigger reflow
                    slider.style.transition = "transform 0.5s ease-in-out";
                }, 500);
            }

            updateSlider();
            isTransitioning = false;
        }
    }

    function prevSlide() {
        if (!isTransitioning) {
            isTransitioning = true;

            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slides.length - 1;
                setTimeout(() => {
                    slider.style.transition = "none";
                    updateSlider();
                    slider.offsetWidth; // Trigger reflow
                    slider.style.transition = "transform 0.5s ease-in-out";
                }, 500);
            }

            updateSlider();
            isTransitioning = false;
        }
    }

    // Mouse scroll event
    document.addEventListener("wheel", function (event) {
        if (event.deltaY > 0) {
            nextSlide();
        } else {
            prevSlide();
        }
    });

    // Touch swipe event for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener("touchstart", function (event) {
        touchStartX = event.touches[0].clientX;
    });

    slider.addEventListener("touchend", function (event) {
        touchEndX = event.changedTouches[0].clientX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeDistance = touchStartX - touchEndX;

        if (swipeDistance > 50) {
            nextSlide();
        } else if (swipeDistance < -50) {
            prevSlide();
        }
    }
});
