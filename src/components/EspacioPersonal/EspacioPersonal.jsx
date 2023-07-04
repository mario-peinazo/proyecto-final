import {
  FondoEspacioPersonal,
  BtnCerrar,
  BtnForm,
  CajaEP,
  CajaBtn,
  Medidas,
  Menu,
  Datos,
  Envio,
} from "./EspacioPersonal.style";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../application/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const EspacioPersonal = () => {
  const [pecho, setPecho] = useState("");
  const [cintura, setCintura] = useState("");
  const [altura, setAltura] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [movil, setMovil] = useState("");
  const [direccion, setDireccion] = useState("");
  const [cp, setCp] = useState("");
  const [ciudad, setCiudad] = useState("");

  const navigate = useNavigate();
  const [verMedidas, setVerMedidas] = useState(true);
  const [verDatos, setVerDatos] = useState(false);
  const [verEnvio, setVerEnvio] = useState(false);

  async function getInfo(uid) {
    const docuRef = doc(db, `usuaries/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data();
    setPecho(infoFinal.pecho);
    setCintura(infoFinal.cintura);
    setAltura(infoFinal.altura);
    setNombre(infoFinal.nombre);
    setApellidos(infoFinal.apellidos);
    setMovil(infoFinal.movil);
    setDireccion(infoFinal.direccion);
    setCp(infoFinal.cp);
    setCiudad(infoFinal.ciudad);
    return infoFinal;
  }

  const updateItem = async (id, obj) => {
    const docRef = doc(db, "usuaries", id);
    await updateDoc(docRef, obj);
    setCambio(!cambio)
  };

  const [cambio, setCambio] = useState(false)

  useEffect(() => {  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
        getInfo(usuarioFirebase.uid);
      }
  });}, [cambio])

  return (
    <FondoEspacioPersonal>
      <h1>Espacio Personal</h1>

      <CajaEP>
        <Menu>
          <a
            onClick={() => {
              setVerDatos(false), setVerEnvio(false), setVerMedidas(true);
            }}
          >
            Medidas
          </a>
          <a
            onClick={() => {
              setVerDatos(true), setVerEnvio(false), setVerMedidas(false);
            }}
          >
            Datos
          </a>
          <a
            onClick={() => {
              setVerDatos(false), setVerEnvio(true), setVerMedidas(false);
            }}
          >
            Envío
          </a>
        </Menu>

        <>
          <form action="">
            <Medidas visible={verMedidas}>
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
            </Medidas>

            <Datos visible={verDatos}>
              <label name="nombre">
                {"Nombre:"}
                <input
                  type="text"
                  value={nombre}
                  placeholder="Mario"
                  onChange={(e) => setNombre(e.target.value)}
                />
              </label>
              <label name="apellidos">
                {"Apellidos:"}
                <input
                  type="text"
                  value={apellidos}
                  placeholder="Peinazo Notario"
                  onChange={(e) => setApellidos(e.target.value)}
                />
              </label>
              <label name="movil">
                {"Móvil:"}
                <input
                  type="number"
                  value={movil}
                  placeholder="696196648"
                  onChange={(e) => setMovil(e.target.value)}
                />
              </label>
            </Datos>

            <Envio visible={verEnvio}>
              <label name="direccion">
                {"Dirección:"}
                <input
                  type="text"
                  value={direccion}
                  placeholder="av. patata 68, 3-2"
                  onChange={(e) => setDireccion(e.target.value)}
                />
              </label>
              <label name="cp">
                {"Código Postal:"}
                <input
                  type="number"
                  value={cp}
                  placeholder="08734"
                  onChange={(e) => setCp(e.target.value)}
                />
              </label>
              <label name="ciudad">
                {"Ciudad:"}
                <input
                  type="text"
                  value={ciudad}
                  placeholder="Huelva"
                  onChange={(e) => setCiudad(e.target.value)}
                />
              </label>
            </Envio>

            <CajaBtn>
              <BtnForm
                onClick={(e) => {
                  e.preventDefault();
                  updateItem(auth.currentUser.uid, {
                    pecho: pecho,
                    cintura: cintura,
                    altura: altura,
                    nombre: nombre,
                    apellidos: apellidos,
                    movil: movil,
                    direccion: direccion,
                    cp: cp,
                    ciudad: ciudad,
                  });
                }}
              >
                Actualizar
              </BtnForm>
              <BtnCerrar
                onClick={(e) => {
                  e.preventDefault();
                  signOut(auth);
                  navigate("/");
                }}
              >
                Cerrar Sesion
              </BtnCerrar>
            </CajaBtn>
          </form>
        </>
      </CajaEP>
    </FondoEspacioPersonal>
  );
};

export default EspacioPersonal;
