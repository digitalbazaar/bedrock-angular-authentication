/*!
 * Copyright (c) 2016 Digital Bazaar, Inc. All rights reserved.
 */
define(['angular'], function(angular) {

'use strict';

/* @ngInject */
function factory() {
  return {
    restrict: 'E',
    scope: {
      displayLogin: '='
    },
    templateUrl: requirejs.toUrl('bedrock-angular-authn/login-directive.html'),
    link: Link
  };

  function Link(scope, elem, attrs) {
    var model = scope.model = {};

    model.login = function() {
      scope.displayLogin = true;
    };
  }
}

return {brAuthnLogin: factory};

});
