import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import noPicture from "../../assets/noPicture.png";
import { FichaSuperior, DatosPrincipal, ImgNave, FichaInferior, BordeL } from "./FichaNave.styles";

const FichaNave = () => {
  const { id } = useParams();
  const [datosNave, setDatosNave] = useState({});
  const [img, setImg] = useState("");

  useEffect(() => {
    axios.get(`https://swapi.py4e.com/api/starships/${id}/`).then((res) => {
      setDatosNave(res.data);
    });

    axios
      .get(`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`)
      .then((res) => {
        setImg(res.config.url);
      })
      .catch(setImg(noPicture));
  }, [id]);

  return (
    <>
      <FichaSuperior>
        <ImgNave img={img} />

        <DatosPrincipal>
          <h1>{datosNave.name}</h1>
          <p>MODEL: {datosNave.model}</p>
          <p>STARSHIP CLASS: {datosNave.starship_class}</p>
          <p>MANUFACTURER: {datosNave.manufacturer}</p>
          <p>COST: {datosNave.cost_in_credits}</p>
        </DatosPrincipal>
      </FichaSuperior>

      <FichaInferior>
        <div>
          <p>CREW: {datosNave.crew}</p>
          <p>PASSENGER CAPACITY: {datosNave.passengers}</p>
          <p>CARGO CAPACITY: {datosNave.cargo_capacity}</p>
        </div>
        <BordeL>
        <p>CONSUMABLES: {datosNave.consumables}</p>
          <p>LENGTH: {datosNave["length"]}</p>
          <p>MAXIMUM ATMOSPHERING SPEED: {datosNave.max_atmosphering_speed}</p>
        </BordeL>
        <BordeL>
        <p>HYPERDRIVE RATING: {datosNave.hyperdrive_rating}</p>
          <p>MGLT: {datosNave.MGLT}</p>
        </BordeL>
      </FichaInferior>
    </>
  );
};

export default FichaNave;
