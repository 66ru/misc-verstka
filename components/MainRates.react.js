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
  processData(data) {
    let points = [],
      format = d3.time.format('%Y-%m-%d %H:%M:%S'),
      domainY = [0, 0];

    data.dataset.data.forEach(function(elem, index) {
      points.push({
        x: format.parse(elem[0]),
        y: elem[1]
      });
    });

    domainY[0] = d3.min(points, function(elem) {
      return elem.y;
    });

    domainY[1] = d3.max(points, function(elem) {
      return elem.y;
    });

    return {
      points: points,
      domainY: domainY
    };
  }

  componentDidMount() {
    let $container = $(this.refs.container),
      margin = 20,
      height = 200,
      width = $container.width();

    $.getJSON(this.props.chartUrl, (data) => {
      let processedData = this.processData(data);
      let scaleX = d3.time.scale()
        .domain([processedData.points[0].x, processedData.points[processedData.points.length - 1].x])
        .range([width, 40]);

      let scaleY = d3.scale.linear()
        .domain(processedData.domainY)
        .range([180, 0]);

      let d3container = d3.select(this.refs.container);
      let d3svg = d3container.append('svg:svg')
        .attr('width', '100%')
        .attr('height', height);

      let d3line = d3.svg.line()
        .x(function(d) {return scaleX(d.x);})
        .y(function(d) {return scaleY(d.y);})
        .interpolate('linear');

      d3svg.append('svg:path')
        .attr('d', d3line(processedData.points))
        .style('stroke-width', 1)
        .style('stroke', 'steelblue')
        .style('fill', 'none');

      d3svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + (height - margin) + ')')
        .call(d3.svg.axis()
          .scale(scaleX)
          .orient('bottom')
        );

      d3svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(40, 0)')
        .call(d3.svg.axis()
          .scale(scaleY)
          .orient('left')
        );
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div className="main-rate-chart" ref="container"></div>;
  }
}


// function ERData(rawData) {
//   let dataset = rawData.dataset.data;

//   function parseDot(dot) {
//     return {
//       x: this.timeFormat.parse(dot[0]),
//       y: dot[1]
//     };
//   }

//   this.timeFormat = d3.time.format('%Y-%m-%d');

//   this.data = function() {
//     return dataset.map(parseDot.bind(this));
//   };
// }


// function ERPlot(data, node) {
//   let ratio = .4,
//     margin = {top: 0, right: 0, bottom: 20, left: 20},
//     width, height, inputDomainX,

//     $container = $(node);

//   let scaleX = d3.time.scale()
//     .domain([processedData.points[0].x, processedData.points[processedData.points.length - 1].x])
//     .range([width, 20]);

//   let scaleY = d3.scale.linear()
//     .domain(processedData.domainY)
//     .range([180, 0]);

//   let d3svg = d3.select(this.refs.container)
//     .append('svg:svg')
//     .attr('width', '100%')
//     .attr('height', height);

//   this.getDimensions = function() {
//     width = $container.width() - margin.right - margin.left,
//     height = width * ratio,
//     inputDomainX = [0, 0];
//   };
// }
