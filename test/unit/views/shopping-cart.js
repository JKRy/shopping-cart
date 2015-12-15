require('../index');
var expect = require('chai').expect;
var sinon = require('sinon');
//jQuery Window required before can be imported.
//var ShoppingCartView = require('../../../src/js/views/shopping-cart');

xdescribe('Given the shopping cart view', function() {
    beforeEach(function () {
        this.shoppingCartView = new ShoppingCartView();
    });

    it('Should create an instance of Backbone.View', function () {
        expect(this.shoppingCartView).to.be.an.instanceof(Backbone.View);
    });

    describe('Given the render function', function() {
        it('Should render each of the children views', function() {

        });
    });

    describe('Given the calculateSubtotal function', function() {
        beforeEach(function() {
            this.shoppingCartView.collection = new Backbone.Collection([
                new Backbone.Model({total: 25}),
                new Backbone.Model({total: 40}),
                new Backbone.Model({total: 100}),
                new Backbone.Model({total: 250})
            ]);
        });

        it('Should return the shopping cart total', function() {
            expect(this.shoppingCartView.calculateSubtotal.call(this.shoppingCartView)).to.equal(415);
        });
    });

    describe('Given the updateTotal function', function() {
        it('Should render the sub total to the view', function() {

        });
    });

    describe('Given the manageQuantities function', function() {
        it('Should decrease the catalogueQuantity by 1', function() {

        });

        it('Should increase the cartQuantity by 1', function() {

        });
    });

    describe('Given the removeFromCart function', function() {
        it('Should set inStock to true', function() {

        });

        it('Should set cartQuantity to 0', function() {

        });

        it('Should remove the selected model from the collection', function() {

        });
    });

    describe('Given the addToCart function', function() {
        it('Should call the manageQuantities function', function() {

        });

        it('Should add the selected model to the collection', function() {

        });

        it('Should call the render function', function() {

        });
    });

});