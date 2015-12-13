// -------
//  Shopping Cart Item View
// -------
import Backbone from 'backbone';
import ProductCollection from './../collections/products';
import ShoppingCartItemTemplate from './../../templates/shopping-cart-item.html';

'use strict';

module.exports = Backbone.View.extend({
    tagName: 'tr',
    template: ShoppingCartItemTemplate,
    //template : $('#tmp-shoppingCartItem').html(),

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
        this.$el.html(_.template(this.template, this.model.toJSON()));
        return this;
    },

    manageQuantity: function(event) {
        var type = $(event.target).data('type');

        if( this.model.get('quantity') === 1 && type === 'decrease') {
            this.remove();
        } else {
            this.model.quanity(type);
        }
    },

    remove: function(){
        this.$el.fadeOut(500, function() {
            $(this).remove();
        });

        var cartItems = new ProductCollection();
        cartItems.remove(this.model);
    }
});
