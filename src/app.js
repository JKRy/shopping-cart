import config from './js/config'
import ProductCollection from './js/collections/products'
import ProductModel from './js/models/product'
import CatalogueView from './js/views/catalogue'

require('./static/assets');

(() => {
    document.write(`Hello ${config.name}`);

    var App = {
        Collection : {},
        Model : {},
        View : {}
    };

    App.itemView = new CatalogueView();


})();


