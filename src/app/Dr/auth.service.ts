import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { authData } from './auth-data.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {

    }
    crearDoctor(
        nombre: String,
        paterno: String,
        materno: String,
        correo: String,
        contraseña: String,
        cedula: Number,
        eProcedencia: String,
        especilidad: String,
        generacion: Number,
        nConsultorio: String,
        domicilio: String,
        cp: Number,
        pais: String,
        telefono: Number) {
        const authData: authData = {
            nombre: nombre,
            paterno: paterno,
            materno: materno,
            correo: correo,
            contraseña: contraseña,
            cedula: cedula,
            eProcedencia: eProcedencia,
            especilidad: especilidad,
            generacion: generacion,
            nConsultorio: nConsultorio,
            domicilio: domicilio,
            cp: cp,
            pais: pais,
            telefono: telefono
        };
        console.log(authData);
        this.http.post('http://localhost:3000/api/doctores/registroDoctores', authData)
            .subscribe(response => {
                console.log(response);
            });

    }
    LoginDoctor(

        correo: String,
        contraseña: String
    ) {
        const authData: authData = {
            nombre: '',
            paterno:'',
            materno:'',
            correo: correo,
            contraseña: contraseña,
            cedula: 0,
            eProcedencia: '',
            especilidad: '',
            generacion: 0,
            nConsultorio: '',
            domicilio: '',
            cp: 0,
            pais: '',
            telefono: 0
        };
        console.log(authData);
        this.http.post('http://localhost:3000/api/doctores/loginDoctores', authData)
            .subscribe(response => {
                console.log(response);
            });
    }
}