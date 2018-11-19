import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes,RouterModule} from '@Angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { DrRegistroComponent } from './Dr/dr-registro/dr-registro.component';
import { DrLoginComponent } from './Dr/dr-login/dr-login.component';
import {MatFormFieldModule,
   MatCardModule, 
   MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatTableModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { DgeneralesComponent } from './dgenerales/dgenerales.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ConsultaComponent } from './consulta/consulta.component';



const appRoutes: Routes = [
  {path: 'dr-registro' , component: DrRegistroComponent},
  {path: 'dr-login', component: DrLoginComponent},
  {path: 'consulta', component: ConsultaComponent},
  {path: 'paciente', component: PacientesComponent} //Los nombres de los componentes estan en los imports de arriba 
]

@NgModule({
  declarations: [
    AppComponent,
    DrRegistroComponent,
    DrLoginComponent,
    HeaderComponent,
    DgeneralesComponent,
    PacientesComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatTableModule,
    MatNativeDateModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
