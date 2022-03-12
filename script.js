
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayObrasItems(obras);
  displayObrasButtons();
});

function diplayObrasItems(obrasItems) {
  let displayObras = obrasItems.map(function (item) {
    // console.log(item);

    return `<article class="obras-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="pintor">${item.pintor}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayObras = displayObras.join("");
  // console.log(displayObras);

  sectionCenter.innerHTML = displayObras;
}
function displayObrasButtons() {
  const categories = obras.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const obrasCategory = obras.filter(function (obrasItem) {
        // console.log(menuItem.category);
        if (obrasItem.category === category) {
          return obrasItem;
        }
      });
      if (category === "all") {
        diplayObrasItems(obras);
      } else {
        diplayObrasItems(obrasCategory);
      }
    });
  });
}
