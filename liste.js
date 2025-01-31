const product_list_container = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<article>
    <a href="product.html">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
      <h3 clas"brand_name">${product.brandname} </h3>
      <h3 clas"product_name">${product.productdisplayname} </h3>
      <h3${product.productdisplayname}</h3>
      <h3>DKK ${product.price},-</h3>
      <h3 class="udsolgt">Udsolgt</h3>
    </a>
  </article>`;
    })
    .join("");
  console.log(markup);
  product_list_container.innerHTML = markup;
}
