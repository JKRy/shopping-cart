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

    initialize: function() {
      var quantity = this.get('quantity');

        if(quantity > 0) {
            this.set('inStock', true);
        }
    },

    //Set and return the total
    total: function() {
        var total = this.get('price') * this.get('quantity');
        this.set('total', total);

        return total;
    },

    quantity : function( type ) {
        var qty = this.get('quantity');
        this.set('quantity', (type === 'increase' ? ++qty : --qty) );

    }

});
