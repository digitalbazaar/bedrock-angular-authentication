/*!
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
/* @ngInject */
export default {
  bindings: {
    displayLogin: '=brDisplayLogin'
  },
  controller: Ctrl,
  templateUrl: 'bedrock-angular-authn/login-component.html'
};

/* @ngInject */
function Ctrl() {
  var self = this;

  self.login = function() {
    self.displayLogin = true;
  };
}
