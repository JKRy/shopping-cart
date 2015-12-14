// -------
//  Footer View
// -------
var template = require('./../../templates/footer.hbs');

'use strict';

module.exports = Backbone.View.extend({

    el: '#footer',

    initialize: function() {
        this.render();
    },

    render: function() {
        this.$el.html(template);
    }
});

