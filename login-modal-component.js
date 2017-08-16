/*!
 * Copyright (c) 2012-2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';

export default {
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
  templateUrl: 'bedrock-angular-authn/login-modal-component.html'
};

/* @ngInject */
function Ctrl($timeout, brAlertService) {
  const self = this;

  self.$onInit = () => {
    self.loading = false;
    self.display = {
      cancel: false
    };

    // apply options
    const options = self.options || {};
    angular.extend(self.display, options.display || {});

    // FIXME: fix-up expired login
    self.newLogin = true;
    if('newLogin' in options) {
      self.newLogin = !!options.newLogin;
    }

    self.display.customWarning = options.customWarning || null;
  };

  // TODO: document why $timeout is used
  // clear existing feedback when showing this modal
  $timeout(() => {
    brAlertService.clearFeedback();
  });

  self.doneCallback = identity => {
    // success, close modal
    self.stackable.close(null);
    self.onLogin({identity: identity});
  };
}
