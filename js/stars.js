// =========================================
// STARS.JS
// Bầu trời sao
// =========================================

const starContainer = document.createElement("div");

starContainer.id = "stars";

Object.assign(starContainer.style,{
    position:"fixed",
    inset:"0",
    overflow:"hidden",
    pointerEvents:"none",
    zIndex:"-1"
});

document.body.appendChild(starContainer);

// 🌙 Mặt trăng
const moon = document.createElement("div");

moon.innerHTML = "🌙";

Object.assign(moon.style,{
    position:"absolute",
    top:"40px",
    right:"50px",
    fontSize:"60px",
    filter:"drop-shadow(0 0 20px white)"
});

starContainer.appendChild(moon);

// ⭐ Tạo sao
function createStar(){

    const star = document.createElement("div");

    star.innerHTML = "✦";

    const size = 8 + Math.random()*10;

    Object.assign(star.style,{
        position:"absolute",
        left:Math.random()*100+"vw",
        top:Math.random()*100+"vh",
        fontSize:size+"px",
        color:"white",
        opacity:Math.random()
    });

    star.animate([
        {opacity:0.2,transform:"scale(.8)"},
        {opacity:1,transform:"scale(1.3)"},
        {opacity:0.2,transform:"scale(.8)"}
    ],{
        duration:2000+Math.random()*3000,
        iterations:Infinity
    });

    starContainer.appendChild(star);

}

// Chỉ tạo 80 ngôi sao để tối ưu hiệu năng
for(let i=0;i<80;i++){
    createStar();
}