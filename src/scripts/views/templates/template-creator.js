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
                <h3>Welcome To ${restaurant.name}</h3>
                <h4>City</h4>
                <p>${restaurant.city}</p>
                <h4>Address</h4>
                <p>${restaurant.address}</p>
                <h4>Categories</h4>
                <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
                <a href="#our-menu" class="btn btn-default">check our menu</a>
                </div>
                <div class="about-img">
                <img src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="about img" />
                </div>
            </div>
        </div>
    </section>
    <!-- about section end -->
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
                <h4 tabindex="0" class="ratings">Rating: ${
  restaurant.rating
}<i class="fa fa-star"></i></h4>                        
            </div>
            <div class="description">
                <p tabindex="0">${restaurant.description}</p>
            </div>
        </div>
    </div>
  `;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate };
