import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <!-- Jombutron start-->
    <section class="home-section" id="home">
        <div class="home-bg"></div>
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
                <div class="restaurant">
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
                            <img tabindex="0" src="images/testimonials/harishan.jpg" alt="testi author img">
                        </div>
                    </div>
                    <p tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto, eius cum ad voluptatum esse explicabo doloribus.</p>
                    <div tabindex="0" class="ratings">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="testi-item">
                    <div class="testi-author">
                        <div class="testi-author-name">
                            <h3 tabindex="0">lisa</h3>
                            <span tabindex="0">food specialist</span>
                        </div>
                        <div class="testi-author-img">
                            <img tabindex="0" src="images/testimonials/lisa.jpg" alt="testi author img">
                        </div>
                    </div>
                    <p tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto, eius cum ad voluptatum esse explicabo doloribus.</p>
                    <div tabindex="0" class="ratings">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div class="testi-item">
                    <div class="testi-author">
                        <div class="testi-author-name">
                            <h3 tabindex="0">luis</h3>
                            <span tabindex="0">food specialist</span>
                        </div>
                        <div class="testi-author-img">
                            <img tabindex="0" src="images/testimonials/luis.jpg" alt="testi author img">
                        </div>
                    </div>
                    <p tabindex="0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam architecto, eius cum ad voluptatum esse explicabo doloribus.</p>
                    <div tabindex="0" class="ratings">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
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
    const restaurantsContainer = document.querySelector('.restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
