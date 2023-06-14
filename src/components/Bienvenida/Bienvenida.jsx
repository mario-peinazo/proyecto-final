import { BannerYoda, CajaHola, BtnNaves, H1Hola } from "./Bienvenida.styles";
import { useNavigate } from "react-router-dom";

const Bienvenida = () => {
    const navigate = useNavigate();

    const pulsado = () => {
        navigate('/lista-naves');
    }

    return (
        <>
        <BannerYoda>
            <CajaHola>
                <H1Hola>¡Bienvenid@ a la web de Star Wars!</H1Hola>
                <p>¿Quieres conocer todas las naves de la saga?
                </p>
            <BtnNaves onClick={pulsado}>Ver todas las naves</BtnNaves>
            </CajaHola>
        </BannerYoda>
        </>
    )

}

export default Bienvenida