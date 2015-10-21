'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lilRouterInstance = null;

var LilRouter = (function () {
  function LilRouter(opts) {
    _classCallCheck(this, LilRouter);

    if (!_lilRouterInstance) {
      this._initialize(opts);
    }
    return _lilRouterInstance;
  }

  _createClass(LilRouter, [{
    key: 'add',
    value: function add(route, action) {
      this.routes.set(route, action);
    }
  }, {
    key: 'remove',
    value: function remove(route) {
      this.routes['delete'](route);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.routes.clear();
    }
  }, {
    key: 'check',
    value: function check() {
      this.routes.forEach((function (action, route) {
        var match = this._getPath().match(route);
        if (match) {
          match.shift();
          action.apply(undefined, _toConsumableArray(match));
        }
      }).bind(this));
    }
  }, {
    key: 'listen',
    value: function listen() {
      window.addEventListener('popstate', this.popStateListener, false);
    }
  }, {
    key: 'stop',
    value: function stop() {
      window.removeEventListener('popstate', this.popStateListener, false);
    }
  }, {
    key: 'navigate',
    value: function navigate() {
      var path = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      // Navigate to root if (path === undefined).
      history.pushState(null, '', this.root + this._clearPath(path));
    }
  }, {
    key: '_initialize',
    value: function _initialize(opts) {
      var options = {
        root: '/'
      };
      _extends(options, opts);

      this.root = options.root;
      this.routes = new Map();

      this.popStateListener = this.check.bind(this);

      _lilRouterInstance = this;
    }
  }, {
    key: '_getPath',
    value: function _getPath() {
      return decodeURI(location.pathname);
    }
  }, {
    key: '_clearPath',
    value: function _clearPath(path) {
      return path.replace(this.root, '');
    }
  }]);

  return LilRouter;
})();