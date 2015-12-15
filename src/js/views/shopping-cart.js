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

        //Add listener for click events
        Backbone.on('add:to:cart', this.addToCart, this);
        Backbone.on('remove:from:cart', this.removeFromCart, this);

        this.collection.on('add remove change:cartQuantity', function(item) {
            this.updateTotal();

            if( this.collection.length === 0 ) {
                this.defaultMessage();
            }

            this.render();

        }, this);
    },

    defaultMessage: function() {
        this.$el.addClass('empty').html('<div>Cart is Empty</div>');
    },

    addToCart: function(item) {
        // Remove .empty class from the view
        this.$el.removeClass('empty');

        this.manageQuantities(item);

        // Add the passed item model to the Cart collection
        this.collection.add(item);

        // Render the view
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

        //Set the cart and catalogue quantities
        item.set('catalogueQuantity', --catalogueQuantity);
        item.set('cartQuantity', ++cartQuantity);
    },

    // Update the totals in the cart
    updateTotal: function() {
        // This is the var for the counter at the top of the page
        var basketTotal = 0;

        // Loop through this collection and addup the number of items
        this.collection.each(function(item) {
            basketTotal += item.get('cartQuantity');
        });

        // Inject these totals
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

        // Loop through the collection
        this.collection.each(function(item) {
            // Render each item model into this List view
            var newItem = new ShoppingCartItemView({model: item});
            this.$el.append(newItem.render().el);

            // Pass this list views context
        }, this);
    }
});
