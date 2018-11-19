import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../paciente.service';

export interface datosPacientes {
  //'Nombre', 'Apellido Paterno', 'Apellido Materno','Fecha de nacimiento','Sexo','Alergias'
  nombre: String;
  paterno: String;
  materno: String;
  fNacimiento: String;
  sexo: String;
  alergias:String;
}

const PACIENTES_DATA: datosPacientes[] = [
  {nombre:'Ariadna', paterno: 'Calderon',materno:'Contreras',fNacimiento:'1998-10-19',sexo:'Femenino' ,alergias:'nueces'},
  {nombre:'Leticia', paterno: 'Carmona',materno:'Santillan',fNacimiento:'1995-5-8',sexo:'Femenino' ,alergias:'Loratadina'},
  {nombre:'Hugo', paterno: 'Mancinas',materno:'Briseño',fNacimiento:'1995-8-16',sexo:'Masculino' ,alergias:'Penicilina'},
  {nombre:'Luis', paterno: 'Carrillo',materno:'Ramirez',fNacimiento:'1999-3-23',sexo:'Masculino' ,alergias:'Polen'},
  {nombre:'Laura', paterno: 'Valdez',materno:'Bernal',fNacimiento:'1998-7-7',sexo:'Femenino' ,alergias:'Acaros'}
  
  
  
 
];

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})

export class PacientesComponent implements OnInit {
  closeResult: String;

  checked = false;
  indeterminate = false;
  disabled = false;

  constructor(private modalService: NgbModal, private http: HttpClient, public authService: AuthService) {

  }

  displayedColumns: string[] = ['nombre', 'paterno', 'materno','fNacimiento','sexo','alergias'];
  dataSource = PACIENTES_DATA;

  ngOnInit() {
    this.http.get(
      "http://localhost:3000/api/pacientes").
      subscribe(data => {
        console.log(data);
      });
  }

  postInfo(name: string) {
    this.http.post<{ name: string }>("http://localhost:3000/api/pacientes", { 'name': name }).subscribe(data => {
      console.log(data);
    });
  }
  // modal<
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }
  onRpaciente(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.crearPaciente(form.value.nombre, form.value.paterno, form.value.materno,
      form.value.sexo, form.value.fNacimiento, form.value.altura, form.value.peso,form.value.alergias);
    console.log(form.value);
  }
}