import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <!-- Jombutron start-->
    <section class="home-section" id="home">
        <div class="home-bg"></div>
        <div class="container">
            <div class="row min-vh-100 align-item-center">
                <div class="home-text">
                    <h1 tabindex="0">${restaurant.name}</h1>
                    <p tabindex="0">${restaurant.description}</p>
                    <a href="#about" class="btn btn-default">our restaurant</a>
                </div>
            </div>
        </div>
    </section>
    <!-- Jombuton end -->

    <!-- about section start -->
    <section class="about-section sec-padding" id="about">
        <div class="container">
            <div class="row">
                <div class="section-title">
                <h2 data-title="Our Story">About Us</h2>
                </div>
            </div>
            <div class="row">
                <div class="about-text">
                <h3 tabindex="0">Welcome To ${restaurant.name}</h3>
                <h4 tabindex="0">City</h4>
                <p tabindex="0">${restaurant.city}</p>
                <h4 tabindex="0">Address</h4>
                <p tabindex="0">${restaurant.address}</p>
                <h4 tabindex="0">Categories</h4>
                <p tabindex="0">${restaurant.categories
    .map((category) => category.name)
    .join(', ')}</p>
                <h4 tabindex="0">Rating</h4>
                <p tabindex="0">${restaurant.rating}</p>
                <a href="#our-menu" class="btn btn-default">check our menu</a>
                </div>
                <div class="about-img">
                <img tabindex="0" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}" />
                </div>
            </div>
        </div>
    </section>
    <!-- about section end -->
`;

const createRestaurantDetailMenuTemplate = (menu) => `
  <div class="menu-item">
    <div class="menu-item-title">
        <h3 tabindex="0">${menu.name}</h3>
    </div>
  </div>
`;

const createRestaurantDetailReviewTemplate = (review) => `
  <div class="testi-item">
    <div class="testi-author">
        <div class="testi-author-name">
            <h3 tabindex="0">${review.name}</h3>
        </div>
        <p>${review.date}</p>
    </div>
    <p tabindex="0">${review.review}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-items">
        <img tabindex="0" src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name}">
        <span class="restaurant-address">
            <h4 tabindex="0">${restaurant.city}</h4>
        </span>
        <div class="details">
            <div class="details-sub">
                <h3 tabindex="0"><a href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name
}</a></h3>                                       
            </div>
            <div class="description">
                <p tabindex="0">${restaurant.description}</p>
            </div>
            <h4 tabindex="0" class="ratings">Rating: ${
  restaurant.rating
}<i class="fa fa-star"></i></h4> 
        </div>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailMenuTemplate,
  createRestaurantDetailReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
