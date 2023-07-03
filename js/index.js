// // function showModal(e){
// // }
// // document.querySelector(".fa-x").addEventListener("click",()=>{
// //     document.querySelector(".modal").classList.remove("modal__show");
// //     if(document.querySelector(".modal").classList.contains("modal__show"))
// //     document.querySelector(".modal").classList.remove("modal__show");
// // })
let arr = [
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/aigars-peda-1553445-unsplash-872x1090.jpg",
        title: "SMØRREBRØD",
        price: "14,99"
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/brooke-lark-176364-unsplash-872x1297.jpg",
        title: "PASTA",
        price: "22,99"
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/calum-lewis-387612-unsplash-872x1308.jpg",
        title: "PANCAKE",
        price: "19,99",
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/cayla1-150730-unsplash-872x1308.jpg",
        title: "PUMPKIN SOUP",
        price: "15,99",
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/dana-devolk-696161-unsplash-872x1308.jpg",
        title: "SHRIMP",
        price: "34,99",
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/jennifer-schmidt-462962-unsplash-872x1308.jpg",
        title: "FO BO SOUP",
        price: "26.99",
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/joseph-gonzalez-80541-unsplash-872x794.jpg",
        title: "BELGIAN WAFFLE",
        price: "19,99",
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/joseph-gonzalez-99034-unsplash-872x1063.jpg",
        title: "FRIED EGGS",
        price: "12,99",
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/thomas-tucker-391058-unsplash-1-872x581.jpg",
        title: "PIZZA",
        price: "28,99",
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/taylor-kiser-373465-unsplash-872x1308.jpg",
        title: "SMOOTHIE BOWL",
        price: "15,99",
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/miroslava-456983-unsplash-872x581.jpg",
        title: "GINGERBREAD",
        price: "23,99",
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/edgar-castrejon-460843-unsplash-2-872x1090.jpg   ",
        title: "BERRY PORRIDGE",
        price: "32,99",
    },

]
function toggleModal(par) {
    const modal = document.querySelector(".modal");
    modal.querySelector("img").src = arr[par].img;
    modal.querySelector(".modal__right h2").innerText = arr[par].title;
    modal.querySelector(".modal__right span").innerText = "$" + arr[par].price;
    modal.classList.toggle("modal__show");
}
const productList = document.querySelector(".products__list");


for (let i = 0; i < arr.length; ++i) {
    productList.innerHTML +=
        `
    <div onclick="toggleModal(${i})" class="product product__left__top">
    <img src=${arr[i].img}
        alt="">
    <div class="product__text">
        <h4>${arr[i].title}</h4>
        <span>$ ${arr[i].price}</span>
    </div>
    </div>
    `
}

const closeBtn = document.getElementById("close__modal__btn");
closeBtn.addEventListener('click', () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal__show");

})

document.addEventListener("click", e => {
})

const swiperItems = document.querySelectorAll('.swiperItem').length
const insideSwiper = document.querySelector('.insideSwiper')
const backButton = document.querySelector('.backButton')
const undoButton = document.querySelector('.undoButton')
let saygac = 0
let max = 1

undoButton.addEventListener("click", () => {
    if (saygac < swiperItems - 1) {
        saygac++

    } else {
        saygac = 0
    }
    insideSwiper.style.transform = `translateX(-${saygac * 1040}px)`
})
backButton.addEventListener("click", () => {
    if (saygac > 0) {
       
        saygac--;
    } else {
        saygac = swiperItems - 1;
    }
     insideSwiper.style.transform = `translateX(-${saygac * 1040}px)`
})