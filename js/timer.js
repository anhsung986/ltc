// =========================================
// TIMER.JS
// Đếm thời gian yêu nhau
// =========================================

// ❤️ ĐỔI NGÀY NÀY THEO NGÀY CỦA HAI BẠN
const loveDate = new Date("2026-1-14T00:00:00");

const counter = document.getElementById("love-days");

// Cập nhật thời gian
function updateLoveTimer() {

    const now = new Date();

    let diff = now - loveDate;

    if (diff < 0) {
        counter.innerHTML = "Chưa đến ngày ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));

    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));

    diff %= (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    counter.innerHTML = `
        ${days} ngày<br>
        ${hours} giờ ${minutes} phút ${seconds} giây
    `;
}

// Cập nhật ngay khi tải trang
updateLoveTimer();

// Cập nhật mỗi giây
setInterval(updateLoveTimer, 1000);

// =========================================
// Đổi lời nhắn theo thời gian
// =========================================

const messages = [
    "❤️ Anh yêu em nhiều lắm ❤️",
    "💖 Mãi bên nhau nhé!",
    "🌹 Cảm ơn em đã đến.",
    "💕 Em là điều đẹp nhất.",
    "✨ Forever Together ✨",
    "🥰 Yêu em hơn mỗi ngày."
];

const desc = document.querySelector(".desc");

let index = 0;

setInterval(() => {

    if (!desc) return;

    index++;
    if (index >= messages.length) index = 0;

    desc.style.opacity = "0";

    setTimeout(() => {
        desc.innerHTML = messages[index];
        desc.style.opacity = "1";
    }, 500);

}, 7000);

// =========================================
// Hiệu ứng tiêu đề nhấp nháy
// =========================================

let flash = false;

setInterval(() => {

    document.title = flash
        ? "❤️ Dành Cho Em ❤️"
        : "💖 Anh Yêu Em 💖";

    flash = !flash;

}, 3000);
