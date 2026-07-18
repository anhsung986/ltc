// =========================================
// TIMELINE.JS
// Timeline kỷ niệm
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const timeline = document.createElement("section");
    timeline.className = "timeline";

    timeline.innerHTML = `
        <h2>💞 Hành Trình Của Chúng Ta</h2>

        <div class="timeline-item">
            <span>🌸 14/01/2026</span>
            <p>Ngày đầu tiên chúng ta gặp nhau.</p>
        </div>

        <div class="timeline-item">
            <span>💕 14/02/2025</span>
            <p>Ngày đầu tiên cùng đi chơi.</p>
        </div>

        <div class="timeline-item">
            <span>💍 20/03/2025</span>
            <p>Ngày chính thức yêu nhau.</p>
        </div>

        <div class="timeline-item">
            <span>❤️ Hôm Nay</span>
            <p>Vẫn luôn yêu em nhiều như ngày đầu.</p>
        </div>
    `;

    document.body.insertBefore(timeline, document.querySelector("footer"));

    // CSS được thêm bằng JavaScript
    const style = document.createElement("style");
    style.innerHTML = `
        .timeline{
            width:90%;
            max-width:800px;
            margin:80px auto;
            padding:35px;
            background:rgba(255,255,255,.12);
            backdrop-filter:blur(15px);
            border-radius:25px;
            color:#fff;
        }

        .timeline h2{
            text-align:center;
            margin-bottom:30px;
        }

        .timeline-item{
            margin:20px 0;
            padding:18px;
            border-left:4px solid #ff7eb3;
            background:rgba(255,255,255,.08);
            border-radius:12px;
            opacity:0;
            transform:translateX(-40px);
            transition:.6s;
        }

        .timeline-item span{
            font-weight:bold;
            display:block;
            margin-bottom:8px;
        }
    `;
    document.head.appendChild(style);

    // Hiệu ứng hiện từng mốc
    const items = document.querySelectorAll(".timeline-item");

    function showTimeline(){

        items.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if(top < window.innerHeight - 60){

                item.style.opacity = "1";
                item.style.transform = "translateX(0)";
            }

        });

    }

    showTimeline();
    window.addEventListener("scroll", showTimeline);

});
