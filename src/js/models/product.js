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
        inStock:     false
    }
});

//Add validation for inStock false

