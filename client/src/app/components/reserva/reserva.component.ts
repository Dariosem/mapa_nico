import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoteService} from '../../services/lote.service';

import { Lote } from '../../models/lote';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
  providers: [LoteService]
})
export class ReservaComponent implements OnInit {
  public lote: Lote;
  public lote_id: string;

  constructor(
    private _loteService: LoteService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.lote_id = this._activatedRoute.snapshot.params.id;
    this._loteService.getLote(this.lote_id).subscribe(
      resp=>{
        if (!resp.lote) {
          this._router.navigate(['mapa']);
        } else {
          this.lote = resp.lote;
          
          if(this.lote.properties.status=="Disponible"){
            this.lote.properties.status = "Reservado";//Cambiar el estado
            this.lote.properties.fill = '#FBFB0D';//Cambiar el color
          }else if(this.lote.properties.status=="Reservado"){
            this.lote.properties.status = "Disponible";//Cambiar el estado
            this.lote.properties.fill = '#1bdc05';//Cambiar el color
          }
          
          this._loteService.editLote(this.lote_id, this.lote ).subscribe(
            resp=>{
              if (!resp.lote) {
                console.log('Error: no se encontro el lote en la base de datos');
              } else {
                console.log('Lote reservado correctamente');
              }
            },error=>{
              console.log('Error al modificar las propiedades del lote en la base de datos');
            }
          );

        }
      },
      error=>{
        console.log('Error al buscar el lote en la base de datos');
      }
    );
  }



}

