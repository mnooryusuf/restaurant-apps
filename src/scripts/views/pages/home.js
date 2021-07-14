import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <!-- Jombutron start-->
    <section class="home-section" id="home">
        <div class="home-bg lazyload" data-bg="./images/heros/hero-image_2.jpg"></div>
        <div class="container">
            <div class="row min-vh-100 align-item-center">
                <div class="home-text">
                    <h1 tabindex="0">Foodie Restaurant</h1>
                    <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, laudantium dicta laborum dolorem aliquid in sapiente officia modi consequuntur.</p>
                    <a href="#explore" class="btn btn-default">our restaurant</a>
                </div>
            </div>
        </div>
    </section>
    <!-- Jombuton end -->
    
    <!-- Explore start-->
    <section class="explore-section sec-padding" id="explore">
        <div class="container">
            <div class="row">
                <div class="section-title" >
                    <h2 id="maincontent" tabindex="0" data-title="explore">Our Restaurant</h2>
                </div>
            </div>
            <div class="row ">
                <div class="restaurants">
                </div>
            </div>               
        </div>
    </section>
    <!-- Explore end -->
    
    <!-- Testimonials section start -->
    <section class="testimonials-section sec-padding" id="testimonials">
        <div class="container">
            <div class="row">
                <div class="section-title">
                    <h2 tabindex="0" data-title="testimonials">some feedbacks</h2>
                </div>
            </div>
            <div class="row">
                <div class="testi-item">
                    <div class="testi-author">
                        <div class="testi-author-name">
                            <h3 tabindex="0">harishan</h3>
                            <span tabindex="0">food specialist</span>
                        </div>
                        <div class="testi-author-img">
                        <picture>
                             <source media="(max-width: 600px)" srcset="./images/harishan-small.jpg">
                            <img class="lazyload"  tabindex="0" src="./images/harishan-large.jpg" alt="testi author img">
                        </picture>
                            </div>
                    </div>
                    <p tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto, eius cum ad voluptatum esse explicabo doloribus.</p>
                    <div tabindex="0" class="ratings">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
                <div class="testi-item">
                    <div class="testi-author">
                        <div class="testi-author-name">
                            <h3 tabindex="0">lisa</h3>
                            <span tabindex="0">food specialist</span>
                        </div>
                        <div class="testi-author-img">
                            <picture>
                            <source media="(max-width: 600px)" srcset="./images/lisa-small.jpg">
                            <img class="lazyload"  tabindex="0" src="./images/lisa-large.jpg" alt="testi author img">
                            </picture>
                        </div>
                    </div>
                    <p tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto, eius cum ad voluptatum esse explicabo doloribus.</p>
                    <div tabindex="0" class="ratings">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
                <div class="testi-item">
                    <div class="testi-author">
                        <div class="testi-author-name">
                            <h3 tabindex="0">luis</h3>
                            <span tabindex="0">food specialist</span>
                        </div>
                        <div class="testi-author-img">
                            <picture>
                            <source media="(max-width: 600px)" srcset="./images/luis-small.jpg">
                            <img class="lazyload"  tabindex="0" src="./images/luis-large.jpg" alt="testi author img">
                            </picture>
                        </div>
                    </div>
                    <p tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto, eius cum ad voluptatum esse explicabo doloribus.</p>
                    <div tabindex="0" class="ratings">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>    
    <!-- Testimonials section end -->
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantsContainer = document.querySelector('.restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
