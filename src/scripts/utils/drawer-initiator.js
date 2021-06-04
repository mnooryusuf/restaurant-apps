const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, button);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer, button);
    });
  },

  _toggleDrawer(event, drawer, button) {
    event.stopPropagation();
    button.classList.toggle('active');
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer, button) {
    event.stopPropagation();
    button.classList.remove('active');
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
