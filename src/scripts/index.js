import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
// import data from '../DATA.json';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.nav-toggler'),
  drawer: document.querySelector('.nav'),
  content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('scroll', function scroll() {
  if (this.pageYOffset > 60) {
    this.document.querySelector('.header').classList.add('sticky');
  } else {
    this.document.querySelector('.header').classList.remove('sticky');
  }
});
