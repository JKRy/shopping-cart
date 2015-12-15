// -------
//  Shopping Cart View
// -------
//var Backbone = require('backbone');
import ProductCollection from './../collections/products';
import ShoppingCartItemView from './shopping-cart-item';
import _ from 'underscore'

'use strict';

module.exports = Backbone.View.extend({
    el: '#shopping-cart',

    // Some other elements to cache
    total : $('#total'),
    basketTotal : $('#basket'),

    initialize: function() {

        this.collection = new ProductCollection;

        this.defaultMessage();

        //Add listeners for click events
        Backbone.on('add:to:cart', this.addToCart, this);
        Backbone.on('remove:from:cart', this.removeFromCart, this);

        this.collection.on('add remove change:cartQuantity', function() {
            this.updateTotal();

            if( this.collection.length === 0 ) {
                this.defaultMessage();
            }

            this.render();

        }.bind(this));
    },

    defaultMessage: function() {
        this.$el.addClass('empty').html('<div>Cart is Empty</div>');
    },

    addToCart: function(item) {
        this.$el.removeClass('empty');
        this.manageQuantities(item);
        this.collection.add(item);
        this.render();
    },

    removeFromCart: function(model) {
        model.set({
            'inStock': true,
            'cartQuantity': 0
        });
        this.collection.remove(model);
    },

    manageQuantities: function(item) {
        var catalogueQuantity = item.get('catalogueQuantity');
        var cartQuantity = item.get('cartQuantity');

        item.set('catalogueQuantity', --catalogueQuantity);
        item.set('cartQuantity', ++cartQuantity);
    },

    updateTotal: function() {
        // create variable for the counter at the top of the page
        var basketTotal = 0;

        // Loop through this collection and addup the number of items
        this.collection.each(function(item) {
            basketTotal += item.get('cartQuantity');
        });

        this.basketTotal.html(basketTotal);
        this.total.html(this.calculateSubtotal());
    },

    calculateSubtotal: function() {
        var total = 0;

        this.collection.each(function(model) {
            total += model.total();
        });

        return total.toFixed(2);
    },

    render: function() {
        // Empty the view
        this.$el.html('');

        // Loop through the collection and render each model into the cart view
        this.collection.each(function(item) {
            var newItem = new ShoppingCartItemView({model: item});
            this.$el.append(newItem.render().el);
        }.bind(this));
    }
});
