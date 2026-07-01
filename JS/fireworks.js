// =========================================
// FIREWORKS.JS
// Pháo hoa trái tim
// =========================================

function launchFireworks() {

    const colors = [
        "#ff4d88",
        "#ff80ab",
        "#ffd54f",
        "#7c4dff",
        "#40c4ff",
        "#69f0ae",
        "#ffffff"
    ];

    for (let i = 0; i < 3; i++) {

        setTimeout(() => {

            createFirework(
                Math.random() * window.innerWidth,
                Math.random() * window.innerHeight * 0.7
            );

        }, i * 250);

    }

    function createFirework(x, y) {

        for (let i = 0; i < 15; i++) {

            const particle = document.createElement("div");

            particle.innerHTML = "❤";

            particle.style.position = "fixed";
            particle.style.left = x + "px";
            particle.style.top = y + "px";
            particle.style.fontSize = (12 + Math.random() * 14) + "px";
            particle.style.color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.pointerEvents = "none";
            particle.style.zIndex = "99999";
            particle.style.userSelect = "none";

            document.body.appendChild(particle);

            const angle = (Math.PI * 2 * i) / 45;
            const distance = 80 + Math.random() * 180;

            const dx = Math.cos(angle) * distance;
            const dy = Math.sin(angle) * distance;

            particle.animate(
                [
                    {
                        transform: "translate(0,0) scale(0.6)",
                        opacity: 1
                    },
                    {
                        transform: `translate(${dx}px,${dy}px) rotate(${Math.random()*720}deg) scale(1.8)`,
                        opacity: 0
                    }
                ],
                {
                    duration: 1800,
                    easing: "ease-out",
                    fill: "forwards"
                }
            );

            setTimeout(() => {
                particle.remove();
            }, 1800);
        }

    }

}

// =========================================
// CLICK BẤT KỲ -> PHÁO HOA NHỎ
// =========================================

document.addEventListener("click", function(e){

    if(e.target.id === "loveBtn") return;

    for(let i=0;i<12;i++){

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";
        heart.style.fontSize = "18px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "99999";

        document.body.appendChild(heart);

        const angle = Math.random()*Math.PI*2;
        const distance = 30 + Math.random()*80;

        const x = Math.cos(angle)*distance;
        const y = Math.sin(angle)*distance;

        heart.animate([
            {
                transform:"translate(0,0)",
                opacity:1
            },
            {
                transform:`translate(${x}px,${y}px)`,
                opacity:0
            }
        ],{
            duration:1000,
            easing:"ease-out",
            fill:"forwards"
        });

        setTimeout(()=>{
            heart.remove();
        },1000);

    }

});

// =========================================
// TỰ ĐỘNG PHÁO HOA MỖI 30 GIÂY
// =========================================

setInterval(() => {

    launchFireworks();

}, 30000);
