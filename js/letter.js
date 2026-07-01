// =========================================
// LETTER.JS
// Hiệu ứng mở thư
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const letter = document.querySelector(".letter-card");

    if (!letter) return;

    let opened = false;

    // Nội dung sau khi mở thư
    const fullLetter = `
        <h2>💌 Thư Gửi Em</h2>

        <p>
            Cảm ơn em đã xuất hiện trong cuộc đời anh.<br><br>

            Có thể anh không phải là người hoàn hảo,
            nhưng anh sẽ luôn cố gắng để mang đến cho em
            những nụ cười và sự bình yên.<br><br>

            Anh mong rằng chúng ta sẽ cùng nhau
            tạo nên thật nhiều kỷ niệm đẹp,
            cùng nắm tay nhau đi thật xa.<br><br>

            ❤️ Anh yêu em rất nhiều ❤️
        </p>
    `;

    letter.addEventListener("click", () => {

        if (opened) return;

        opened = true;

        letter.style.transition = "0.8s";
        letter.style.transform = "rotateX(360deg) scale(1.03)";

        setTimeout(() => {

            letter.innerHTML = fullLetter;

            letter.style.transform = "scale(1)";

        }, 500);

    });

});