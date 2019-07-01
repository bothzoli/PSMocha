/* eslint-disable func-names, prefer-arrow-callback */
const assert = require('assert');
const authController = require('./../../controllers/auth.controller');

describe('AuthController', function () {
  beforeEach(function setupUserRole() {
    authController.setRoles(['user']);
  });

  describe('isAuthorized', function () {
    it('Should return false if not authorized', function () {
      assert.equal(false, authController.isAuthorized('admin'));
    });

    it.skip('Should return true if authorized', function () {
      authController.setRoles(['user', 'admin']);
      assert.equal(true, authController.isAuthorized('admin'));
    });

    it('Should not allow get if not authorized');

    it('Should allow get if authorized');
  });

  describe('isAuthorizedAsync', function () {
    it.only('Should return false if not authorized', function (done) {
      authController.isAuthorizedAsync(
        'admin',
        (isAuth) => {
          assert.equal(false, isAuth);
          done();
        }
      );
    });

    it('Should return true if authorized', function (done) {
      authController.setRoles(['user', 'admin']);
      authController.isAuthorizedAsync(
        'admin',
        (isAuth) => {
          assert.equal(true, isAuth);
          done();
        }
      );
    });
  });
});
