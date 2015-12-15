// -------
//  Catalogue View
// -------
import Backbone from 'backbone'
import ProductCollection from './../collections/products';
import CatalogueItemView from './../views/catalogue-item';

'use strict';

module.exports = Backbone.View.extend({

    el: '#catalogue',

    initialize: function() {
        var that = this;

        this.collection = new ProductCollection();

        this.collection.on('reset', this.render, this);
        this.collection.fetch({
            success: function() {
                that.render();
            },
            error: function(message) {
                console.log(message);
            }
        });
    },

    render: function() {
        var that = this;

        this.collection.each(function(item) {
            var catalogueItemView = new CatalogueItemView({model: item});
            that.$el.append(catalogueItemView.render().el);
        });
    }
});
