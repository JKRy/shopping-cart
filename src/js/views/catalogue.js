// -------
//  Catalogue View
// -------
import Backbone from 'backbone';
import ProductCollection from './../collections/products';
import CatalogueItemView from './../views/catalogue-item';

'use strict';

module.exports = Backbone.View.extend({

    el: '#catalogue',

    initialize: function() {
        var that = this;

        this.collection = new ProductCollection();

        /* TODO: Refactored to use Backbone.listenTo(collection, event, callback)*/
        this.listenTo(this.collection, 'reset', this.render);
        // this.collection.on('reset', this.render, this);

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
        /* TODO: refactored to use bind() */
        // var that = this;

        this.collection.each(function(item) {
            var catalogueItemView = new CatalogueItemView({model: item});
            this.$el.append(catalogueItemView.render().el);
        }.bind(this));
    }
});
