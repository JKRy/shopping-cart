// -------
// Product Model
// -------
import Backbone from 'backbone';

'use strict';

module.exports = Backbone.Model.extend({

    defaults: {
        id:                null,
        name:              null,
        category:          null,
        color:             null,
        image:             null,
        price:             null,
        cartQuantity:      null,
        catalogueQuantity: null,
        inStock:           false,
        cartTotal:         null
    },

    initialize: function() {
      var catalogueQuantity = this.get('catalogueQuantity');

        if(catalogueQuantity >= 1) {
            this.set('inStock', true);
        }
    },

    //Set and return the total
    total: function() {
        var total = this.get('price') * this.get('cartQuantity');
        this.set('total', total);

        return total;
    }
});
