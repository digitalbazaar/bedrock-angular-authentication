/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([
  'angular',
  './authn-service',
  './login-component',
  './login-modal-component'
], function(angular) {

'use strict';

var module = angular.module(
  'bedrock.authn',
  ['bedrock.alert', 'bedrock.modal', 'bedrock.resolver', 'bedrock.session']);

Array.prototype.slice.call(arguments, 1).forEach(function(register) {
  register(module);
});

/* @ngInject */
module.config(function(routeResolverProvider) {
  routeResolverProvider.add('bedrock.authn', 'session', resolve);

  /* @ngInject */
  function resolve($location, $route) {
    // get session options
    var options = $route.current.session || {};

    // backwards-compatibility
    if(options === 'required') {
      options = {
        require: 'identity'
      };
    }

    // ensure current session meets requirements
    var session = $route.current.locals.session || {};
    if(checkRequirements(session, options)) {
      return true;
    }

    // session requirements not met, redirect
    $location.path(options.redirectUrl || '/');
    return false;
  }
});

function checkRequirements(session, options) {
  var required = options.require || [];
  if(!Array.isArray(required)) {
    required = [required];
  }
  return required.every(function(x) {
    return session[x];
  });
}

});
