/*!
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
import angular from 'angular';
import AuthnService from './authn-service.js';
import LoginComponent from './login-component.js';
import LoginModalComponent from './login-modal-component.js';

const module = angular.module('bedrock.authn', [
  'bedrock.alert', 'bedrock.demo-warning', 'bedrock.modal', 'bedrock.resolver',
  'bedrock.session'
]);

module.service('brAuthnService', AuthnService);
module.component('brAuthnLogin', LoginComponent);
module.component('brAuthnLoginModal', LoginModalComponent);

/* @ngInject */
module.config(function(routeResolverProvider) {
  routeResolverProvider.add('bedrock.authn', 'session', resolve);

  /* @ngInject */
  function resolve($location, $route) {
    // get session options
    let options = $route.current.session || {};

    // backwards-compatibility
    if(options === 'required') {
      options = {
        require: 'identity'
      };
    }

    // ensure current session meets requirements
    const session = $route.current.locals.session || {};
    if(checkRequirements(session, options)) {
      return true;
    }

    // session requirements not met, redirect
    $location.path(options.redirectUrl || '/');
    return false;
  }
});

function checkRequirements(session, options) {
  let required = options.require || [];
  if(!Array.isArray(required)) {
    required = [required];
  }
  return required.every(function(x) {
    return session[x];
  });
}
