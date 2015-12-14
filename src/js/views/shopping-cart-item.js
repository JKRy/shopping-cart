// -------
//  Shopping Cart Item View
// -------
import ProductCollection from './../collections/products';

var template = require('./../../templates/shopping-cart-item.hbs');

'use strict';

module.exports = Backbone.View.extend({

    tagName: 'tr',

    events : {
        'click .name' : 'remove',
        'click .quantity' : 'manageQuantity'
    },

    initialize: function() {
        this.render();

        this.model.on('change', function() {
            this.render();
        }, this);
    },

    render: function() {
        var html = template(this.model.toJSON());
        this.$el.html(html);
        return this;
    },

    manageQuantity: function(event) {
        var type = $(event.target).data('type');

        if(this.model.get('quantity') === 1 && type === 'decrease') {
            this.remove();
        } else {
            this.model.quanity(type);
        }
    },

    remove: function() {
        this.$el.fadeOut(500, function() {
            $(this).remove();
        });

        var cartItems = new ProductCollection();
        cartItems.remove(this.model);
    }
});
