import {
  FondoFin,
  BtnForm,
  Columnas,
  EspacioForm,
  Menu,
  CajaMenu,
} from "./FinalizarCompra.style";
import {useState, useEffect} from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../application/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { estadoCarrito } from "../../redux/carritoSlide";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const FinalizarCompra = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [movil, setMovil] = useState("");
  const [direccion, setDireccion] = useState("");
  const [cp, setCp] = useState("");
  const [ciudad, setCiudad] = useState("");

  const carritoState = useSelector((state) => state.carrito.carrito);
  const precioState = useSelector((state) => state.carrito.precioTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function getInfo(uid) {
    const docuRef = doc(db, `usuaries/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data();
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
    <FondoFin>
      <h1>Finalizar pedido</h1>

      <CajaMenu>
        <div>
          <b>Productos:</b>
          {carritoState.map((valor) => (
            <>
              <b> {valor.color}:</b> {valor.cantidad} -
            </>
          ))}
          <b>Precio total:</b> {precioState}€
        </div>
        <Menu>
          <a
            onClick={() => {
              dispatch(estadoCarrito(true));
            }}
          >
            Modificar productos
          </a>
          <a
            onClick={() => {
              navigate("/");
            }}
          >
            Seguir comprando
          </a>
        </Menu>
      </CajaMenu>

      <form action="">
        <EspacioForm>
          <Columnas>
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
          </Columnas>

          <Columnas>
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
          </Columnas>
        </EspacioForm>

        <BtnForm
          onClick={(e) => {
            e.preventDefault();
            updateItem(auth.currentUser.uid, {
              nombre: nombre,
              apellidos: apellidos,
              movil: movil,
              direccion: direccion,
              cp: cp,
              ciudad: ciudad,
            });
            navigate("/pedido-realizado");
          }}
        >
          Finalizar Pedido
        </BtnForm>
      </form>
    </FondoFin>
  );
};

export default FinalizarCompra;
