// -------
//  Shopping Cart Item View
// -------
import ProductCollection from './../collections/products';
import $ from 'jquery';

var template = require('./../../templates/shopping-cart-item.hbs');

'use strict';

module.exports = Backbone.View.extend({

    tagName: 'div',
    className: 'shopping-cart-item',

    events : {
        'click .quantity-decrease' : 'manageQuantity'
    },

    initialize: function() {
        this.render();

        this.model.on('change', function() {
            this.render();
        }.bind(this));
    },

    render: function() {
        var html = template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },

    manageQuantity: function() {
        var catalogueQuantity = this.model.get('catalogueQuantity');
        var cartQuantity = this.model.get('cartQuantity');

        if(this.model.get('cartQuantity') === 1) {
            this.model.set('catalogueQuantity', ++catalogueQuantity);
            Backbone.trigger('remove:from:cart', this.model);
        } else {
            this.model.set('cartQuantity', --cartQuantity);
            this.model.set('catalogueQuantity', ++catalogueQuantity);

            if(catalogueQuantity > 0) {
                this.model.set('inStock', true);
            }
        }
    }
});
