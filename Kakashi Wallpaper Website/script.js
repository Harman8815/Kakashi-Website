const divRight = document.querySelector(".right");
const imgTag = document.querySelector("#nav_button img");

let isFlex = divRight.style.display === "flex";
if (window.getComputedStyle(divRight).width.replace("px", "") > 600) {
        divRight.style.display = "flex";
    }
function c() {
        if (isFlex) {
            imgTag.src = "/assets/icons/bars-solid.svg"; 
            divRight.style.display = "none";
        } else {
            divRight.style.display = "flex";
            imgTag.src = "/assets/icons/xmark-solid.svg";
        }
        isFlex = !isFlex;
    
}

c();

isFlex = divRight.style.display === "flex";

document.querySelector("#nav_button button").addEventListener("click", function () {
    c();
});

window.addEventListener("resize", function () {
    c();
});


const section = document.querySelector("section");

const htmlContent = `
    <div class="row">
    <div>
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    </div>
       
    <div>
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    <img src="/assets/star/star1.webp" alt="">
    <img src="/assets/star/star2.webp" alt="">
    <img src="/assets/star/star3.webp" alt="">
    <img src="/assets/star/star4.webp" alt="">
    <img src="/assets/star/star5.webp" alt="">
    <img src="/assets/star/star6.webp" alt="">
    </div>
    </div>
`;
for (let i = 0; i < 14; i++) {
    section.innerHTML += htmlContent;
}
