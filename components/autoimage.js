var React = require('react');
var ReactDom = require('react-dom');

var AutoImage = React.createClass({
  render: function() {
    return <img src={this.props.src} alt={this.props.alt} />;
  }
});
