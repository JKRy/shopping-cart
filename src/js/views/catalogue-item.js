// -------
//  Catalogue Item View
// -------
import Backbone from 'backbone';
import $ from 'jquery';
import CatalogueItemTemplate from './../../templates/catalogue-item.html';

'use strict';

module.exports = Backbone.View.extend({

        tagName: 'div',
        template: CatalogueItemTemplate,
        //template: $('#tmp-shoppingListItem').html(),

        events: {
            'click': 'addToCart'
        },

        initialize: function() {
            console.log('catalogue item view init');
            this.render();
        },

        render: function() {
            this.$el.html(_.template(this.template, this.model.toJSON()));

            return this;
        },

        addToCart: function() {
            App.cart.add(this.model);
        }
});


