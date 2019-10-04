import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

import { LoteService } from './services/lote.service';
import { LoteoService } from './services/loteo.service';
import { CoordsOrderChangeService } from './services/coords-order-change.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
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
