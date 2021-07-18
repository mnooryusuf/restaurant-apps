import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <!-- Jombutron start-->
    <section class="home-section" id="home">
        <div class="home-bg lazyload"></div>
        <div class="container">
            <div class="row min-vh-100 align-item-center">
                <div class="home-text">
                    <h1  tabindex="0" class="restaurant__title">${restaurant.name}</h1>
                    <p tabindex="0">${restaurant.description}</p>
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
                </div>
                <div class="about-img">
                <img class="lazyload"  tabindex="0" data-src="${
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

const createSkeletonMovieTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="restaurant-items">
        <img tabindex="0" data-src="./images/placeholder.png" alt="skeleton">
        <span class="restaurant-address">
            <h3 class="skeleton" tabindex="0">Lorem ipsum</h3>
        </span>
        <div class="details">
            <div class="details-sub">
                <h3  tabindex="0" class="skeleton">Lorem ipsum dolor sit.</h3>                                       
            </div>
            <div class="description">
                <p class="skeleton" tabindex="0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
            </div>
            <h4 class="skeleton" tabindex="0" class="ratings">Rating: Lorem</h4> 
        </div>
    </div>
  `;
  }
  return template;
};

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-items">
        <img class="lazyload" tabindex="0" data-src="${
  CONFIG.BASE_IMAGE_URL + restaurant.pictureId
}" alt="${restaurant.name || '-'}">
        <span class="restaurant-address">
            <h3 tabindex="0">${restaurant.city || '-'}</h3>
        </span>
        <div class="details">
            <div class="details-sub">
                <h3  tabindex="0" class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name || '-'}</a></h3>                                       
            </div>
            <div class="description">
                <p tabindex="0">${restaurant.description || '-'}</p>
            </div>
            <h4 tabindex="0" class="ratings">Rating: ${
  restaurant.rating || '-'
}<i class="fa fa-star"></i></h4> 
        </div>
    </div>
  `;

const createLikeButtonRestaurantTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createSkeletonMovieTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantDetailMenuTemplate,
  createRestaurantDetailReviewTemplate,
  createLikeButtonRestaurantTemplate,
  createUnlikeRestaurantButtonTemplate,
};
