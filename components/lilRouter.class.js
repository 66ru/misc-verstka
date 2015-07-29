'use strict';

class LilRouter {
  constructor(overrides) {
    var options = {
      root: '/',
    };
    Object.assign(options, overrides);

    this.root = options.root;
    this.routes = new Map();
  }

  add(route, action) {
    this.routes.set(route, action);
    return this;
  }

  remove(route) {
    this.routes.delete(route);
    return this;
  }

  clear() {
    this.routes.clear();
    return this;
  }

  check() {
    this.routes.forEach(function(action, route) {
      var match = this.getPath().match(route);
      if (match) {
        match.shift();
        action(...match);
      }
    }.bind(this));
    return this;
  }

  listen() {
    window.addEventListener('popstate', this.check());
    return this;
  }

  stopListening() {
    window.removeEventListener('popstate', this.check());
    return this;
  }

  navigate(path = '') {
    history.pushState(null, '', this.root + path);
    return this;
  }

  getPath() {
    return decodeURI(location.pathname);
  }
}
