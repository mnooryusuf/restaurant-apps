import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <!-- Explore start-->
    <section class="explore-section sec-padding" id="explore">
        <div class="container">
            <div class="row">
                <div class="section-title" >
                    <h2 id="maincontent" tabindex="0" data-title="explore">Favorite Restaurant</h2>
                </div>
            </div>
            <div class="row ">
                <div class="restaurant">
                </div>
            </div>               
        </div>
    </section>
    <!-- Explore end -->
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
