import React from 'react';
import '../../css/Sidenav.css';
import map from 'lodash/map';
import {
  Navbar, Row, Col, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { getNavigationBackOffice } from '../../utils/selectors';
import Logo from '../../utils/assets/LOGO.png';

const Sidenav = () => (
    <Navbar className=" d-flex d-md-none bg-transparent">
        <Row className="mx-auto">
          <Col md={12}>
        <Button
          className="navbar-toggler text-center d-flex mx-auto justify-content-center"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span className=" navbar-toggler-icon" />
        </Button>

        <div
          className="modal fade Modal"
          id="exampleModal"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header d-flex flex-column p-3">
                <h3>Somos Mas</h3>
              </div>
              <ul className="navbar-nav p-0 content">
                {map(getNavigationBackOffice(), (e, index) => (
                    <li
                      className="nav-item "
                      data-bs-dismiss="modal"
                      key={index}
                    >
                      <Link
                        className="nav-link p-2 mt-0 d-flex justify-content-start link-sidebar"
                        to={`${e.url}`}
                      >
                        {e.label}
                      </Link>
                    </li>
                ))}
              </ul>
              <div className="modal-footer flex-column pt-5">
                <Button
                  type="button"
                  className="btn btn-secondary closeBtn"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </Button>
                <img alt="nav-logo" className="logo" src={Logo} />
              </div>
            </div>
          </div>
        </div>
          </Col>
        </Row>
    </Navbar>
);

export default Sidenav;
