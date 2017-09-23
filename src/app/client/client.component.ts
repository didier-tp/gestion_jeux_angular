import { Component, OnInit } from '@angular/core';

import {ServcliService } from '../services/servcli.service';
import {ClientData} from './clientData';
import {LoginData} from './clientData';
import {AdresseData} from './clientData';
import {CompteData} from './clientData';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public client: ClientData = new ClientData();
  public adresse: AdresseData= new AdresseData();
  public login: LoginData = new LoginData();


  constructor(private servcliService: ServcliService) { }

  ngOnInit() {

  }

  public createcompte(e) {

    let compte: CompteData = new CompteData();
    compte.client = this.client;
    compte.login = this.login;
    compte.adresse = this.adresse;

    console.log(JSON.stringify(compte));
    this.servcliService.postcompte(compte)
        .subscribe(res => console.log(res));
  }


}

