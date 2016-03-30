/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define([
  'angular',
  './authn-service',
  './login-modal-directive'
], function(
  angular,
  authnService,
  loginModalDirective) {

'use strict';

var module = angular.module('bedrock.authn', []);

module.directive(loginModalDirective);
module.service(authnService);

return module.name;

});
