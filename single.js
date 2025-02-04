const productId = new URLSearchParams(window.location.search).get("id");
let product_view = document.querySelector(".product_view");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    product_view.innerHTML = `
        <section>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="" />
        <div class="product_info">
          <h2 class="brand_name">${data.brandname} </h2>
          <h2 class="product_name">${data.productdisplayname} </h2>
          <h3 class="category"> ${data.category} ${data.usagetype} </h3>
          <h3 class="gender"> ${data.gender}</h3>
          <p class="price">kr. ${data.price},-</p>
          <h3 class="tilbud ${data.discount && "isOnSale"}">
          -${data.discount}%</h3>
          <h3 class="udsolgt ${data.soldout && "soldOut"}">Udsolgt</h3>
            <div class="add_basket">
              <a href="product.html">Add to basket</a>
            </div>
          </div>
        </div>
      </section>
    `;
  });
