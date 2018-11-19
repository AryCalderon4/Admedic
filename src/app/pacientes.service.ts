import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

//DOCUMENTO BASADO EN EL EJEMPLO DEL PROFE HUGO
@Injectable({ providedIn: 'root' })
export class PacienteService {
  private pacientes: any[] = [];
  private pacientesUpdated = new Subject();
  private singleData = new Subject();

  constructor(private http: HttpClient, private router: Router) {
  }
  getPacienteId(paciente: string) {
    this.http.get<{message: string, id: string}>('http://localhost:3000/api/pacientes/pacientesSchema/id/' + paciente)
      .subscribe(data => {
        this.singleData.next({ data: data.id});
      }, error => {
        console.log(error);
      });
  }
  getPacienteName(id: string) {                         //http se cambia por el localhost 3000 
    this.http.get<{message: string, paciente: string}>('http://localhost:3000/api/user/info/name/' + id)
      .subscribe(data => {
        this.singleData.next({ data: data.paciente});    
      }, error => {
        console.log(error);
      });
  }
  getSinglePacienteListener() {
    return this.singleData.asObservable();
  }
  getPacientes() {
    this.http
      .get<{ message: string; pacientes: any; }>(
        'http://localhost:3000/api/user'
      )
      .pipe(
        map(userData => {
          return {
            pacientes: userData.pacientes.map(paciente => {
              return {
                nombre:paciente.nombre,
                paterno:paciente.paterno,
                materno:paciente.materno,
                sexo:paciente.sexo,
                fNacimiento:paciente.fNacimiento,
                altura:paciente.altura,
                peso:paciente.peso,
              };
            })
          };
        })
      )
      .subscribe(transformedPacienteData => {
        this.pacientes = transformedPacienteData.pacientes;
        this.pacientesUpdated.next({
          paciente: [...this.pacientes]
        });
      });
  }

  getPacienteUpdateListener() {
    return this.pacientesUpdated.asObservable();
  }

  getPaciente(id: string) {
    return this.http.get<{ message: string; pacientes: any; }>('http://localhost:3000/api/user/' + id)
      .pipe(map(PacienteData => {
          return {
            pacientes: PacienteData.pacientes.map(user => {
              return {
                _id: user._id,
                userId: user.userId,
                date: user.date,
                hash: user.hash,
                status: user.status
              };
            })
          };
        })
      ).subscribe(transformedUserData => {
        this.pacientes = transformedUserData.pacientes;
        this.pacientesUpdated.next({
          pacientes: [...this.pacientes]
        });
      });
  }

  addUser(hash: string) {
    this.http
      .post<{ message: string; user: any }>(
        'http://localhost:3000/api/user',
        {'hash': hash}
      )
      .subscribe(responseData => {
        alert('Hash enviado con éxito');
        this.router.navigate(['/dashboard']);
      }, error => {
        alert('Error al enviar, intente mas tarde');
        console.log(error);
      });
  }

  updateUser(id: string, status: string) {
    let postData: FormData;
    postData = new FormData();
    postData.append('id', id);
    postData.append('status', status);
    this.http
      .put('http://localhost:3000/api/user/activate/' + id, postData)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }
}
