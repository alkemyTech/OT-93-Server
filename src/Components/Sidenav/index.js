import React from 'react';
import '../../css/Sidenav.css';
import map from 'lodash/map';
import { Navbar, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getNavigationBackOffice } from '../../utils/selectors';
import Logo from '../../utils/assets/LOGO.png';

const Sidenav = () => (
    <Navbar className="shadow" color="light" light>
      <Container>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span className="navbar-toggler-icon " />
        </button>

        <div
          className="modal fade Modal"
          id="exampleModal"
          tabIndex="40"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content">
              <div className="modal-header d-flex flex-column p-3">
                <h3>Bienvenido! </h3>
              </div>
              <ul className="navbar-nav p-0 content">
                {map(getNavigationBackOffice(), (e, index) => (
                    <li
                      className="nav-item "
                      data-bs-dismiss="modal"
                      key={index}
                    >
                      <Link
                        className="nav-link p-2 mt-0 d-flex justify-content-start"
                        to={`${e.url}`}
                      >
                        {e.label}
                      </Link>
                    </li>
                ))}
              </ul>
              <div className="modal-footer flex-column pt-5">
                <button
                  type="button"
                  className="btn btn-secondary closeBtn"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
                <img alt="nav-logo" className="logo" src={Logo} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
);

export default Sidenav;
