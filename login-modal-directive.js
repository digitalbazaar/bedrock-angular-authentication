/*!
 * Login Modal.
 *
 * Copyright (c) 2012-2016 Digital Bazaar, Inc. All rights reserved.
 *
 */
define(['angular', 'lodash'], function(angular, _) {

'use strict';

/* @ngInject */
function factory($timeout, brAlertService) {
  return {
    restrict: 'E',
    scope: {
      callback: '&brCallback',
      displayOrder: '=brDisplayOrder',
      methods: '=brMethods',
      options: '=?brOptions'
    },
    require: '^stackable',
    templateUrl: requirejs.toUrl(
      'bedrock-angular-authn/login-modal.html'),
    link: Link
  };

  function Link(scope, element, attrs, stackable) {
    var model = scope.model = {};
    model.loading = false;
    model.display = {
      cancel: false
    };

    // apply options
    var options = scope.options || {};
    _.assign(model.display, options.display || {});

    // FIXME: fix-up expired login
    model.newLogin = true;
    if('newLogin' in options) {
      model.newLogin = !!options.newLogin;
    }

    model.display.customWarning = options.customWarning || null;

    // TODO: document why $timeout is used
    // clear existing feedback when showing this modal
    $timeout(function() {
      brAlertService.clearFeedback();
    });
    model.displayOrder = scope.displayOrder;
    model.methods = scope.methods;

    model.doneCallback = function(identity) {
      // success, close modal
      stackable.close(null);
      scope.callback({identity: identity});
    };
  }
}

return {brAuthnLoginModal: factory};

});
