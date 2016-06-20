/*!
 * Login Modal.
 *
 * Copyright (c) 2012-2016 Digital Bazaar, Inc. All rights reserved.
 *
 */
define(['lodash'], function(_) {

'use strict';

function register(module) {
  module.component('brAuthnLoginModal', {
    bindings: {
      onLogin: '&brOnLogin',
      displayOrder: '=brDisplayOrder',
      methods: '=brMethods',
      options: '=?brOptions'
    },
    controller: Ctrl,
    require: {
      stackable: '^stackable'
    },
    templateUrl: requirejs.toUrl(
      'bedrock-angular-authn/login-modal-component.html')
  });
}

/* @ngInject */
function Ctrl($timeout, brAlertService) {
  var self = this;
  self.loading = false;
  self.display = {
    cancel: false
  };

  // apply options
  var options = self.options || {};
  _.assign(self.display, options.display || {});

  // FIXME: fix-up expired login
  self.newLogin = true;
  if('newLogin' in options) {
    self.newLogin = !!options.newLogin;
  }

  self.display.customWarning = options.customWarning || null;

  // TODO: document why $timeout is used
  // clear existing feedback when showing this modal
  $timeout(function() {
    brAlertService.clearFeedback();
  });

  self.doneCallback = function(identity) {
    // success, close modal
    self.stackable.close(null);
    self.onLogin({identity: identity});
  };
}

return register;

});
