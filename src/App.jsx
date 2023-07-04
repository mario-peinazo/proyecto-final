import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  PagProducto,
  PagCarrito,
  PagEspacioPersonal,
  PagFinalizarCompra,
  PagSesion,
  PagGracias,
} from "./assets/paginas/indexPags";
import Menu from "./components/Menu/Menu";
import RutaProtegida from "./components/RutaProtegida/RutaProtegida";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import useLocalStorage from "./useLocalStorage";
import { auth, db } from "./application/firebase";

const App = () => {
  const [user, setUser] = useLocalStorage("user", null);

  async function getInfo(uid) {
    const docuRef = doc(db, `usuaries/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data();
    return infoFinal;
  }

  const setUserWithData = (usuarioFirebase) => {
    getInfo(usuarioFirebase.uid).then((infoFinal) => {
      const userData = {
        id: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        pecho: infoFinal.pecho,
        cintura: infoFinal.cintura,
        altura: infoFinal.altura,
      };
      setUser(userData);
    });
  };

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      if (!user) {
        setUserWithData(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });

  return (
    <>
      <Router>
        <Menu />

        <Routes>
          <Route path="/" element={<PagProducto />} />
          <Route path="/carrito" element={<PagCarrito />} />
          <Route path="/finalizar-compra" element={<PagFinalizarCompra />} />
          <Route path="/pedido-realizado" element={<PagGracias />} />

          <Route
            path="/inicio-sesion"
            element={
              <RutaProtegida user={{ user: user, ruta: 2 }}>
                <PagSesion />
              </RutaProtegida>
            }
          />

          <Route
            path="/espacio-personal"
            element={
              <RutaProtegida user={{ user: user, ruta: 1 }}>
                <PagEspacioPersonal />
              </RutaProtegida>
            }
          />

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
