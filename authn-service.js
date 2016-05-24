/*!
 * Authn Service.
 *
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 *
 */
define(['angular'], function(angular) {

'use strict';

function register(module) {
  module.service('brAuthnService', factory);
}

/* @ngInject */
function factory() {
  var service = {};
  service.methods = {};
  service.displayOrder = [];

  service.register = function(method, options) {
    if(method in service.methods) {
      throw new Error('Method "' + method + '" is already registered.');
    }
    service.methods[method] = options;
    // if displayOrder for this method has not been defined, add it to the end
    if(service.displayOrder.indexOf(method) === -1) {
      service.displayOrder.push(method);
    }
  };

  return service;
}

return register;

});
