const productss = [
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
    id: 3,
    name: "Vistascan Mini Easy",
    price: 30,
    desc: "it's nike pent for Mens and Womens.",
    img: "imgs/PRO6image1613.jpg",
  },
  {
    id: 2,
    name: "DURR VS 250 S SUCTION",
    price: 30,
    desc: "it's nike pent for Mens and Womens.",
    img: "imgs/PRO4image1565.jpg",
  },
];

const details_root = document.querySelector(".details .grid");

// Extract product ID from URL
const url = new URL(window.location.href);

// Extract the 'id' query parameter
const productId = url.searchParams.get("id");

console.log(productId);

function displayDetail(id) {
  const product = products.filter((item) => item.id === parseInt(id));
  console.log(product);

  details_root.innerHTML = `
   <div class="col">
              <img src=${product[0].img} alt="" />
            </div>
            <div class="col">
              <h2>${product[0].name}</h2>
              <p>
              ${product[0].desc}
              </p>
              <h3>${product[0].price}</h3>
              <button class="btn_blue">Add to Cart</button>
            </div>
 `;
}

displayDetail(productId);
