Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Restaurant tidak ditemukan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('Restaurant tidak ditemukan', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('.restaurant__name a');
  I.click(locate('.restaurant__name a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-items');
});
