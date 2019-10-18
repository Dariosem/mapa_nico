import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circle, polygon, marker, LatLng, Layer, icon} from 'leaflet';


import { LoteoService } from '../../services/loteo.service';
import { Loteo } from '../../models/loteo';

import { LoteService } from '../../services/lote.service';
import { CoordsOrderChangeService } from '../../services/coords-order-change.service';

@Component({
  selector: 'app-map',
  templateUrl: './map2.component.html',
  providers: [LoteoService, LoteService, CoordsOrderChangeService]
})

export class Map2Component implements OnInit {
/* public options: object;

public zoom: any;
public center: any; */
public loteos: [any];
public lotes: [any];
public loteo: Loteo;


  constructor(
    private _loteoService: LoteoService,
    private _loteService: LoteService,
    private _coordService: CoordsOrderChangeService
  ) {
    
   }

  ngOnInit() {
    
    this.getLoteos();
  }

  optionsSpec: any = {
		layers: [{ url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: 'Open Street Map' }],
		zoom: 5,
		center: [ -38.96138597360268, -68.2312560081482 ]
	};

	// Leaflet bindings
	zoom = this.optionsSpec.zoom;
	center = latLng(this.optionsSpec.center);
	options = {
		layers: [ tileLayer(this.optionsSpec.layers[0].url, { attribution: this.optionsSpec.layers[0].attribution }) ],
		zoom: this.optionsSpec.zoom,
		center: latLng(this.optionsSpec.center)
	};

	// Form bindings
	formZoom = this.zoom;
	lat = this.center.lat;
	lng = this.center.lng;
  layers: Layer[] = [];
  marker: Layer = null;
  poligon: Layer = null;
  
  layersControl = {
    baseLayers: {
      'Mapa': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '...' }),
      'Satelite': tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { maxZoom: 19, attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community' }),
    },
    overlays: {
      // 'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
      // 'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
    }
  }

  /**Busca de la base de datos los loteos cargados y los guarda en el parametro loteos */
   getLoteos(){
    this._loteoService.getLoteos().subscribe(
      resp=>{
        if (!resp.loteos) {
          console.log('No se encontraron loteos en la base de datos');
        } else {
          this.loteos = resp.loteos;
          //console.log(this.loteos);
        }
      },
      error=>{
        console.log('Error en la carga de los loteos');
      }
    );
  }
  
  onChange(e){
    //console.log(e.target.value);

    //Obtener el loteo seleccionado
    this._loteoService.getLoteo(e.target.value).subscribe(
      resp=>{
        if (!resp.loteo) {
          console.log('No se encontró el loteo en la base de datos');
        } else {
          this.loteo = resp.loteo;
          console.log(this.loteo);

          let coords:[number, number] = this._coordService.getLatLng(this.loteo.geometry.coordinates);

          this.center = latLng(coords);
          this.formZoom = 17;
          this.zoom = this.formZoom;

          //cargar el marcador del loteo
          this.marker = marker(latLng(coords), {
            icon: icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'leaflet/marker-icon.png',
              shadowUrl: 'leaflet/marker-shadow.png'
            })
          }).bindPopup(`<h5>`+this.loteo.properties.name+`</h5>
                        <hr>
                        <a href="https://leafletjs.com" class="btn btn-primary" target="_blank">
                          Ir  Leafletj.com
                        </a>`
                      );
          this.layers.push(this.marker);
          //Obtener los lotes correspondientes a este loteo ============================
          let loteo_id:String = resp.loteo._id;
          this._loteService.getLotes(loteo_id).subscribe(
            resp => {
              if (!resp.lotes){
                console.log('No se encontraron lotes para este loteo en la base de datos');
              } else {
                this.lotes = resp.lotes;//Se guarda un array con todos los lotes de este loteo
                console.log(this.lotes);

                //Agregar polygons de lotes a markers
                this.lotes.forEach(lot=>{
                  //Cambiar el orden de las coordenadas para que sean lat-lng
                  let poly=this._coordService.getPolygon(lot.geometry.coordinates[0]);
                  let link = (lot.properties.status=="Disponible")?"Reservar":"Canc.Reserva";
                  let vendido = (lot.properties.status=="Vendido")? "none" : "inline";

                  this.poligon=polygon(poly,{
                                    color: lot.properties.stroke , 
                                    stroke:true, 
                                    weight:1, 
                                    fillColor:  lot.properties.fill 
                                  }).bindPopup(
                                  `<div class="card">
                                  <div class="card-header">
                                    <h5>`+lot.properties.name+`</h5>
                                  </div>
                                    <div class="card-body">
                                      <p>Estado: `+lot.properties.status+`</p>
                                      <hr><div style="display:`+vendido+`">
                                        <a class="btn btn-info" href="/reserva/`+lot._id+`">`+link+`</a>
                                      </div>
                                      <div style="display:`+vendido+`">
                                        <a class="btn btn-warning" href="/venta/`+lot._id+`">Vender</a>
                                      </div>
                                    </div>
                                  </div>`
                                  );
                  this.layers.push(this.poligon);
                  console.log(this.poligon);
                });
                //console.log(this.layers);
              }
            },
            error=>{
              console.log('Error en la carga del loteo');
            }
          );
        }
      },
      error=>{
        console.log('Error en la carga del loteo');
      }
    );

    
  }
  

}
  




