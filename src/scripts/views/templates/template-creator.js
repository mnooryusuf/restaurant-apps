import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
  </div>
  <div class="restaurant__description">
    <h3>description</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-items">
        <img tabindex="0" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <span class="restaurant-address">
            <h4 tabindex="0">${restaurant.city}</h4>
        </span>
        <div class="details">
            <div class="details-sub">
                <h3 tabindex="0"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
                <h4 tabindex="0" class="ratings">Rating: ${restaurant.rating}<i class="fa fa-star"></i></h4>                        
            </div>
            <div class="description">
                <p tabindex="0">${restaurant.description}</p>
            </div>
        </div>
    </div>
  `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
