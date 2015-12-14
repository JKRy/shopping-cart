// -------
//  Catalogue Item View
// -------
import ProductCollection from './../collections/products'
var template = require('./../../templates/catalogue-item.hbs');

'use strict';

module.exports = Backbone.View.extend({

        tagName: 'div',
        className: 'catalogue-item',

        events: {
            'click .add-to-cart': 'addToCart'
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            var html = template(this.model.toJSON());
            this.$el.html(html);

            return this;
        },

        addToCart: function() {
            //First check quantity of item
            if(this.model.get('quantity') === 0) {
                return false;
            } else {
                Backbone.trigger('add:to:cart', this.model);
            }
        }
});


