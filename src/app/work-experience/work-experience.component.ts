import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {

  workExperience : Array<any> = [];

  educationList : Array<any> = [];

constructor() { }

ngOnInit(): void {

  let work1 = {
    fecha: "",
    ubicacion: "",
    puesto: "",
    empresa: "",
    logros : [
      { descripcion: "" },
    ]
  };

  let education1 = {
    grado: "",
    fechas: "",
    escuela: "",
  }


  this.workExperience.push(work1);

  this.educationList.push(education1);
}

}