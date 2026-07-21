document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    if (!slider) return;

    const images = slider.querySelectorAll("img");
    if (images.length === 0) return;

    let currentIndex = 0;

    // Tạo HTML cho slider có nút bấm
    slider.innerHTML = `
        <div class="custom-slider-container">
            <button class="prev-btn">❮</button>
            <div class="slider-wrapper">
                ${Array.from(images).map((img, index) => `
                    <img src="${img.src}" class="slide-img ${index === 0 ? 'active' : ''}">
                `).join('')}
            </div>
            <button class="next-btn">❯</button>
        </div>
    `;

    const slideImgs = slider.querySelectorAll(".slide-img");
    const prevBtn = slider.querySelector(".prev-btn");
    const nextBtn = slider.querySelector(".next-btn");

    function showSlide(index) {
        slideImgs.forEach((img, i) => {
            img.classList.remove("active");
            if (i === index) img.classList.add("active");
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideImgs.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideImgs.length) % slideImgs.length;
        showSlide(currentIndex);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // Tự động chuyển ảnh sau 3 giây
    setInterval(nextSlide, 3000);
});
