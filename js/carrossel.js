    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    // Troca automática a cada 4s
    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 4000);
