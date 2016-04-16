/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([
  'angular',
  './authn-service',
  './login-directive',
  './login-modal-directive'
], function(
  angular,
  authnService,
  loginDirective,
  loginModalDirective) {

'use strict';

var module = angular.module('bedrock.authn', ['bedrock.modal']);

module.directive(loginDirective);
module.directive(loginModalDirective);
module.service(authnService);

return module.name;

});
