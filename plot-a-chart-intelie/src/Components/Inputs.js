import React, { Component } from 'react';
import './Inputs.css';

/**
 * Component for the inputs of events.
 * On change or resize needs to adapt.
 */

class Inputs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Input the events here',
            rows: 5,
            minRows: 5,
            maxRows: 8,
        };
    }

    handleChange = (event) => {
        const textareaLineHeight = 24;
        const { minRows, maxRows } = this.state;

        const previousRows = event.target.rows;
        event.target.rows = minRows; // reset number of rows in textarea 

        const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

        if (currentRows === previousRows) {
            event.target.rows = currentRows;
        }

        if (currentRows >= maxRows) {
            event.target.rows = maxRows;
            event.target.scrollTop = event.target.scrollHeight;
        }

        this.setState({
            value: event.target.value,
            rows: currentRows < maxRows ? currentRows : maxRows,
        });
    };

    render() {
        return (
            <textarea
                name="text"
                rows={this.state.rows}
                value={this.state.value}
                id="inputBox"
                onChange={this.handleChange}
            />
            // <Container fluid={true} id="input-wrapper">
            //     <Row noGutters={true} >
            //         <Col>

            //         </Col>
            //     </Row>
            // </Container >

        );
    }
}

export default Inputs;