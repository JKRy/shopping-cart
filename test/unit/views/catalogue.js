require('../index');
var expect = require('chai').expect;
var sinon = require('sinon');
var CatalogueView = require('../../../src/js/views/catalogue');

xdescribe('Given the catalogue view', function() {
    beforeEach(function () {
        this.catalogueView = new CatalogueView();
    });

    it('Should create an instance of Backbone.View', function () {
        expect(this.catalogueView).to.be.an.instanceof(Backbone.View);
    });

    describe('Given the render function', function() {
        it('Should render each of the children views', function() {

        });
    });
});

