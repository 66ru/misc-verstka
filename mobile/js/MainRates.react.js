'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainRates = (function (_React$Component) {
  _inherits(MainRates, _React$Component);

  function MainRates(props) {
    _classCallCheck(this, MainRates);

    _get(Object.getPrototypeOf(MainRates.prototype), 'constructor', this).call(this, props);
    this.state = {
      rates: []
    };
  }

  _createClass(MainRates, [{
    key: 'fetchRates',
    value: function fetchRates() {
      var _this = this;

      $.getJSON('rates.json', function (data) {
        _this.setState({ rates: data });
        _this.timeout = setTimeout(_this.fetchRates.bind(_this), 5000);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fetchRates();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var rates = this.state.rates.map(function (rate) {
        return React.createElement(MainRate, { rate: rate });
      });

      return React.createElement(
        'div',
        null,
        rates
      );
    }
  }]);

  return MainRates;
})(React.Component);

var MainRate = (function (_React$Component2) {
  _inherits(MainRate, _React$Component2);

  function MainRate() {
    _classCallCheck(this, MainRate);

    _get(Object.getPrototypeOf(MainRate.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MainRate, [{
    key: 'render',
    value: function render() {
      var value = '' + Math.floor(this.props.rate.value * 1000000, 6),
          fluct = this.props.rate.fluct;
      return React.createElement(
        'div',
        { className: 'main-rate' },
        React.createElement(
          'span',
          { className: 'main-rate__currency' },
          this.props.rate.currency
        ),
        React.createElement(
          'span',
          { className: 'main-rate__before-point' },
          value.slice(0, 2)
        ),
        React.createElement(
          'span',
          { className: 'main-rate__after-point' },
          value.slice(2, 4)
        ),
        React.createElement(
          'span',
          { className: 'main-rate__additional' },
          value.slice(4)
        ),
        React.createElement(
          'span',
          { className: 'main-rate__fluct main-rate__fluct_' + (+fluct >= 0 ? 'appreciation' : 'fall') },
          Math.abs(fluct)
        ),
        React.createElement(MainRateChart, { chartUrl: this.props.rate.chartUrl })
      );
    }
  }]);

  return MainRate;
})(React.Component);

var MainRateChart = (function (_React$Component3) {
  _inherits(MainRateChart, _React$Component3);

  function MainRateChart() {
    _classCallCheck(this, MainRateChart);

    _get(Object.getPrototypeOf(MainRateChart.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(MainRateChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var $container = $(this.refs.container),
          width = $container.width(),
          height = 200;

      $.getJSON(this.props.chartUrl, function (data) {
        var points = data.dataset.data.map(function (elem, index) {
          return {
            x: index,
            y: elem[1]
          };
        });

        var x = d3.scale.linear().domain([0, width / 2]).range([0, width]);

        var y = d3.scale.linear().domain([height, 0]).range([height * 2, 0]);

        var d3container = d3.select(_this2.refs.container);
        var d3svg = d3container.append('svg:svg').attr('width', width).attr('height', height);

        var d3line = d3.svg.line().x(function (d) {
          return x(d.x);
        }).y(function (d) {
          return y(d.y);
        }).interpolate('linear');

        d3svg.append('svg:path').attr('d', d3line(points)).style('stroke-width', 1).style('stroke', 'steelblue').style('fill', 'none');
      });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement('div', { className: 'main-rate-chart', ref: 'container' });
    }
  }]);

  return MainRateChart;
})(React.Component);

$(function () {
  ReactDOM.render(React.createElement(MainRates, null), $('.main-rates')[0]);
});