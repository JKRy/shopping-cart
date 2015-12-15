require('../index');
import Backbone from 'backbone'
var expect = require('chai').expect;
var sinon = require('sinon');
var Product = require('../../../src/js/models/product');

describe('The Product Model', function() {
    beforeEach(function() {
       this.product = new Product();
    });

    it('Should create an instance of Backbone.Model', function() {
        expect(this.product).to.be.an.instanceof(Backbone.Model);
    });

    describe('Given the initialize function', function() {
        beforeEach(function() {
           this.productModel = new Product({
               'catalogueQuantity': 5
           });
        });

        it('Should set the inStock parameter to true', function() {
            expect(this.productModel.get('inStock')).to.be.true;
        });
    });

    describe('Given the total function', function() {
        beforeEach(function() {
            this.productModel = new Product({
                'price': 2.00,
                'cartQuantity': 8
            });

            this.productModel.total();
        });

        it('Should return £16', function() {
           expect(this.productModel.get('total')).to.equal(16);
        });
    });
});
