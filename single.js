let productId = 1543;
let product_view = document.querySelector(".product_view");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    product_view.innerHTML = `
        <section>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="" />
        <div class="product_info">
                  <h2 clas"brand_name">${data.brandname} </h2>
          <h2 clas"product_name">${data.productdisplayname} </h2>
          <h3 class"category"> ${data.category} ${data.usagetype} </h3>
          <p class"price">kr. ${data.price},-</p>
          <h3 class="udsolgt">Udsolgt</h3>
          <div class="size_selector">
            <h3>Vælg størrelse:</h3>
            <select>
              <option>36</option>
              <option>37</option>
              <option>38</option>
              <option >39</option>
            </select>
            <div class="add_basket">
              <a href="product.html">Add to basket</a>
            </div>
          </div>
        </div>
      </section>
    `;
  });
