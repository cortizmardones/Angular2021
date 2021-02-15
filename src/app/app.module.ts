import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DbzModule } from './dbz/dbz.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { dataService } from './services/data.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    DbzModule,
    FormsModule
  ],
  providers: [
    dataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
