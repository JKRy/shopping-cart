require('../index');
var expect = require('chai').expect;
var sinon = require('sinon');
//jQuery Window required before can be imported.
//var ShoppingCartItemView = require('../../../src/js/views/shopping-cart-item');

xdescribe('Given the shopping cart item view', function() {
    beforeEach(function () {
        this.shoppingcartItemView = new ShoppingCartItemView();
    });

    it('Should create an instance of Backbone.View', function () {
        expect(this.shoppingcartItemView).to.be.an.instanceof(Backbone.View);
    });

    describe('Given the render function', function () {
        it('Should render the provided template', function () {

        });
    });

    describe('Given the manageQuantity function', function () {
        describe('Given the cartQuantity is equal to 1', function() {
            it('Should increase catalogueQuantity by 1', function() {

            });
            it('Should call the trigger function with remove:from:cart', function() {

            });
        });

        describe('Given the cartQuantity is not equal to 1', function() {
            it('Should increase catalogueQuantity by 1', function() {

            });
            it('Should decrease cartQuantity by 1', function() {

            });

            describe('Given the catalogueQuantity is 0', function() {
                it('Should set inStock to true', function() {

                });
            })
        });
    });
});
