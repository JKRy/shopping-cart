// -------
// Products Collection
// -------

import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Product from '../models/product';

'use strict';

module.exports = Backbone.Collection.extend({

    model: Product,
    url: './src/mock/products.json',

    sync: function(method, model, options) {
        var params = _.extend({
            type: 'GET',
            dataType: 'jsonp',
            url: './src/mock/products.json',
            processData: false
        }, options);

        return $.ajax(params);
    },

    subtotal: function() {
        var total = 0;

        this.each(function(model) {
           total += model.total();
        });

        return total.toFixed(2);
    }
});
