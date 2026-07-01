// =========================================
// MUSIC.JS
// Điều khiển nhạc nền
// =========================================

const music = new Audio("music/love.mp3");

music.loop = true;
music.volume = 0.5;

const musicBtn = document.getElementById("music-btn");

let isPlaying = false;

// ===============================
// PHÁT NHẠC
// ===============================

async function playMusic(){

    try{

        await music.play();

        isPlaying = true;

        musicBtn.innerHTML = "🔊";

        musicBtn.style.transform = "rotate(360deg)";

    }catch(e){

        console.log("Trình duyệt chặn tự động phát.");

    }

}

// ===============================
// DỪNG NHẠC
// ===============================

function stopMusic(){

    music.pause();

    isPlaying = false;

    musicBtn.innerHTML = "🎵";

    musicBtn.style.transform = "rotate(0deg)";

}

// ===============================
// NÚT BẬT / TẮT
// ===============================

musicBtn.addEventListener("click",()=>{

    if(isPlaying){

        stopMusic();

    }else{

        playMusic();

    }

});

// ===============================
// TỰ PHÁT SAU LẦN CHẠM ĐẦU TIÊN
// ===============================

function firstInteraction(){

    if(!isPlaying){

        playMusic();

    }

    document.removeEventListener("click",firstInteraction);
    document.removeEventListener("touchstart",firstInteraction);

}

document.addEventListener("click",firstInteraction);

document.addEventListener("touchstart",firstInteraction);

// ===============================
// ĐỔI ICON KHI TAB ẨN
// ===============================

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        document.title = "💖 Anh nhớ em...";

    }else{

        document.title = "❤️ Dành Cho Em ❤️";

    }

});

// ===============================
// HIỆU ỨNG XOAY NÚT
// ===============================

setInterval(()=>{

    if(isPlaying){

        musicBtn.style.transform = "rotate(360deg)";

        setTimeout(()=>{

            musicBtn.style.transform = "rotate(0deg)";

        },500);

    }

},3000);