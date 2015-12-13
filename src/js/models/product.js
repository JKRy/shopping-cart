// -------
// Product Model
// -------
import Backbone from 'backbone';

'use strict';

module.exports = Backbone.Model.extend({

    defaults: {
        id:          null,
        name:        null,
        category:    null,
        color:       null,
        image:       null,
        price:       null,
        quantity:    null,
        inStock:     false,
        total:       null
    },

    //Set and return the total
    total: function() {
        var total = this.get('price') * this.get('quantity');
        this.set('total', total);

        return total;
    },

    updateQuantity: function() {
        var quantity = this.get('quantity');
        //increase and decrease quantity levels and when quantity is 0
        //set inStock to 0
        if(quantity === 0) {
            this.set('inStock', 'false');
        }

    }

});
