import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as jspdf from 'jspdf';  //libreria del pdf
import html2canvas from 'html2canvas'; //diseño para pdf
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AuthService } from '../consulta.service';

export interface PeriodicElement {
  nombre: string;
  posicion: number;
  dosis: number;
  frecuencia: string;
  duracion: string;
}

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  closeResult : String; 
  
  constructor(private modalService: NgbModal, private http: HttpClient, public authService: AuthService) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
      return  `with: ${reason}`;
    }
    
  }

   captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
}
onRconsulta(form:NgForm){
  if(form.invalid){
    return; 
  }
  this.authService.crearConsulta(form.value.temperatura,form.value.fCardiaca,
    form.value.fRespiratoria,form.value.sintomas,form.value.diagnostico); 
    console.log(form.value);

}
}
