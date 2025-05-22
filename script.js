const products = [
  { name: "Summer Breeze Dress", price: "$49", image: "assets/images/sample-product.jpg" },
  { name: "Blush Pink Kurti", price: "$39", image: "assets/images/sample-product.jpg" },
  { name: "Casual Denim", price: "$59", image: "assets/images/sample-product.jpg" },
  { name: "Classic White Shirt", price: "$29", image: "assets/images/sample-product.jpg" },
];

const grid = document.getElementById('productGrid');
products.forEach(p => {
  grid.innerHTML += `
    <div class="product">
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.price}</p>
    </div>`;
});
