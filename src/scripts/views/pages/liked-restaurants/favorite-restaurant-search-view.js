import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <section class="explore-section sec-padding" id="explore">
        <div class="container">
        <input id="query" type="text">
            <div class="row">
                <div class="section-title" >
                    <h2 id="maincontent" tabindex="0" data-title="explore">Favorite Restaurant</h2>
                </div>
            </div>
            <div class="row ">
                <div class="restaurants">
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

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.querySelector('.restaurants').innerHTML = html;

    document.querySelector('.restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found">Restaurant tidak ditemukan</div>';
  }
}

export default FavoriteRestaurantSearchView;
