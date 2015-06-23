'use strict';
require('should');
var
    _ = require('lodash');

var Checkout = function() {
    var self = this;

    self.scan = function() {};

    self.totalCost = 0;

    return self;
};

describe('checkout', function() {
    describe('scanning items', function() {
        it('scanning one of anything costs 50', function() {
            var checkout = new Checkout();

            checkout.scan();

            checkout.totalCost.should.eql(50);
        });
    });
});
