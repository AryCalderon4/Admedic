import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

export interface Especialidad {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dr-registro',
  templateUrl: './dr-registro.component.html',
  styleUrls: ['./dr-registro.component.css']
})
export class DrRegistroComponent implements OnInit {
  Especialidades: Especialidad[] = [
    {value: 'Alergia-0', viewValue: 'Alergologia'},
    {value: 'Cardio-1', viewValue: 'Cardiologia'},
    {value: 'Derma-2', viewValue: 'Dermatologia'},
    {value: 'Gastro-3', viewValue: 'Gastroenterologia'},
    {value: 'Genetica-4', viewValue: 'Genetica'},
    {value: 'Gine-5', viewValue: 'Ginecologia'},
    {value: 'Hema-6', viewValue: 'Hematologia'},
    {value: 'Neuro-7', viewValue: 'Neurologia'},
    {value: 'General-7', viewValue: 'Medico general'}
  
  ];
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onRegistro(form:NgForm){
    if(form.invalid){
      return; 
    }
    this.authService.crearDoctor(form.value.nombre,form.value.paterno,form.value.materno,form.value.correo,form.value.contraseña,
    form.value.cedula,form.value.eProcedencia,form.value.especialidad,form.value.generacion,
    form.value.nConsultorio,form.value.domicilio,form.value.cp,form.value.pais,form.value.telefono); //AGREGAR TODOS LOS DEMAS DATOS
    console.log(form.value);
  }
}
