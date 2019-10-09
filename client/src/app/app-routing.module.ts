import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VentaComponent } from './components/venta/venta.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { MapComponent } from './components/map/map.component';


const routes: Routes = [
 
  {path:'', component: MapComponent},
  {path:'venta/:id', component: VentaComponent},
  {path: 'reserva/:id', component: ReservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
