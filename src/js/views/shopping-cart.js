// -------
//  Shopping Cart View
// -------
//var Backbone = require('backbone');
import ProductCollection from './../collections/products';
import ShoppingCartItemView from './shopping-cart-item';
import _ from 'underscore';

'use strict';

module.exports = Backbone.View.extend({
    el: '#shopping-cart',

    total: $('#total'),
    basketTotal: $('#basket'),

    initialize: function() {
        this.collection = new ProductCollection();

        this.defaultMessage();

        // Add listeners for click events
        Backbone.on('add:to:cart', this.addToCart, this);
        Backbone.on('remove:from:cart', this.removeFromCart, this);

        //Normally use this approach - create a channel (Backbone.Radio)
        //Call the comply/command function with the name of the event
        // this.channel.comply('add:to:cart', this.addToCart, this)
        // this.channel.command('add:to:cart');


        /* TODO: Refactored to use Backbone.listenTo(collection, event, callback) */
        this.listenTo(this.collection, 'add remove change:cartQuantity', function() {
            this.updateTotal();

            if(this.collection.length === 0) {
                this.defaultMessage();
            }
            this.render();
        }.bind(this));

        // this.collection.on('add remove change:cartQuantity', function() {
        //     this.updateTotal();
        //     if(this.collection.length === 0) {
        //         this.defaultMessage();
        //     }
        //     this.render();
        // }.bind(this));
    },

    defaultMessage: function() {
        // this.$el.addClass('empty').html('<div>Cart is Empty</div>');
        this.$el.html('<div>Cart is Empty</div>');
    },

    addToCart: function(item) {
        // this.$el.removeClass('empty');
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

        /* TODO Function below was added */
        this.defaultMessage();
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
