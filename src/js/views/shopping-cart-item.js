// -------
//  Shopping Cart Item View
// -------
var Backbone = require('backbone');
import ProductCollection from './../collections/products';
import $ from 'jquery';

var template = require('./../../templates/shopping-cart-item.hbs');

'use strict';

module.exports = Backbone.View.extend({

    tagName: 'div',
    className: 'shopping-cart-item',

    events: {
        'click .quantity-decrease': 'manageQuantity'
    },

    initialize: function() {
        /* TODO refactored to use Backbone.listenTo(model, event, callback) */
        this.listenTo(this.model, 'change', this.render);

        // this.model.on('change', function() {
        //     this.render();
        // }.bind(this));

        this.render();
    },

    render: function() {
        var html = template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },

    manageQuantity: function() {
        var catalogueQuantity = this.model.get('catalogueQuantity');
        var cartQuantity = this.model.get('cartQuantity');

        /* TODO: Replace with already defined variable line 40 */
        if(this.model.get('cartQuantity') === 1) {
            this.model.set('catalogueQuantity', ++catalogueQuantity);
            /* TODO: rename remove:from:cart to remove:last:item:from:cart - ambiguous */
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
