import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { GLOBAL} from './global';

import { Loteo } from '../models/loteo';

@Injectable({
  providedIn: 'root'
})
export class LoteoService {
  public url: string;

  constructor(private _http:HttpClient){
      this.url = GLOBAL.url;
  }

  getLoteos(token): Observable<any>{
      console.log(this.url);
      let headers = new HttpHeaders({
          'content-type':'application/json',
          'Authorization': token
      });
      return this._http.get(this.url + 'loteos', {headers: headers} )
                          .map(res => res);
  }

  getLoteo(token, id:string): Observable<any>{

      let headers = new HttpHeaders({
          'content-type':'application/json',
          'Authorization': token
      });

      return this._http.get(this.url + 'loteo/' + id, {headers: headers} )
                          .map(res => res);
  }

  addLoteo(token, loteo: Loteo): Observable<any>{
     let params = JSON.stringify(loteo);
     let headers = new HttpHeaders({
         'content-type':'application/json',
         'Authorization': token
     });

     return this._http.post(this.url + 'loteo', params, { headers: headers })
                      .map(res => res);
  }

  editLoteo(token, id:string, loteo: Loteo): Observable<any>{
      let params = JSON.stringify(loteo);
      let headers = new HttpHeaders({
          'content-type': 'application/json',
          'Authorization': token
      });

      return this._http.put(this.url + 'loteo/' + id, params, {headers: headers})
                          .map(res => res);
  }

  deleteLoteo(token, id:string): Observable<any>{

      let headers = new HttpHeaders({
          'content-type':'application/json',
          'Authorization': token
      });

      return this._http.delete(this.url + 'loteo/' + id, {headers: headers} )
                          .map(res => res);
  }
}
