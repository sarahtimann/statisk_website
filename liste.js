const product_view = document.querySelector(".product_list_container");
const category = new URLSearchParams(window.location.search).get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  const markup = products
    .map(
      (product) =>
        `<article class="smallProduct ${product.discount && "tilbud"} ${product.soldout && "udsolgt"}">
    <a href="product.html?id=${product.id}">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
      <h3 clas"brand_name">${product.brandname} </h3>
      <h3 clas"product_name">${product.productdisplayname} </h3>
      <h3${product.productdisplayname}</h3>
      <h3>DKK ${product.price},-</h3>
      <h3 class="udsolgt">Udsolgt</h3>
      <h3 class="tilbud">Tilbud</h3>
    </a>
  </article>
  `
    )
    .join("");
  console.log(markup);
  product_view.innerHTML = markup;
}
