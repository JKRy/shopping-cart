require('../index');
import Backbone from 'backbone'
var expect = require('chai').expect;
var sinon = require('sinon');
var ProductCollection = require('../../../src/js/collections/products');

describe('The Products Collection', function() {
    beforeEach(function() {
        this.products = new ProductCollection();
    });

    it('Should create an instance of Backbone.Collection', function() {
        expect(this.products).to.be.an.instanceof(Backbone.Collection);
    });

    xdescribe('Should call the sync function', function() {
        var syncSpy = sinon.spy();

        this.productsCollection = new ProductCollection({
            model: new Backbone.Model(),
            sync: syncSpy
        });

        it('Should call the sync function', function() {
            expect(syncSpy.called).to.be.true;
        });
    });
});
