import React, { Component } from 'react';
import './myBar.css';
import { Button } from 'react-bootstrap';

/*
 * The gray bar component, used on top and bottom of the page.
 * Bottom of the page has a button, that is not a component since it's
 * the only one on the page, but could be made a component for escalability reasons.
*/

class Bar extends Component {
    render() {
        return (
            <div className={giveBarClass(this.props.position)}>
                <span>{createBarElements(this.props.position, this.props.yourName)}</span>
            </div>
        );
    }
}

function giveBarClass(position) {
    if (position == "top") {
        return "topBar";
    }
    if (position == "bottom") {
        return "bottomBar";
    }
}

function createBarElements(position, name) {
    var topString = name + "'s Challenge";
    if (position == "top") {
        return topString;
    }
    if (position == "bottom") {
        return <Button id="btn" variant="primary" type="submit" value="Submit" onClick={generateChart}>GENERATE CHART</Button>;
    }
}

function generateChart() {
    var x = document.getElementById("input-box");
    console.log(x);
}

export default Bar;