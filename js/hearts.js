// =========================================
// HEARTS.JS
// Hiệu ứng tim bay + tương tác chuột
// =========================================

const heartsContainer = document.getElementById("hearts");

// ===============================
// TẠO TIM BAY
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = ["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

    const size = 16 + Math.random() * 26;

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = size + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    heart.style.opacity = 0.4 + Math.random() * 0.6;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}

// Mỗi 250ms tạo một trái tim
setInterval(createHeart, 700);

// ===============================
// TIM THEO CHUỘT
// ===============================

document.addEventListener("mousemove", (e) => {

    if (Math.random() > 0.45) return;

    const heart = document.createElement("div");

    heart.innerHTML = "💗";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "18px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    heart.animate([
        {
            transform: "translate(-50%,-50%) scale(1)",
            opacity: 1
        },
        {
            transform: "translate(-50%,-120px) scale(2)",
            opacity: 0
        }
    ], {
        duration: 1200,
        easing: "ease-out"
    });

    setTimeout(() => {
        heart.remove();
    }, 1200);

});

// ===============================
// TIM KHI CHẠM MÀN HÌNH
// ===============================

document.addEventListener("touchstart", (e) => {

    const touch = e.touches[0];

    for (let i = 0; i < 10; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = touch.clientX + "px";
        heart.style.top = touch.clientY + "px";
        heart.style.fontSize = (18 + Math.random() * 18) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 120;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.animate([
            {
                transform: "translate(-50%,-50%)",
                opacity: 1
            },
            {
                transform: `translate(calc(-50% + ${x}px),calc(-50% + ${y}px))`,
                opacity: 0
            }
        ], {
            duration: 1200,
            easing: "ease-out"
        });

        setTimeout(() => {
            heart.remove();
        }, 1200);

    }

});

// ===============================
// TỰ ĐỘNG MƯA TIM
// ===============================

setInterval(() => {

    for (let i = 0; i < 1; i++) {
        createHeart();
    }

}, 1800);