import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { GLOBAL} from './global';

import { Lote } from '../models/Lote';

@Injectable({
  providedIn: 'root'
})
export class LoteoService {
  public url: string;

  constructor(private _http:HttpClient){
      this.url = GLOBAL.url;
  }

  getLotes(): Observable<any>{
      let headers = new HttpHeaders({
          'content-type':'application/json'
      });

      return this._http.get(this.url + 'lotes/', {headers: headers} )
                          .map(res => res);
  }

  getLoteo(id:string): Observable<any>{

      let headers = new HttpHeaders({
          'content-type':'application/json'
      });

      return this._http.get(this.url + 'lote/' + id, {headers: headers} )
                          .map(res => res);
  }

  addLoteo(lote: Lote): Observable<any>{
     let params = JSON.stringify(lote);
     let headers = new HttpHeaders({
         'content-type':'application/json'
     });

     return this._http.post(this.url + 'lote', params, { headers: headers })
                      .map(res => res);
  }

  editLoteo(id:string, lote: Lote): Observable<any>{
      let params = JSON.stringify(lote);
      let headers = new HttpHeaders({
          'content-type': 'application/json'
      });

      return this._http.put(this.url + 'lote/' + id, params, {headers: headers})
                          .map(res => res);
  }

  deleteLoteo(id:string): Observable<any>{

      let headers = new HttpHeaders({
          'content-type':'application/json'
      });

      return this._http.delete(this.url + 'lote/' + id, {headers: headers} )
                          .map(res => res);
  }
}
