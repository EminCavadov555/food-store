
let arr = [
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/aigars-peda-1553445-unsplash-872x1090.jpg",
        title: "SMØRREBRØD",
        price: "14,99",
    },
    {
        img: "https://mobirise.com/extensions/shopamp/assets/images/brooke-lark-176364-unsplash-872x1297.jpg",
        title: "PASTA",
        price: "22,99",
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

]


const products = document.querySelector(".ourproductsshopimg");
for (let i = 0; i < arr.length; ++i) {
    products.innerHTML +=
        `
    <div onclick="toggleModal(${i})" data-index = ${i}>
        <img src=${arr[i].img}
            alt="">

        <div class="ourproductsshopimg__text">
            <h4>${arr[i].title}</h4>
            <span>${arr[i].price}$</span>
        </div>
    </div>
    
    `
}

function toggleModal(par) {
    const modal = document.querySelector(".modal");
    modal.querySelector("img").src = arr[par].img;
    modal.querySelector(".modal__right h2").innerText = arr[par].title;
    modal.querySelector(".modal__right span").innerText = "$" + arr[par].price;
    modal.classList.toggle("modal__show");
}

const closeBtn = document.getElementById("close__modal__btn");
closeBtn.addEventListener('click', () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal__show");

})







