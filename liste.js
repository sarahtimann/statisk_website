const product_view = document.querySelector(".product_list_container");
const category = new URLSearchParams(window.location.search).get("category");

const overskrift = document.querySelector("h1");
overskrift.innerHTML = category;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=100`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  const markup = products
    .map(
      (product) =>
        `<article>
    <a href="product.html?id=${product.id}">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
      <h3 clas"brand_name">${product.brandname} </h3>
      <h4 clas"product_name">${product.productdisplayname} </h4>
      <h3${product.productdisplayname}</h3>
      <h4>DKK ${product.price},-</h4>
      <h3 class="udsolgt ${product.soldout && "soldOut"}">Udsolgt</h3>
      <h3 class="tilbud ${product.discount && "isOnSale"}">-${product.discount}%</h3>
    </a>
  </article>
  `
    )
    .join("");
  console.log(markup);
  product_view.innerHTML = markup;
}
