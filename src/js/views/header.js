// -------
//  Header View
// -------
var template = require('./../../templates/header.hbs');

'use strict';

module.exports = Backbone.View.extend({

    el: '#header',

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(template);
    }
});
