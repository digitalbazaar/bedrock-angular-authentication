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

var module = angular.module('bedrock.authn', ['bedrock.modal']);

Array.prototype.slice.call(arguments, 1).forEach(function(register) {
  register(module);
});

});
