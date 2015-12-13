// -------
//  Shopping Cart View
// -------
import Backbone from 'backbone';
import ProductCollection from './../collections/products';
import ShoppingCartItemView from './shopping-cart-item';
import ShoppingCartTemplate from './../../templates/shopping-cart-item.html';

'use strict';

module.exports = Backbone.View.extend({
    el: '#shopping-list',

    // Some other elements to cache
    total : $('#total'),
    basketTotal : $('#basket'),

    initialize: function() {
        this.collection = new ProductCollection;

        this.defaultMessage();

        this.collection.on('add remove change:quantity', function(item) {
            this.updateTotal();

            if( this.collection.length === 0 ) {
                this.defaultMessage();
            }
        }, this);
    },

    defaultMessage: function() {
        this.$el.addClass('empty').html('<tr><td colspan="4">Cart is empty</td></tr>');
    },

    add: function(item) {
        // Remove .empty class from the view
        this.$el.removeClass('empty');

        // Increase the quanity by 1
        item.quanity('increase');

        // Add the passed item model to the Cart collection
        this.collection.add(item);

        // Render the view
        this.render();
    },

    // Update the totals in the cart
    updateTotal: function() {
        // This is the var for the counter at the top of the page
        var basketTotal = 0;

        // Loop through this collection and addup the number of items
        this.collection.each(function(item) {
            basketTotal += item.get('quantity');
        });

        // Inject these totals
        this.basketTotal.html(basketTotal);
        this.total.html(this.collection.subtotal());
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
