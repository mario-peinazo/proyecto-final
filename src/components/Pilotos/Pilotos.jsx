import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ImgPi, CompPilo } from "./Pilotos.styles";

const Pilotos = ({ id }) => {
  const [datosNave, setDatosNave] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/starships/${id}/`).then((res) => {
      setDatosNave(res.data.pilots);
    });
  }, [id]);

  return (
    <CompPilo>
      {datosNave.length>=1?(<h4>PILOT@S:</h4>):( <><h4>PILOT@S:</h4> <p>Información no disponible para esta nave</p></>)}
      {datosNave.map((d) => {
        return (
          <>
          <a href={`https://starwars-visualguide.com/#/characters/${d
              .slice(-3)
              .split("/")
              .join("")}`}>
            <ImgPi
              src={`https://starwars-visualguide.com/assets/img/characters/${d
                .slice(-3)
                .split("/")
                .join("")}.jpg`}
              alt="foto piloto"
            />
            </a>
          </>
        );
      })}
    </CompPilo>
  );
};

Pilotos.propTypes = {
  id: PropTypes.string,
};

export default Pilotos;
