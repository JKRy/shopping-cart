import Backbone from 'backbone'
import HeaderView from './js/views/header'
import CatalogueView from './js/views/catalogue'
import CartView from './js/views/shopping-cart'
import FooterView from './js/views/footer'

require('./static/assets');

(() => {
// Generic Namespace for our App
    var App = {
        Collection : {},
        Model : {},
        View : {}
    };

    App.header = new HeaderView();
    App.catalogue = new CatalogueView();
    App.cart = new CartView();
    App.footer = new FooterView();

})();


