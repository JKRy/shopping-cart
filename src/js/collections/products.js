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

    sync: function(method, model, options) {
        var params = _.extend({
            type: 'GET',
            dataType: 'json',
            url: './src/mock/products.json',
            processData: false
        }, options);

        return $.ajax(params);
    }
});
