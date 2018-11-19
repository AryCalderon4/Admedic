import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //dentro de components solo se declara HttpClient
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-dr-login',
  templateUrl: './dr-login.component.html',
  styleUrls: ['./dr-login.component.css']
})
export class DrLoginComponent implements OnInit {

  constructor(private http :HttpClient,public authService: AuthService) { 

  }
 

  ngOnInit() {
     this.http.get(
      "http://localhost:3000/api/doctores").
  subscribe(data =>{
    console.log(data);
  });
  }

  onLogin(form:NgForm){
    if(form.invalid){
      return; 
    }
    this.authService.LoginDoctor(form.value.correo,form.value.contraseña);
    console.log(Response);
    console.log("si se pudo");
  }

}
//this.authService.LoginDoctor nombre de la funcion realizada en authservice