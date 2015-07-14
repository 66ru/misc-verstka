var React = require('react');
var ReactDom = require('react-dom');

var _ = require('lodash');


var AutoImage = React.createClass({
  render: function() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
});

var Photorep = React.createClass({
  renderImages: function() {
    return _.map(this.props.images, function(image) {
      return <AutoImage src={image} alt="" />;
    });
  },

  doits: function(e) {
    console.log(e);
  },

  render: function() {
    return <div className="xm-photorep" onScroll={this.doits}>
      { this.renderImages() }
    </div>
  }
});

var images = [
  'http://img.ffffound.com/static-data/assets/6/5b614f78cfa7599071ff11df6dac04c22d25a97c_m.jpg',
  'http://img.ffffound.com/static-data/assets/6/8bd0c7e4f562b3c6deb029d988066cdc8c56ba3c_m.jpg',
  'http://img.ffffound.com/static-data/assets/6/39b821abc80ebc3fd8cc197c7cd271f86388c5da_m.jpg',
  'http://img.ffffound.com/static-data/assets/6/ac993f40069482c91d9f203ca19e7d731724e25c_m.jpg'
]

ReactDom.render(<Photorep images={ images } />, document.getElementById('body'));
