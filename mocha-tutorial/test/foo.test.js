import React from 'react';

// var assert = require('assert');
describe('Simple as it gets', function () {
    describe('nothing', function () {
        it('auto pass', function () {
            //do nothing
        });
    });
    describe('throw an error', function () {
        it('auto fail', function () {
            throw new Error("uncaught error");
        });
    });
});