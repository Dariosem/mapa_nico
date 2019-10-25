import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VentaComponent } from './components/venta/venta.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { MapComponent } from './components/map/map.component';
import { MapEditComponent} from './components/map-edit/map-edit.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';


const routes: Routes = [
  {path: '', component: MapComponent},
  {path:'editar-user', component: UserEditComponent},
  {path:'mapa', component: MapComponent},
  {path:'venta/:id', component: VentaComponent},
  {path: 'reserva/:id', component: ReservaComponent},
  {path: 'editar-mapa', component: MapEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
