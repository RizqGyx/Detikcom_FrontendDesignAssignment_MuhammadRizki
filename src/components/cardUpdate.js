export const Card = (image, text, date1) => {
    const src = `./src/latest/${image}`;
    const news = text;
    const date = date1;
    
    return `<div class="update_card_container">
    <div class="update_cardImage_wrapper">
        <img src="${src}" alt="NewsImage" class="update_cardImage">
    </div>
    <!-- <div class="update_cardImage"></div> -->
    <div class="update_card_content">
        <h3 class="update_cardTitle">${news}</h3>
        <p class="update_cardDate text-black-50">${date}</p>
    </div>
</div>`
  };