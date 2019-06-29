/* eslint-disable func-names, prefer-arrow-callback */
const assert = require('assert');
const authController = require('./../../controllers/auth.controller');

describe('AuthController', function () {
  describe('isAuthorized', function () {
    it('Should return false if not authorized', function () {
      assert.equal(false, authController.isAuthorized(['user'], 'admin'));
    });

    it('Should return true if authorized', function () {
      assert.equal(true, authController.isAuthorized(['admin'], 'admin'));
    });
  });
});
