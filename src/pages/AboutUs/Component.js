import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Row,
    Container
} from 'reactstrap';


const Component = ({
    title
}) => {

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Nosotros </h1>
                </Col>
            </Row>
        </Container>
    );
};

Component.propTypes = {
    title: PropTypes.string.isRequired
};

export default Component;