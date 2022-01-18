import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { MenuComponent } from './components/dashboard/menu/menu.component';
import { AcceuildashboardComponent } from './components/dashboard/acceuildashboard/acceuildashboard.component';
import { SeancesComponent } from './components/dashboard/seances/seances.component';
import { ProfesseursComponent } from './components/dashboard/professeurs/professeurs.component';
import { UeComponent } from './components/dashboard/ue/ue.component';
import { EcComponent } from './components/dashboard/ec/ec.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AcceuilComponent,
    MenuComponent,
    AcceuildashboardComponent,
    SeancesComponent,
    ProfesseursComponent,
    UeComponent,
    EcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
