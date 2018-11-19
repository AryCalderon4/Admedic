import { Component, OnInit } from '@angular/core';

export interface Especialidad {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dgenerales',
  templateUrl: './dgenerales.component.html',
  styleUrls: ['./dgenerales.component.css']
})
export class DgeneralesComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
