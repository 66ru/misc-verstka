'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var LilRouter = (function () {
  function LilRouter(overrides) {
    _classCallCheck(this, LilRouter);

    var options = {
      root: '/'
    };
    _extends(options, overrides);

    this.root = options.root;
    this.routes = new Map();
  }

  _createClass(LilRouter, [{
    key: 'add',
    value: function add(route, action) {
      this.routes.set(route, action);
      return this;
    }
  }, {
    key: 'remove',
    value: function remove(route) {
      this.routes['delete'](route);
      return this;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.routes.clear();
      return this;
    }
  }, {
    key: 'check',
    value: function check() {
      this.routes.forEach((function (action, route) {
        var match = this.getPath().match(route);
        if (match) {
          match.shift();
          action.apply(undefined, _toConsumableArray(match));
        }
      }).bind(this));
      return this;
    }
  }, {
    key: 'listen',
    value: function listen() {
      window.addEventListener('popstate', this.check());
      return this;
    }
  }, {
    key: 'stopListening',
    value: function stopListening() {
      window.removeEventListener('popstate', this.check());
      return this;
    }
  }, {
    key: 'navigate',
    value: function navigate() {
      var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      history.pushState(null, '', this.root + path);
      return this;
    }
  }, {
    key: 'getPath',
    value: function getPath() {
      return decodeURI(location.pathname);
    }
  }]);

  return LilRouter;
})();
