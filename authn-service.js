/*!
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 */
/* @ngInject */
export default function factory() {
  const service = {};
  service.methods = {};
  service.displayOrder = [];

  service.register = (method, options) => {
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
