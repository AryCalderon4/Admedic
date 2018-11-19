import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { authData } from './paciente-data.model';
//este archivo si es
@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {

    }
    crearPaciente(
        nombre: String,
        paterno: String,
        materno: String,
        sexo: Number, //checha el sexo porque usa un listbox
        fNacimiento: Date,
        altura: Number,
        peso: Number,
        alergias:String) {
        const authData: authData = {
            nombre: nombre,
            paterno: paterno,
            materno: materno,
            sexo: sexo, //checha el sexo porque usa un listbox
            fNacimiento: fNacimiento,
            altura: altura,
            peso: peso,
            alergias:alergias
        };
        console.log(authData);
        this.http.post('http://localhost:3000/api/pacientes/registroPacientes', authData)
            .subscribe(response => {
                console.log(response);
            });
    }
}