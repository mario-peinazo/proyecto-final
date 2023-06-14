import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { CajaLista, CajaNave, BtnMore } from "./ListaNaves.styles";

const ListaNaves = () => {
  const [datos, setDatos] = useState([]);
  const [pag, setPag] = useState(1);
  const [mostrarNavs, setMostrarNavs] = useState([]);

  const cargarDatos = () => {
    pag < 4 ? setPag(pag + 1) : null;
  };

  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/starships/?page=${pag}`)
      .then((res) => {
        setDatos(res.data.results);
      });
  }, [pag]);

  useEffect(() => {
    pag >= 2
      ? setMostrarNavs([...mostrarNavs, ...datos])
      : setMostrarNavs([...datos]);
  }, [datos]);


  return (
    <CajaLista>
        {mostrarNavs.map((d, index) => {
          const key = `item-${index}`;

          return (
            <>
            <CajaNave>
                <Link
                  to={`/nave/${d.url.slice(-3).split("/").join("")}`}
                  key={key}
                >
                  {d.name.toUpperCase()} - {d.model}
                </Link>
            </CajaNave>
            </>
          );
        })}
      <BtnMore onClick={cargarDatos}>VIEW MORE</BtnMore>
    </CajaLista>
  );
};

export default ListaNaves;
