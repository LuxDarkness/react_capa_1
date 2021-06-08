import React from 'react';
import PropTypes from 'prop-types';

const PropTypeComponent = (props) => {

    return (
        <h2>{props.name} de edad {props.age}</h2>
    )

}

PropTypeComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

PropTypeComponent.defaultProps = {
    name: 'Mister'
}

export default PropTypeComponent;