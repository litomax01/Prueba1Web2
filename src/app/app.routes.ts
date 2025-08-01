import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { RegistroTareaComponent } from './components/registro-tarea/registro-tarea.component';
import { DetalleTareaComponent } from './components/detalle-tarea/detalle-tarea.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent },
    {path:'tareas', component:ListaTareasComponent },
    {path:'tareas/:id', component:DetalleTareaComponent},
    {path:'agregar-tarea', component:RegistroTareaComponent},
    {path:'editar-tarea/:id', component:RegistroTareaComponent},

    {path:'', redirectTo:'/home', pathMatch:'full' },
   
];
