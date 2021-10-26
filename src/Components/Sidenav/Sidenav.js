import React, { useState } from "react";
import "../../css/Sidenav.css";
import { FaBars } from "react-icons/fa";
import { sidebarData } from "../../utils/Const/const";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Sidenav = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-center">
        <header>
          <FaBars
            className="side-nav-open"
            onClick={() => setShow(!show)}
          ></FaBars>
        </header>
        <div className={show ? "side-nav overlay" : "side-nav"}>
          <ul className={show ? "side-links show" : "side-links"}>
            {sidebarData.map((e, index) => {
              return (
                <li key={index}>
                  <Link to={`${e.path}`}>{e.title}</Link>
                </li>
              );
            })}
            <AiOutlineCloseCircle
              className="side-nav-close"
              onClick={() => setShow(!show)}
            ></AiOutlineCloseCircle>
          </ul>
        </div>
      </div>
    </nav>
  );
};
