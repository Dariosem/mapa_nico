import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VentaComponent } from './venta/venta.component';
import { ReservaComponent } from './reserva/reserva.component';
import { MapComponent } from './map/map.component';


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
