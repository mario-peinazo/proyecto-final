import axios from "axios";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ImgPe, CompPelis } from "./Peliculas.styles";


const Peliculas = ({ id }) => {
    const [datosNave, setDatosNave] = useState([]);
  
    useEffect(() => {
      axios.get(`https://swapi.py4e.com/api/starships/${id}/`).then((res) => {
        setDatosNave(res.data.films);
      });
    }, [id]);
  
    return (
      <CompPelis>
        {datosNave.length>=1?(<h4>PELÍCULAS:</h4>):( <><h4>PELÍCULAS:</h4> <p>Información no disponible para esta nave</p></>)}
        {datosNave.map((d) => {
          return (
            <>
            <a href={`https://starwars-visualguide.com/#/films/${d
                .slice(-3)
                .split("/")
                .join("")}`}>
              <ImgPe
                src={`https://starwars-visualguide.com/assets/img/films/${d
                  .slice(-3)
                  .split("/")
                  .join("")}.jpg`}
                alt="foto portada película"
              />
              </a>
            </>
          );
        })}
      </CompPelis>
    );
  };
  
  Peliculas.propTypes = {
    id: PropTypes.string,
  };
  

export default Peliculas