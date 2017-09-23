import { Component, OnInit } from '@angular/core';
import {ServprodService } from '../services/servprod.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: any = [];
  error = '';
  constructor(private _servprodService: ServprodService) { }

  ngOnInit() {
    this._servprodService.getProduit()
                         .subscribe(
                          data => this.produits = data,
                          error => {
                          console.error(error);
                          this.error = error;
                                    }
                                           );
  }

}