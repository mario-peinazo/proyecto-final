import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PagBienvenida, PagInicioSesion, PagListaNaves, PagNave } from "./pages/index";
import { GlobalStyle } from "./App.styles";
import Menu from "./components/Menu/Menu";
import RutaProtegida from "./components/RutaProtegida/RutaProtegida";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user)

  return (
    <>
      <GlobalStyle />
      <Router>
        <Menu />

        <Routes>
          <Route path="/" element={<PagBienvenida />} />
          <Route
            path="/lista-naves"
            element={
              <RutaProtegida user={user}>
                <PagListaNaves />
              </RutaProtegida>
            }
          />
          <Route path="/nave/:id" element={<PagNave />} />
          <Route path="/inicio-sesion" element={<PagInicioSesion />} />

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
