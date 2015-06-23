'use strict';
var _ = require('lodash');

module.exports = function(eventStore) {
    var
        itemStockedEvents = eventStore.replay('itemStocked'),
        itemScannedEvents = eventStore.replay('itemScanned'),
        scannedItems = _.map(itemScannedEvents, function(itemScannedEvent) {
            return itemScannedEvent.item;
        }),
        stockedItems = _.map(itemStockedEvents, function(itemStockedEvent) {
            return itemStockedEvent.item;
        });

    _.reduce(scannedItems, function(totalCost, scannedItem) {
        return totalCost += _.map(stockedItems, function(stockItem) {
            return stockItem.price;
        });
    }, 0);
};
