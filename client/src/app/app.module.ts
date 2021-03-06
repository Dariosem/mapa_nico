import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletDrawModule } from '@asymmetrik/ngx-leaflet-draw';

import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

import { LoteService } from './services/lote.service';
import { LoteoService } from './services/loteo.service';
import { CoordsOrderChangeService } from './services/coords-order-change.service';
import { VentaComponent } from './components/venta/venta.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { MapEditComponent } from './components/map-edit/map-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    VentaComponent,
    ReservaComponent,
    MapEditComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    LeafletDrawModule.forRoot(),
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ LoteService, LoteoService, CoordsOrderChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
