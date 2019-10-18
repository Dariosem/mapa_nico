import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { Map2Component } from './components/map2/map2.component';

import { LoteService } from './services/lote.service';
import { LoteoService } from './services/loteo.service';
import { CoordsOrderChangeService } from './services/coords-order-change.service';
import { VentaComponent } from './components/venta/venta.component';
import { ReservaComponent } from './components/reserva/reserva.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    Map2Component,
    VentaComponent,
    ReservaComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [ LoteService, LoteoService, CoordsOrderChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
