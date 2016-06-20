/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([], function() {

'use strict';

/* @ngInject */
function register(module) {
  module.component('brAuthnLogin', {
    bindings: {
      displayLogin: '=brDisplayLogin'
    },
    controller: Ctrl,
    templateUrl: requirejs.toUrl('bedrock-angular-authn/login-component.html')
  });
}

/* @ngInject */
function Ctrl() {
  var self = this;

  self.login = function() {
    self.displayLogin = true;
  };
}

return register;

});
