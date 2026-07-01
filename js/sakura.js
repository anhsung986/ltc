// =========================================
// SAKURA.JS
// Hiệu ứng hoa anh đào rơi
// =========================================

const sakuraContainer = document.createElement("div");
sakuraContainer.id = "sakura-container";

Object.assign(sakuraContainer.style, {
    position: "fixed",
    inset: "0",
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: "1"
});

document.body.appendChild(sakuraContainer);

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    const size = 14 + Math.random() * 10;

    Object.assign(petal.style, {
        position: "absolute",
        left: Math.random() * 100 + "vw",
        top: "-30px",
        fontSize: size + "px",
        opacity: 0.6 + Math.random() * 0.4,
        userSelect: "none"
    });

    sakuraContainer.appendChild(petal);

    const duration = 8000 + Math.random() * 5000;
    const drift = (Math.random() - 0.5) * 200;

    petal.animate(
        [
            {
                transform: "translate(0,0) rotate(0deg)"
            },
            {
                transform: `translate(${drift}px,110vh) rotate(360deg)`
            }
        ],
        {
            duration: duration,
            easing: "linear",
            fill: "forwards"
        }
    );

    setTimeout(() => {
        petal.remove();
    }, duration);

}

// Chỉ tạo 1 bông mỗi 1.2 giây để tránh lag
setInterval(createPetal, 1200);