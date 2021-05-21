import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import data from '../DATA.json';

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

const listRestaurantElement = document.querySelector(".restaurant");
listRestaurantElement.innerHTML = '';

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")){
       toggleNav(); 
    }
});

window.addEventListener("scroll",function(){
    if(this.pageYOffset > 60){
        this.document.querySelector(".header").classList.add("sticky");
    }else{
        this.document.querySelector(".header").classList.remove("sticky");
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
                <h3 tabindex="0">${restaurant.name}</h3>
                <h4 tabindex="0" class="ratings">Rating: ${restaurant.rating}<i class="fa fa-star"></i></h4>                        
            </div>
            <div class="description">
                <p tabindex="0">${restaurant.description}</p>
            </div>
        </div>
    </div>
    `;
});






