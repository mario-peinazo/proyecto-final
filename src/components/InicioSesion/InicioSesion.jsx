import {
  FondoInicio,
  CajaInicio,
  CajaRegistro,
  CajaSelec,
  BtnForm,
  CajaBtn,
} from "./inicioSesion.style";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import { auth, db } from "../../application/firebase";

const InicioSesion = () => {
  const [pecho, setPecho] = useState("");
  const [cintura, setCintura] = useState("");
  const [altura, setAltura] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const [verIni, setVerIni] = useState(false);
  const [verRegistro, setVerRegistro] = useState(false);
  const [verSig, setVerSig] = useState(false);

  const navigate = useNavigate();

  const carrito = useSelector((state) => state.carrito.carrito);

  async function registrarUser(datos) {
    const infoUsuarie = await createUserWithEmailAndPassword(
      auth,
      datos.email,
      datos.contraseña
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    const docuRef = doc(db, `usuaries/${infoUsuarie.user.uid}`);
    setDoc(docuRef, {
      id:infoUsuarie.user.uid,
      email: datos.email,
      pecho: datos.pecho,
      cintura: datos.cintura,
      altura: datos.altura,
      nombre: "",
      apellidos: "",
      movil: "",
      direccion: "",
      cp: "",
      ciudad: "",
    });
  }

  const submitHandlerLog = (e) => {
    e.preventDefault();

    signOut(auth);

    registrarUser({
      pecho: pecho,
      cintura: cintura,
      altura: altura,
      email: email,
      contraseña: contraseña,
    });

    carrito.length > 1 ? navigate("/") : navigate("/finalizar-compra")
  };

  const submitHandlerSign = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, contraseña);

    carrito.length < 1 ? navigate("/") : navigate("/finalizar-compra")
  };

  return (
    <FondoInicio>
      <CajaSelec visible={verRegistro || verIni ? false : true}>
        <div>
          <h2>
            📏 <u>Si es tu primera vez:</u>
          </h2>
          <BtnForm onClick={() => setVerRegistro(true)}>Añadir medidas</BtnForm>
          <h2>
            🗝 <u>Si ya tienes una cuenta creada:</u>
          </h2>
          <BtnForm onClick={() => setVerIni(true)}>Iniciar Sesión</BtnForm>
        </div>
      </CajaSelec>

      <CajaRegistro visible={verRegistro}>
        <h1>Registrarse</h1>

        <form>
          {verSig ? (
            <div>
              <label name="email">
                {"Email:"}
                <input
                  type="email"
                  value={email}
                  placeholder="hola.hibride@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label name="password">
                {"Contraseña:"}
                <input
                  type="password"
                  value={contraseña}
                  placeholder="12345holi"
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </label>
            </div>
          ) : (
            <div>
              <label name="pecho">
                {"Medida pecho:"}
                <input
                  type="number"
                  value={pecho}
                  placeholder="100"
                  onChange={(e) => setPecho(e.target.value)}
                />
              </label>
              <label name="cintura">
                {"Medida cintura:"}
                <input
                  type="number"
                  value={cintura}
                  placeholder="100"
                  onChange={(e) => setCintura(e.target.value)}
                />
              </label>
              <label name="altura">
                {"Medida altura:"}
                <input
                  type="number"
                  value={altura}
                  placeholder="100"
                  onChange={(e) => setAltura(e.target.value)}
                />
              </label>
            </div>
          )}

          {verSig ? (
            <CajaBtn>
              <BtnForm
                onClick={(e) => {
                  e.preventDefault();
                  setVerSig(false);
                }}
              >
                Atrás
              </BtnForm>{" "}
              <BtnForm onClick={submitHandlerLog}>Registrarse</BtnForm>
            </CajaBtn>
          ) : (
            <BtnForm
              onClick={(e) => {
                e.preventDefault();
                setVerSig(true);
              }}
            >
              Siguiente
            </BtnForm>
          )}
        </form>

        <a
          onClick={() => {
            setVerIni(true);
            setVerRegistro(false);
          }}
        >
          ¿Ya tienes una cuenta?
        </a>
      </CajaRegistro>

      <CajaInicio visible={verIni}>
        <h1>Inicio sesión</h1>

        <form onSubmit={submitHandlerSign}>
          <label name="email">
            {"Email:"}
            <input
              type="email"
              value={email}
              placeholder="hola.hibride@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label name="password">
            {"Contraseña:"}
            <input
              type="password"
              value={contraseña}
              placeholder="12345holi"
              onChange={(e) => setContraseña(e.target.value)}
            />
          </label>

          <BtnForm type="submit">Iniciar sesión</BtnForm>
        </form>

        <a
          onClick={() => {
            setVerIni(false);
            setVerRegistro(true);
          }}
        >
          ¿Aún no tienes una cuenta?
        </a>
      </CajaInicio>
    </FondoInicio>
  );
};

export default InicioSesion;
