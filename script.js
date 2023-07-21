const box = (image, text) => {
  const src = `./src/latest/${image}`;
  const news = text;


};

function brandAnimation() {
    const brands = document.querySelector("ul.photos"),
                   total_brand = brands.children.length;

    for (let i = 0; i < total_brand; i++) {
        brands.appendChild(brands.children[i].cloneNode(true));
    }
}