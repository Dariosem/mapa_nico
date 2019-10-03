import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circle, polygon, marker, LatLng} from 'leaflet';

import { LoteoService } from '../services/loteo.service';
import { Loteo } from '../models/loteo';

import { LoteService } from '../services/lote.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [LoteoService, LoteService]
})
export class MapComponent implements OnInit {
public options: object;
public layersControl: object;
public loteos: [any];
public loteo: Loteo;
public lotes: [any];
public zoom: any;
public center: any;

  constructor(
    private _loteoService: LoteoService,
    private _loteService: LoteService
  ) {
    //Carga los datos del mapa inicial
    this.zoom = 13;
    this.center = latLng([ -38.96138597360268, -68.2312560081482 ]);

    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        })
      ],
      zoom: this.zoom,
      center: this.center
    };

    //Carga las opciones para cambiar de tiles (los tipos de mapa)
    this.layersControl = {
      baseLayers: {
        'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      },
      /* overlays: {
        'Big Circle': circle([ 46.95, -122 ], { radius: 5000 }),
        'Big Square': polygon([[ 46.8, -121.55 ], [ 46.9, -121.55 ], [ 46.9, -121.7 ], [ 46.8, -121.7 ]])
      } */
    };
   }

  ngOnInit() {
    
    this.getLoteos();
  }

  /**Busca de la base de datos los loteos cargados y los guarda en el parametro loteos */
  getLoteos(){
    this._loteoService.getLoteos().subscribe(
      resp=>{
        if (!resp.loteos) {
          console.log('No se encontraron loteos en la base de datos');
        } else {
          this.loteos = resp.loteos;

          // console.log(this.loteos);
        }
      },
      error=>{
        console.log('Error en la carga de los loteos');
      }
    );
  }
  public lat: number;
  public lng: number;
  public coordCenter:LatLng;

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
          this.zoom = 10;
          this.lat = this.loteo.geometry.coordinates[0];
          this.lng = this.loteo.geometry.coordinates[1];
          //this.coordCenter=new LatLng(this.lat, this.lng);
          this.center = latLng({lat:this.lat, lng:this.lng});
          this.options = {
            layers: [
              tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
              })
            ],
            zoom: this.zoom,
            center: this.center
          };
          //Obtener los lotes correspondientes a este loteo ============================
          let loteo_id:String = resp.loteo._id;
          this._loteService.getLotes(loteo_id).subscribe(
            resp => {
              if (!resp.lotes){
                console.log('No se encontraron lotes para este loteo en la base de datos');
              } else {
                this.lotes = resp.lotes;//Se guarda un array con todos los lotes de este loteo
                console.log(this.lotes);


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


	doApply() {
		this.center = latLng(this.lat, this.lng);
		this.zoom = 10;
	}
}
  




