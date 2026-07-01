// ===============================
// MAIN.JS
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const loveBtn = document.getElementById("loveBtn");

    // Hiệu ứng nút
    loveBtn.addEventListener("mouseenter", () => {
        loveBtn.style.transform = "scale(1.08)";
    });

    loveBtn.addEventListener("mouseleave", () => {
        loveBtn.style.transform = "";
    });

    // Khi bấm nút
    loveBtn.addEventListener("click", () => {

        // Pháo hoa
        if (typeof launchFireworks === "function") {
            launchFireworks();
        }

        // Tim nổ
        createHeartBurst();

        // Thông báo
        showLoveMessage();
    });

    // Animation khi cuộn
    revealElements();

    window.addEventListener("scroll", revealElements);

});

// ===============================
// HIỆU ỨNG XUẤT HIỆN
// ===============================

function revealElements(){

    const elements = document.querySelectorAll(".gallery,.letter,.glass-card");

    elements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 80){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

// ===============================
// THÔNG BÁO
// ===============================

function showLoveMessage(){

    const msg = document.createElement("div");

    msg.innerHTML = "💖 Anh yêu em rất nhiều 💖";

    msg.style.position = "fixed";
    msg.style.left = "50%";
    msg.style.top = "50%";
    msg.style.transform = "translate(-50%,-50%)";
    msg.style.padding = "20px 35px";
    msg.style.background = "rgba(255,255,255,.2)";
    msg.style.backdropFilter = "blur(15px)";
    msg.style.borderRadius = "20px";
    msg.style.color = "#fff";
    msg.style.fontSize = "26px";
    msg.style.fontWeight = "bold";
    msg.style.boxShadow = "0 0 30px rgba(255,255,255,.3)";
    msg.style.zIndex = "99999";

    document.body.appendChild(msg);

    msg.animate([
        {opacity:0,transform:"translate(-50%,-30%) scale(.8)"},
        {opacity:1,transform:"translate(-50%,-50%) scale(1)"},
    ],{
        duration:600,
        fill:"forwards"
    });

    setTimeout(()=>{

        msg.animate([
            {opacity:1},
            {opacity:0}
        ],{
            duration:600,
            fill:"forwards"
        });

        setTimeout(()=>{
            msg.remove();
        },600);

    },2000);

}

// ===============================
// TIM NỔ
// ===============================

function createHeartBurst(){

    for(let i=0;i<12;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";

        heart.style.position="fixed";
        heart.style.left="50%";
        heart.style.top="50%";
        heart.style.pointerEvents="none";
        heart.style.fontSize=(18+Math.random()*22)+"px";
        heart.style.zIndex="9999";

        document.body.appendChild(heart);

        const angle=Math.random()*Math.PI*2;
        const distance=120+Math.random()*180;

        const x=Math.cos(angle)*distance;
        const y=Math.sin(angle)*distance;

        heart.animate([
            {
                transform:"translate(-50%,-50%)",
                opacity:1
            },
            {
                transform:`translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) rotate(${Math.random()*720}deg)`,
                opacity:0
            }
        ],{
            duration:1800,
            easing:"ease-out"
        });

        setTimeout(()=>{
            heart.remove();
        },1800);

    }

}