// -------
//  Catalogue Item View
// -------
var Backbone = require('backbone');
import ProductCollection from './../collections/products'
var template = require('./../../templates/catalogue-item.hbs');

'use strict';

module.exports = Backbone.View.extend({

        tagName: 'div',
        className: 'catalogue-item',

        events: {
            'click .add-to-cart': 'addToCart'
        },

        initialize: function() {
            this.model.on('change', function() {
                this.render();
            }.bind(this));

            this.render();
        },

        render: function() {
            var html = template(this.model.toJSON());
            this.$el.html(html);

            return this;
        },

        addToCart: function() {
            if(this.model.get('catalogueQuantity') <= 1) {
                Backbone.trigger('add:to:cart', this.model);
                this.model.set('inStock', false);
                this.render();
            } else {
                Backbone.trigger('add:to:cart', this.model);
            }
        }
});


