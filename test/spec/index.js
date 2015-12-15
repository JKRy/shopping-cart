//Functional tests spec'ed out - still to complete.
import webdriverio from 'webdriverio';

describe('When I am on the shopping retailer catalogue page', function () {
    it('Should display 13 items of clothing', function() {

    });

    it('Should show an add to cart button', function() {

    });

    it('Should show a remove from cart button', function() {

    });

    it('Should show an apply discount button', function() {

    });

    describe('Given the add to cart button is selected', function() {
        it('Should add the selected item to the shopping cart', function() {

        });
    });

    describe('Given the remove from cart button is selected', function() {
        it('Should remove the selected item from the shopping cart', function() {

        });
    });

    describe('Given the shopping cart contains 2 items', function() {
        it('Should display the total price for the products contained in the shopping cart', function() {

        });

        describe('Given discounts have been applied to the items', function() {
            it('Should show the updated price after discounts have been applied', function() {

            });
        });
    });

    describe('Given the shopping cart contains 3 items', function() {
        describe('Given an invalid discount voucher has been applied', function() {
            it('Should display an error advising of this', function() {

            });
        });
    });

    describe('Given an item is out of stock', function() {
        it('Should not display the add to cart button', function() {

        });
    });
});
