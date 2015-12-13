// -------
//  Catalogue View
// -------
import Backbone from 'backbone';
import ProductCollection from './../collections/products';
import CatalogueItemView from './../views/catalogue-item';
import CatalogueTemplate from './../../templates/catalogue.html';

'use strict';

module.exports = Backbone.View.extend({

    el: '#default-item-list',

    initialize: function() {
        console.log('catalogue view init');

        this.collection = new ProductCollection;
        this.collection.fetch();
        console.log('collection: ', this.collection); //This is empty - should be populated.

        this.render();
    },

    render: function() {
        console.log('catalogue render called');
        this.collection.each(function(item) {
            console.log('loop'); //Doesn't run as collection is empty
            var catalogueItemView = new CatalogueItemView({model: item});

            this.$el.append(catalogueItemView.render().el);
        }, this);
    }
});
