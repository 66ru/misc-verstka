class MainRates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rates: []
    };
  }

  fetchRates() {
    $.getJSON('rates.json', (data) => {
      this.setState({rates: data});
      this.timeout = setTimeout(this.fetchRates.bind(this), 5000);
    });
  }

  componentDidMount() {
    this.fetchRates();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    let rates = this.state.rates.map(function(rate) {
      return <MainRate rate={rate} />;
    });

    return <div>{rates}</div>;
  }
}




class MainRate extends React.Component {
  render() {
    let value = '' + Math.floor(this.props.rate.value * 1000000, 6),
      fluct = this.props.rate.fluct;
    return (
      <div className="main-rate">
        <span className="main-rate__currency">{this.props.rate.currency}</span>
        <span className="main-rate__before-point">{value.slice(0, 2)}</span>
        <span className="main-rate__after-point">{value.slice(2, 4)}</span>
        <span className="main-rate__additional">{value.slice(4)}</span>
        <span className={'main-rate__fluct main-rate__fluct_' + (+fluct >= 0 ? 'appreciation' : 'fall')}>{Math.abs(fluct)}</span>
        <MainRateChart chartUrl={this.props.rate.chartUrl} />
      </div>
    );
  }
}




class MainRateChart extends React.Component {
  componentDidMount() {
    let $container = $(this.refs.container),
      width = $container.width(),
      height = 200;

    $.getJSON(this.props.chartUrl, (data) => {
      let points = data.dataset.data.map(function(elem, index) {
        return {
          x: index,
          y: elem[1]
        }
      });

      let x = d3.scale.linear()
        .domain([0, width/2])
        .range([0, width]);

      let y = d3.scale.linear()
        .domain([height, 0])
        .range([height*2, 0]);

      let d3container = d3.select(this.refs.container);
      let d3svg = d3container.append('svg:svg')
        .attr('width', width)
        .attr('height', height);

      let d3line = d3.svg.line()
        .x(function(d) {return x(d.x);})
        .y(function(d) {return y(d.y);})
        .interpolate('linear');

      d3svg.append('svg:path')
        .attr('d', d3line(points))
        .style('stroke-width', 1)
        .style('stroke', 'steelblue')
        .style('fill', 'none');
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div className="main-rate-chart" ref="container"></div>
  }
}




$(function() {
  ReactDOM.render(
    <MainRates />,
    $('.main-rates')[0]
  );
});
