'use strict';

var chai = require('chai');
var expect = chai.expect;
var models = require('../../database/database');
describe('Confirm Database Model', function () {
  it('Should exist Model User', function () {
    expect(models.User).not.undefined
  });
  it('Should exist Model Payment', function () {
    expect(models.Payment).not.undefined
  });
  it('Should exist Model Region', function () {
    expect(models.Region).not.undefined
  });

});