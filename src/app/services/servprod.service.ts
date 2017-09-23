import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServprodService {

  constructor(private _http: Http) { }

  getProduit() {
    return this._http.get('http://localhost:8080/gestion_jeux/mvc/pro/jeux')
                     .map(responseHttp => responseHttp.json() );
  }

}