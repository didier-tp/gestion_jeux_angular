import { Injectable } from '@angular/core';
import {ClientData} from '../client/clientData';
import {AdresseData} from '../client/clientData';
import {CompteData} from '../client/clientData';
import {LoginData} from '../client/clientData';
import { Http, Response, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServcliService {


  constructor (private http: Http) { }
        postcompte(compte: CompteData) {
          let body = JSON.stringify(compte);
          let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });

          return this.http.post('http://localhost:8080/gestion_jeux/mvc/cli/compte', body, options);
        }
}