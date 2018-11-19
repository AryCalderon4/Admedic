import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { authData } from './consulta-data.model';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {

    }
    crearConsulta(
        temperatura: String,
        fCardiaca: String,
        fRespiratoria: String,
        sintomas: String,
        diagnostico: String) {
        const authData: authData = {
            temperatura: temperatura,
            fCardiaca: fCardiaca,
            fRespiratoria: fRespiratoria,
            sintomas: sintomas,
            diagnostico: diagnostico
        };
        console.log(authData);
        this.http.post('http://localhost:3000/api/consultas/registroConsulta', authData)
            .subscribe(response => {
                console.log(response);
            });
    }
}