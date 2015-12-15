require('../index');
var Backbone = require('backbone');
var expect = require('chai').expect;
var sinon = require('sinon');
var CatalogueItemView = require('../../../src/js/views/catalogue-item');

describe('Given the catalogue item view', function() {
    beforeEach(function () {
        this.catalogueItemView = new CatalogueItemView({
            model: new Backbone.Model({
                on: function() {}
            })
        });
    });

    it('Should create an instance of Backbone.View', function () {
        expect(this.catalogueItemView).to.be.an.instanceof(Backbone.View);
    });

    describe('Given the render function', function() {
        it('Should render the provided template', function() {

        });
    });

    describe('Given the addToCart function', function() {
        var triggerSpy, renderSpy;

        describe('Given the catalogueQuantity is less than or equal to 1', function() {
            beforeEach(function() {
                this.catalogueItemView = new CatalogueItemView({
                    model: new Backbone.Model({
                        'catalogueQuantity': 1,
                        'inStock': true
                    })
                });

                triggerSpy = sinon.spy();
                renderSpy = sinon.spy();

                Backbone.trigger = triggerSpy;
                this.catalogueItemView.render = renderSpy;

                this.catalogueItemView.addToCart();
            });

            afterEach(function() {
                triggerSpy.reset();
                renderSpy.reset();
            });

            it('Should call the trigger function with add:to:cart', function() {
                expect(triggerSpy.called).to.be.true;
                expect(triggerSpy.calledWith('add:to:cart')).to.be.true;
            });

            it('Should set inStock to false', function() {
                expect(this.catalogueItemView.model.get('inStock')).to.be.false;
            });

            it('Should call render', function() {
                expect(renderSpy.called).to.be.true;
            });
        });

        describe('Given the catalogueQuantity is greater than 1', function() {
            beforeEach(function() {
                this.catalogueItemView = new CatalogueItemView({
                    model: new Backbone.Model({
                        'catalogueQuantity': 5,
                        'inStock': true
                    })
                });

                triggerSpy = sinon.spy();

                Backbone.trigger = triggerSpy;
                this.catalogueItemView.render = renderSpy;

                this.catalogueItemView.addToCart();
            });

            afterEach(function() {
                triggerSpy.reset();
            });

            it('Should call the trigger function with add:to:cart', function() {
                expect(triggerSpy.called).to.be.true;
                expect(triggerSpy.calledWith('add:to:cart')).to.be.true;
            });
        });
    });
});