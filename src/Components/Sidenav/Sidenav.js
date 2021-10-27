import React from "react";
import { getNavigationBackOffice } from "../../utils/Const/selectors";
import "../../css/sidenav.css";
import { Link } from "react-router-dom";
import Logo from "../../utils/assets/LOGO-SOMOSMAS.png";
import _ from "lodash";

export const Sidenav = ({ name, img }) => {
  return (
    <nav className="navbar navbar-light bg-light shadow ">
      <div className="container  ">
        <h1 className="navbar-brand"></h1>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
      </div>
      <div
        className="modal fade Modal"
        id="exampleModal"
        tabindex="40"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header d-flex flex-column p-3">
              <img
                alt="user-icon"
                className="img-thumbnail imgUser"
                src={img}
              ></img>
              <h3>Bienvenido! </h3>
              <h4>{name}</h4>
            </div>
            <ul className="navbar-nav p-0 content">
              {_.map(getNavigationBackOffice(), (e, index) => {
                return (
                  <li
                    className="nav-item p-0 m-0 "
                    data-bs-dismiss="modal"
                    key={index}
                  >
                    <Link className="nav-link p-2 mt-0 " to={`${e.url}`}>
                      {e.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="modal-footer flex-column pt-5">
              <button
                type="button"
                className="btn btn-secondary closeBtn"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <img src={Logo} alt="nav-logo" className="logo"></img>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
