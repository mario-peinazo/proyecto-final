import SeleccionProducto from "../../components/SeleccionProducto/SeleccionProducto";
import Carrito from "../../components/Carrito/Carrito";
import InicioSesion from "../../components/InicioSesion/InicioSesion";
import EspacioPersonal from "../../components/EspacioPersonal/EspacioPersonal";
import FinalizarCompra from "../../components/FinalizarCompra/FinalizarCompra";
import Gracias from "../../components/Gracias/Gracias";


export const PagProducto = () => <SeleccionProducto />;
export const PagCarrito = () => <Carrito />;
export const PagFinalizarCompra = () => <FinalizarCompra/>;
export const PagGracias = () => <Gracias/>;

export const PagSesion = () => <InicioSesion/>;
export const PagEspacioPersonal = () => <EspacioPersonal />;
