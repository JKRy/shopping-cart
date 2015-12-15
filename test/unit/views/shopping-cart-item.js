require('../index');
var Backbone = require('backbone');
var expect = require('chai').expect;
var sinon = require('sinon');
var ShoppingCartItemView = require('../../../src/js/views/shopping-cart-item');

describe('Given the shopping cart item view', function() {
    beforeEach(function () {
        this.shoppingCartItemView = new ShoppingCartItemView({
            model: new Backbone.Model({
                toJSON: function() {}
            })
        });
    });

    it('Should create an instance of Backbone.View', function () {
        expect(this.shoppingCartItemView).to.be.an.instanceof(Backbone.View);
    });

    xdescribe('Given the render function', function () {
        it('Should render the provided template', function () {

        });
    });

    describe('Given the manageQuantity function', function () {
        describe('Given the cartQuantity is equal to 1', function() {
            var triggerSpy;

            beforeEach(function () {
                this.shoppingCartItemView = new ShoppingCartItemView({
                    model: new Backbone.Model({
                        'cartQuantity': 1,
                        'catalogueQuantity': 3
                    })
                });

                triggerSpy = sinon.spy();
                Backbone.trigger = triggerSpy;

                this.shoppingCartItemView.manageQuantity();
            });

            afterEach(function() {
               triggerSpy.reset();
            });

            it('Should increase catalogueQuantity by 1', function() {
                expect(this.shoppingCartItemView.model.get('catalogueQuantity')).to.equal(4);
            });
            it('Should call the trigger function with remove:from:cart', function() {
                expect(triggerSpy.called).to.be.true;
                expect(triggerSpy.calledWith('remove:from:cart')).to.be.true;
            });
        });

        describe('Given the cartQuantity is not equal to 1', function() {
            var triggerSpy;

            beforeEach(function () {
                this.shoppingCartItemView = new ShoppingCartItemView({
                    model: new Backbone.Model({
                        'cartQuantity': 2,
                        'catalogueQuantity': 4
                    })
                });

                triggerSpy = sinon.spy();
                Backbone.trigger = triggerSpy;

                this.shoppingCartItemView.manageQuantity();
            });

            afterEach(function() {
                triggerSpy.reset();
            });

            it('Should increase catalogueQuantity by 1', function() {
                expect(this.shoppingCartItemView.model.get('catalogueQuantity')).to.equal(5);
            });

            it('Should decrease cartQuantity by 1', function() {
                expect(this.shoppingCartItemView.model.get('cartQuantity')).to.equal(1);
            });

            describe('Given the catalogueQuantity is 0', function() {
                beforeEach(function() {
                    this.shoppingCartItemView.model.set('catalogueQuantity', 0);
                    this.shoppingCartItemView.manageQuantity();
                });

                it('Should set inStock to true', function() {
                    expect(this.shoppingCartItemView.model.get('inStock')).to.be.true;
                });
            })
        });
    });
});
