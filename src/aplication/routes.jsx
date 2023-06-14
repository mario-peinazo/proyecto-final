import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PagListaNaves from '../pages/PagListaNaves';
import PagNave from '../pages/PagNave';
import PagBienvenida from '../pages/PagBienvenida';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route path="/" element={<PagBienvenida/>} />
            <Route path="/lista-naves" element={<PagListaNaves/>} />
            <Route path="/nave/:id" element={<PagNave/>} />

            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;