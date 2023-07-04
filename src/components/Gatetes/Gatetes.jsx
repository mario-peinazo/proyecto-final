import { useState, useEffect } from "react";
import axios from "axios";
import { CajaGatos, BtnMas, CajaBtn, Fondo } from "./Gatetes.styles";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from 'react-redux';
import { gatitosSorpresa } from "../../redux/carritoSlide";

const Gatetes = () => {
  const [foto, setFoto] = useState("");
  const [pulsado, setPulsado] = useState(false);

  const dispatch = useDispatch();
  const verGatitos = useSelector((state) => state.carrito.gatitos);


  useEffect(() => {
    axios.get(`https://api.thecatapi.com/v1/images/search`).then((res) => {
      setFoto(res.data[0].url);
    });
  }, [pulsado]);


  return (
    <Fondo>
    <CajaGatos background={foto} visible={verGatitos}>
      <CajaBtn>
        {" "}
        <BtnMas onClick={() => setPulsado(!pulsado)}>Más gatetes!</BtnMas>
        <BtnMas onClick={() => dispatch(gatitosSorpresa(!verGatitos))}>X</BtnMas>
      </CajaBtn>
    </CajaGatos>
    </Fondo>
  );
};

Gatetes.propTypes = {
  visibleCat: PropTypes.bool,
};

export default Gatetes;
