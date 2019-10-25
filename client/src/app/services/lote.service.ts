import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { GLOBAL} from './global';

import { Lote } from '../models/lote';

@Injectable({
  providedIn: 'root'
})
export class LoteService {
  public url: string;

  constructor(private _http:HttpClient){
      this.url = GLOBAL.url;
  }

  getLotes(token, id: String = null): Observable<any>{
      
      let headers = new HttpHeaders({
          'content-type':'application/json',
          'Authorization': token
      });

      if (id==null) {
        return this._http.get(this.url + 'lotes/', {headers: headers} )
                          .map(res => res);
      } else {
        return this._http.get(this.url + 'lotes/' + id, {headers: headers} )
                          .map(res => res);
      }
      
  }

  getLote(token, id:string): Observable<any>{

      let headers = new HttpHeaders({
          'content-type':'application/json',
          'Authorization': token
      });

      return this._http.get(this.url + 'lote/' + id, {headers: headers} )
                          .map(res => res);
  }

  addLote(token, lote: Lote): Observable<any>{
     let params = JSON.stringify(lote);
     let headers = new HttpHeaders({
         'content-type':'application/json',
         'Authorization': token
     });

     return this._http.post(this.url + 'lote', params, { headers: headers })
                      .map(res => res);
  }

  editLote(token, id:string, lote: Lote): Observable<any>{
      let params = JSON.stringify(lote);
      let headers = new HttpHeaders({
          'content-type': 'application/json',
          'Authorization': token
      });

      return this._http.post(this.url + 'edit-lote/' + id, params, {headers: headers})
                          .map(res => res);
  }

  deleteLote(token, id:string): Observable<any>{

      let headers = new HttpHeaders({
          'content-type':'application/json',
          'Authorization': token
      });

      return this._http.get(this.url + 'delete-lote/' + id, {headers: headers} )
                          .map(res => res);
  }
}
