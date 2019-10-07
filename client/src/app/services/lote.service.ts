import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { GLOBAL} from './global';

import { Lote } from '../models/Lote';

@Injectable({
  providedIn: 'root'
})
export class LoteService {
  public url: string;

  constructor(private _http:HttpClient){
      this.url = GLOBAL.url;
  }

  getLotes(id: String = null): Observable<any>{
      
      let headers = new HttpHeaders({
          'content-type':'application/json'
      });

      if (id==null) {
        return this._http.get(this.url + 'lotes/', {headers: headers} )
                          .map(res => res);
      } else {
        return this._http.get(this.url + 'lotes/' + id, {headers: headers} )
                          .map(res => res);
      }
      
  }

  getLote(id:string): Observable<any>{

      let headers = new HttpHeaders({
          'content-type':'application/json'
      });

      return this._http.get(this.url + 'lote/' + id, {headers: headers} )
                          .map(res => res);
  }

  addLote(lote: Lote): Observable<any>{
     let params = JSON.stringify(lote);
     let headers = new HttpHeaders({
         'content-type':'application/json'
     });

     return this._http.post(this.url + 'lote', params, { headers: headers })
                      .map(res => res);
  }

  editLote(id:string, lote: Lote): Observable<any>{
      let params = JSON.stringify(lote);
      let headers = new HttpHeaders({
          'content-type': 'application/json'
      });

      return this._http.post(this.url + 'edit-lote/' + id, params, {headers: headers})
                          .map(res => res);
  }

  deleteLote(id:string): Observable<any>{

      let headers = new HttpHeaders({
          'content-type':'application/json'
      });

      return this._http.get(this.url + 'delete-lote/' + id, {headers: headers} )
                          .map(res => res);
  }
}
