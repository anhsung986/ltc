// =========================================
// REASONS.JS
// PART 1/3
// =========================================

document.addEventListener("DOMContentLoaded", async () => {

    let reasons = [];

    // Đọc file reasons.json
    try {

        const response = await fetch("reasons.json");

        reasons = await response.json();

    } catch (err) {

        console.error("Không thể đọc reasons.json", err);

        reasons = [
            "❤️ Vì nụ cười của em.",
            "💖 Vì em là điều đặc biệt nhất.",
            "🥰 Vì em luôn làm anh hạnh phúc."
        ];

    }

    // ==========================
    // Hàm xáo trộn
    // ==========================

    function shuffle(array){

        const arr = [...array];

        for(let i = arr.length - 1; i > 0; i--){

            const j = Math.floor(Math.random() * (i + 1));

            [arr[i], arr[j]] = [arr[j], arr[i]];

        }

        return arr;

    }

    let randomList = shuffle(reasons);

    let current = 0;

    // ==========================
    // Tạo giao diện
    // ==========================

    const section = document.createElement("section");

    section.className = "reasons";

    section.innerHTML = `

        <h2>💖 100 Lý Do Anh Yêu Em 💖</h2>

        <div class="reason-card">

            <div id="reasonIndex">

                #1

            </div>

            <div id="reasonText">

                ${randomList[0] || ""}

            </div>

            <button id="nextReason">

                💖 I LOVE YOU

            </button>

        </div>

    `;

    document.body.insertBefore(

        section,

        document.querySelector("footer")

    );
    // ==========================
    // CSS
    // ==========================

    const style = document.createElement("style");

    style.textContent = `

.reasons{
    width:90%;
    max-width:760px;
    margin:80px auto;
    color:#fff;
}

.reasons h2{
    text-align:center;
    font-size:36px;
    margin-bottom:30px;
}

.reason-card{

    background:rgba(255,255,255,.15);

    backdrop-filter:blur(18px);

    border-radius:25px;

    padding:35px;

    text-align:center;

    box-shadow:0 10px 30px rgba(0,0,0,.25);

    transition:.4s;

}

#reasonIndex{

    font-size:34px;

    font-weight:bold;

    color:#FFD6E8;

}

#reasonText{

    margin:25px 0;

    min-height:120px;

    font-size:22px;

    line-height:1.8;

    transition:.35s;

}

#nextReason{

    border:none;

    cursor:pointer;

    padding:15px 35px;

    border-radius:40px;

    background:white;

    color:#ff4d88;

    font-size:18px;

    transition:.3s;

}

#nextReason:hover{

    transform:scale(1.05);

}

.flip{

    animation:flipCard .5s;

}

@keyframes flipCard{

    from{

        opacity:0;

        transform:rotateY(90deg);

    }

    to{

        opacity:1;

        transform:rotateY(0deg);

    }

}

`;

    document.head.appendChild(style);

    const card = document.querySelector(".reason-card");

    const number = document.getElementById("reasonIndex");

    const text = document.getElementById("reasonText");

    const button = document.getElementById("nextReason");
    // ==========================
    // Nút "Xem lý do tiếp theo"
    // ==========================

    button.addEventListener("click", () => {

        card.classList.remove("flip");
        void card.offsetWidth;
        card.classList.add("flip");

        current++;

        // Xem hết thì xáo trộn lại
        if(current >= randomList.length){

            randomList = shuffle(reasons);

            current = 0;

        }

        number.textContent = "#" + (current + 1);

        text.style.opacity = "0";

        setTimeout(() => {

            text.textContent = randomList[current];

            text.style.opacity = "1";

        }, 180);

    });

    // ==========================
    // Hiển thị ngẫu nhiên khi mở web
    // ==========================

    if(randomList.length > 0){

        current = Math.floor(Math.random() * randomList.length);

        number.textContent = "#" + (current + 1);

        text.textContent = randomList[current];

    }

}); // Kết thúc DOMContentLoaded