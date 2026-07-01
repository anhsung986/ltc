// =========================================
// GALLERY.JS
// Album ảnh tự động
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const slider = document.querySelector(".slider");

    if (!slider) return;

    const images = slider.querySelectorAll("img");

    let current = 0;

    // Hiệu ứng ban đầu
    images.forEach((img, index) => {

        img.style.transition = "all .6s ease";

        if(index !== 0){

            img.style.display = "none";

        }

    });

    // Chuyển ảnh
    function nextImage(){

        images[current].style.opacity = "0";

        setTimeout(()=>{

            images[current].style.display = "none";

            current++;

            if(current >= images.length){

                current = 0;

            }

            images[current].style.display = "block";

            images[current].style.opacity = "0";

            setTimeout(()=>{

                images[current].style.opacity = "1";

            },50);

        },500);

    }

    // 5 giây đổi ảnh
    setInterval(nextImage,5000);

});