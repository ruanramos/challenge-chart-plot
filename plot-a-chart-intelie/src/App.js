import React, { Component } from 'react';
import Inputs from './Components/Inputs';
import Bar from './Components/myBar';
import Chart from './Components/Chart';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData() {
        // Just some testing for now
        this.setState({
            chartData: {
                labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets: [
                    {
                        data: [
                            0.1,
                            0.3,
                            0.4,
                            0.3,
                            0.1,
                            0.5
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        });
    }


    render() {
        return (
            <div className="App">
                <Bar position="top" yourName={this.props.yourName} />
                {/*
                * SplitterLayout library creates the resizable division between chart and input
                */}
                <SplitterLayout vertical={true} secondaryInitialSize={600}>
                    <Inputs />
                    <div>
                        <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="right" />
                    </div>
                </SplitterLayout>
                <Bar position="bottom" />

            </div >
        );
    }
}

export default App;