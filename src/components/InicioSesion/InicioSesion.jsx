import useLocalStorage from "../../useLocalStorage";
import { useState, useEffect } from "react";
import {
  Caja,
  CajaCerrar,
  PopUp,
  FondoPopUp,
  BtnForm,
  InputForm,
  Titulo,
  LogoImg,
  BtnCerrar,
} from "./InicioSesion.styles";
import LogoSW from "../../assets/LogoSW.png";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlide";
import { useNavigate } from "react-router-dom";

const InicioSesion = () => {
  const [usuarias, setUsuarias] = useLocalStorage("usuarias", [
    {
      email: "mario.peinazo@gmail.com",
      contraseña: "12345mario",
    },
  ]);

  const [user, setUser] = useLocalStorage("usuaria", [
    {},
  ]);

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [indice, setIndice] = useState(0);

  const [verRegistro, setVerRegistro] = useState(false);
  const [verLog, setVerLog] = useState(false);
  const [verEmail, setVerEmail] = useState(true);
  const [paso2, setPaso2] = useState(false);
  const [verCerrar, setVerCerrar] = useLocalStorage("cerrar sesion", false);
  const [visiblePopUp, setVisiblePopUp] = useState(true);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addUser(user));
  }, [user, dispatch]);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    setIndice(usuarias.findIndex((d) => d.email === email));
    setPaso2(true);
  };

  const cerrarSesion = () => {
    setUser({ email: "", contraseña: "" });
    setVerEmail(true);
    setVerCerrar(false);
    setVisiblePopUp(false);
    navigate("/");
  };

  const handleSubmitRegistro = (e) => {
    e.preventDefault();

    createNewData(email, contraseña);
    setUser({
      email: email,
      contraseña: contraseña,
    });
    setVerRegistro(false);

    alert(`Nueva usuaria, email: ${email} - contraseña: ${contraseña}`);

    setVerCerrar(true);
    setVisiblePopUp(false);
    navigate("/");
  };

  const handleSubmitInicio = (e) => {
    if (usuarias[indice].contraseña == contraseña) {
      e.preventDefault();

      setUser({
        email: email,
        contraseña: contraseña,
      });

      setVerLog(false);
      setVisiblePopUp(false);
      setVerCerrar(true);

      alert("Sesión iniciada");

      navigate("/");
    } else {
      e.preventDefault();
      alert("La contraseña no coincide con la asociada a este email");
    }
  };

  useEffect(() => {
    if (paso2) {
      setVerEmail(false);
      if (indice == -1) {
        setVerRegistro(true);
        setVerLog(false);
        console.log("Email no registrado, paso al proceso de registro");
      } else {
        setVerLog(true);
        setVerRegistro(false);
        console.log("Email registrado, paso al proceso de inicio de sesión");
      }
    }
  }, [paso2, indice]);


  function createNewData(email, contraseña) {
    setUsuarias([
      ...usuarias,
      {
        email: email,
        contraseña: contraseña,
      },
    ]);
  }

  return (
    <FondoPopUp visible={visiblePopUp}>
      <PopUp>
        <BtnCerrar
          onClick={() => {
            setVisiblePopUp(false);
            navigate("/");
          }}
        >
          X
        </BtnCerrar>

        <LogoImg src={LogoSW} alt="Logo StarWars" />

        {verCerrar != true ? (
          <form>
            <Caja visible={verEmail}>
              <Titulo>Introduce tu email</Titulo>
              <InputForm
                type="text"
                className="inputForm"
                value={email}
                placeholder="mario.peinazo@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <BtnForm type="submit" onClick={handleSubmitEmail}>
                Introducir email
              </BtnForm>
            </Caja>

            <Caja visible={verLog}>
              <Titulo>Introduce tu contraseña</Titulo>
              <InputForm
                type="text"
                className="inputForm"
                value={contraseña}
                placeholder="12345mario"
                onChange={(e) => setContraseña(e.target.value)}
              />
              <BtnForm type="submit" onClick={handleSubmitInicio}>
                Iniciar Sesión
              </BtnForm>
            </Caja>

            <Caja visible={verRegistro}>
              <Titulo>Añade una contraseña</Titulo>
              <InputForm
                type="text"
                className="inputForm"
                value={contraseña}
                placeholder="12345mario"
                onChange={(e) => setContraseña(e.target.value)}
              />
              <BtnForm type="submit" onClick={handleSubmitRegistro}>
                Registrarse
              </BtnForm>
            </Caja>
          </form>
        ) : (
          <CajaCerrar>
            <Titulo>Cerrar sesion</Titulo>
            <BtnForm onClick={cerrarSesion}>Cerrar Sesion</BtnForm>
          </CajaCerrar>
        )}
      </PopUp>
    </FondoPopUp>
  );
};

InicioSesion.propTypes = {
  onSomeEvent: PropTypes.func,
  visiblePopUp: PropTypes.bool,
};

export default InicioSesion;
