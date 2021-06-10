import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
  createRestaurantDetailMenuTemplate,
  createRestaurantDetailReviewTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="restaurant"></div>
        <!-- menu section start -->
        <section class="menu-section sec-padding" id="our-menu">
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h2 data-title="order now" tabindex="0">our menu</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="menu-tabs">
                        <button type="button" class="menu-tab-item active" data-target="#foods">foods</button>
                        <button type="button" class="menu-tab-item" data-target="#drinks">drinks</button>
                    </div>
                </div>
                <div class="row menu-tab-content active" id="foods">
                </div>
                <div class="row menu-tab-content" id="drinks">
                </div>
            </div>
        </section>
        <!-- menu section end -->

        <!-- Testimonials section start -->
    <section class="testimonials-section sec-padding" id="reviews">
        <div class="container">
            <div class="row">
                <div class="section-title">
                    <h2 tabindex="0" data-title="testimonials">Customer Reviews</h2>
                </div>
            </div>
            <div class="row" id="review-item">
            </div>
            <div class="row" id="input-review">
            <div class="form">
                <h3>Thanks for coming</h3>
                <p>Let's tell your experience!</p>
                <div class="input-container">
                  <input id="name" class="input" type="text" placeholder=" " />
                  <div class="cut cut-short"></div>
                  <label for="name" class="placeholder">Name</label>
                </div>
                <div class="input-container">
                  <input id="review" class="input" type="text" placeholder=" " />
                  <div class="cut"></div>
                  <label for="review" class="placeholder">Review</label>
                </div>            
                <button type="text" class="submit">submit</button>
              </div>
            </div>
        </div>
    </section>    
    <!-- Testimonials section end -->

    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    const foodsContainer = document.querySelector('#foods');
    const foods = await restaurant.menus.foods;
    foods.forEach((food) => {
      foodsContainer.innerHTML += createRestaurantDetailMenuTemplate(food);
    });

    const drinksContainer = document.querySelector('#drinks');
    const drinks = await restaurant.menus.drinks;
    drinks.forEach((drink) => {
      drinksContainer.innerHTML += createRestaurantDetailMenuTemplate(drink);
    });

    const reviewsContainer = document.querySelector('#review-item');
    const reviews = await restaurant.customerReviews;
    reviews.forEach((review) => {
      reviewsContainer.innerHTML += createRestaurantDetailReviewTemplate(review);
    });

    const menuTabs = document.querySelector('.menu-tabs');
    menuTabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {
        const target = e.target.getAttribute('data-target');
        menuTabs.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        const menuSection = document.querySelector('.menu-section');
        menuSection.querySelector('.menu-tab-content.active').classList.remove('active');
        menuSection.querySelector(target).classList.add('active');
      }
    });

    const inputName = document.querySelector('#name');
    const inputReview = document.querySelector('#review');
    const submit = document.querySelector('.submit');
    submit.addEventListener('click', async (e) => {
      e.preventDefault();
      const review = {
        id: `${restaurant.id}`,
        name: inputName.value,
        review: inputReview.value,
      };
      await RestaurantSource.postReview(review);
      alert('Feedback has been sent thanks for coming');
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
