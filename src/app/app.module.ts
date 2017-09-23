import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import {ServprodService } from './services/servprod.service';
import { ServcliService} from './services/servcli.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ClientComponent } from './client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ServprodService, ServcliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
