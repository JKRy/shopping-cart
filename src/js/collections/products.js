// -------
// Products Collection
// -------

import Backbone from 'backbone';
import Product from '../models/product';

'use strict';

module.exports = Backbone.Collection.extend({

    model: Product

});
