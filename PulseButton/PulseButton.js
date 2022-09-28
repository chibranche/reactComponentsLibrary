import React from 'react'
import PropTypes from 'prop-types';
import "./PulseButton.css"

function PulseButton(props) {
    return (
        <button
            className="pulse-button"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

PulseButton.defaultProps = {
    onClick: () => { }
}

PulseButton.propTypes = {
    onClick: PropTypes.func,
}


export default PulseButton