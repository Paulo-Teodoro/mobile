import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Index from './pages/Index';
import Especialidades from './pages/Especialidades';
import Medicos from './pages/Medicos';
import Clinicas from './pages/Clinicas';
import Usuario from './pages/Usuario';
import MateriaNotas from './pages/MateriaNotas';
import MateriaFaltas from './pages/MateriaFaltas';


export default Routes = createAppContainer(
    createSwitchNavigator({
        Index,
        Login,
        Especialidades,
        Medicos,
        Clinicas,
        Usuario,
        MateriaNotas,
        MateriaFaltas
    })
)