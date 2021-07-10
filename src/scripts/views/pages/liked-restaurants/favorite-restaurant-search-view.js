import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
              <div id="restaurant-search-container">
                  <input id="query" type="text">
                  <div class="restaurant-result-container">
                      <ul class="restaurants">
                      </ul>
                  </div>
              </div>
              `;
  }

  getFavoriteRestaurantTemplate() {
    return `
    <section class="explore-section sec-padding" id="explore">
          <div class="container">
              <div class="row">
                  <div class="section-title" >
                      <h2 id="maincontent" tabindex="0" data-title="explore">Favorite Restaurant</h2>
                  </div>
              </div>
              <div class="row ">
                  <div id="restaurants" class="restaurant">
                  </div>
              </div>               
          </div>
      </section>       
       `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    let html;

    if (restaurants.length > 0) {
      html = restaurants.reduce(
        (carry, restaurant) => carry.concat(`<li class="restaurant"><span class="restaurant__title">${restaurant.title || '-'}</span></li>`),
        '',
      );
    } else {
      html = '<div class="restaurants__not__found">Restaurant tidak ditemukan</div>';
    }

    document.querySelector('.restaurants').innerHTML = html;

    document.getElementById('restaurant-search-container')
      .dispatchEvent(new Event('restaurants:searched:updated'));
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = '<div class="restaurant-item__not__found"></div>';
    }
    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }
}

export default FavoriteRestaurantSearchView;
