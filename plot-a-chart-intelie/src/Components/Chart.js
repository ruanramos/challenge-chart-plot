import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

/**
 * Chart component, using react-chart's library components.
 */

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: false,
        displayLegend: true,
        legendPosition: 'right',
    }

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;