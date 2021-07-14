import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
// import data from '../DATA.json';
import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
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
    this.document.querySelector('.app-bar').classList.add('sticky');
  } else {
    this.document.querySelector('.app-bar').classList.remove('sticky');
  }
});
