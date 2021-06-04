import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import data from '../DATA.json';
import App from './views/app';

const app = new App({
  button: document.querySelector('.nav-toggler'),
  drawer: document.querySelector('.nav'),
  content: document.querySelector('#main'),
});

const listRestaurantElement = document.querySelector('.restaurant');
listRestaurantElement.innerHTML = '';

window.addEventListener('scroll', function scroll() {
  if (this.pageYOffset > 60) {
    this.document.querySelector('.header').classList.add('sticky');
  } else {
    this.document.querySelector('.header').classList.remove('sticky');
  }
});

data.restaurants.forEach((restaurant) => {
  listRestaurantElement.innerHTML += `
    <div class="restaurant-items">
        <img tabindex="0" src="${restaurant.pictureId}" alt="${restaurant.name}">
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
});
