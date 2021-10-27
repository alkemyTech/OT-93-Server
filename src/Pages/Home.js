import Alerts from "../Components/Alert/Alerts";
import React from "react";
import { Sidenav } from "../Components/Sidenav/Sidenav";
import { getMember } from "../utils/Const/Functions";

const Home = () => {
  const { name, img } = getMember(5);

  return (
    <div className="container-fluid">
      <div className="d-flex flex-column">
        <Sidenav name={name} img={img}></Sidenav>
        <button
          className="mx-auto mt-5"
          onClick={() => {
            document.location.reload();
          }}
        >
          Show Alert
        </button>
        <Alerts show={true} icon="success" tittle="cargando..."></Alerts>
      </div>
    </div>
  );
};

export default Home;
