const products = [
  {
    id: 2,
    name: "Orbitor",
    price: 30,
    desc: "it's nike pent for Mens and Womens.",
    img: "imgs/dental_chair.jpg",
  },
  {
    id: 4,
    name: "Vatech Sensor",
    price: 30,
    desc: "it's nike pent for Mens and Womens.",
    img: "imgs/PRO2image1151.jpg",
  },
  {
    id: 3,
    name: "VistaScan Nano Easy",
    price: 30,
    desc: "it's nike pent for Mens and Womens.",
    img: "imgs/PRO3image1962.jpg",
  },
  {
    id: 2,
    name: "Jupitor",
    price: 30,
    desc: "it's nike pent for Mens and Womens.",
    img: "imgs/dental_chair1.jpg",
  },
  {
    id: 3,
    name: "Vistascan Mini Easy",
    price: 30,
    desc: "it's nike pent for Mens and Womens.",
    img: "imgs/PRO6image1613.jpg",
  },
  {
    id: 3,
    name: "DURR VS 300 Suction",
    price: 30,
    desc: "it's nike pent for Mens and Womens.",
    img: "imgs/motorised.jpg",
  },
  {
    id: 2,
    name: "DURR VS 250 S SUCTION",
    price: 30,
    desc: "it's nike pent for Mens and Womens.",
    img: "imgs/PRO4image1565.jpg",
  },
  {
    id: 2,
    name: "Bhumi",
    price: 30,
    desc: "it's nike pent for Mens and Womens.",
    img: "imgs/dental_chair2.jpg",
  },
  {
    id: 3,
    name: "DURR VS 1200 Suction",
    price: 30,
    desc: "it's nike pent for Mens and Womens.",
    img: "imgs/motorised1.jpg",
  },
];

const categories = [
  {
    id: 1,
    name: "Dental Chairs",
  },
  {
    id: 2,
    name: "Motorised Suction",
  },
  {
    id: 3,
    name: "PSP System",
  },
  {
    id: 4,
    name: "Imaging Sensor",
  },
  {
    id: 5,
    name: "Scalers",
  },
  {
    id: 6,
    name: "Endomotor",
  },
  {
    id: 7,
    name: "Ultrasonic Cleaner",
  },
  {
    id: 8,
    name: "Implant Motor",
  },
  {
    id: 9,
    name: "Small Products",
  },
  {
    id: 10,
    name: "Apex Locaters",
  },
  {
    id: 11,
    name: "UV Chamber",
  },
  {
    id: 12,
    name: "Light Cure",
  },
  {
    id: 13,
    name: "Oil Free Compressors",
  },
  {
    id: 14,
    name: "X-Ray",
  },
];

const category_root = document.querySelector(
  ".home_page .products .grid .col .categories_con"
);
const products_root = document.querySelector(
    ".home_page .products .grid .col .products_row"
  );
console.log(category_root);
const filters = [
  ...new Set(
    categories.map((item) => {
      return item;
    })
  ),
];

category_root.innerHTML = filters.map((item, i) => {
  const { name, id } = item;
  return `
        <div class="category_list" onclick="filterProducts(${id})">
          <h4>${name}</h4>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        `;
}).join("");

function displayProducts(items){
    products_root.innerHTML = items.map((item)=>{
        const {id,name,price,desc,img} = item
        return (
            `
            <div class="item">
              <a href="details.html?id=${id}">
                <img src=${img} alt="" />
                <h2>${name}</h2>
              </a>
            </div>
            `
        )
    }).join("")
}

displayProducts(products)



//filter products by category
function filterProducts(id){
    // alert(id)
    const filteredProducts = products.filter((item)=> item.id === id)
    console.log(filteredProducts)
    displayProducts(filteredProducts)
}

// const showProducts = document.getElementById("products")

// function showProducts() {
//     const Item = document.createElement("div")
//     const All = products.map((item, i) => {
//         return Item.innerHTML = `
//         <img src="imgs/headphone.png" alt="">
//              <h2>${item.name}</h2>
//            <p>${item.desc}</p>
//         `
//     })

//     showProducts.append(All)
// }

const bar = document.getElementById("bar");
const cross = document.getElementById("cross");
const menu = document.querySelector(".home_page .header nav ul");

cross.addEventListener("click", function () {
  menu.style.right = "-100%";
});
bar.addEventListener("click", function () {
  menu.style.right = "0px";
});
