const category_list_container = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(data) {
  const markup = data.map((category) => `<a href="productlist.html?category=${category.category}">${category.category}</a>`).join("");
  console.log(markup);
  category_list_container.innerHTML = markup;
}
