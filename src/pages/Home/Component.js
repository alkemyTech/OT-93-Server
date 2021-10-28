import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Row,
    Container
} from 'reactstrap';


const Component = ({
    welcomeText
}) => {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>hola homes </h1>
                </Col>
            </Row>
        </Container>
    );
};

Component.propTypes = {
    welcomeText: PropTypes.string.isRequired
};

export default Component;
