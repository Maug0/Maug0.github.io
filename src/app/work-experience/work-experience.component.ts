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
    empresa: "THUNDER",
    puesto: "Front End/Back End Web Developer",
    fecha: "Februrary 2022 - July 2022",
    desc : [
      { descripcion: "Worked on building a website for a non-profit organization called “Tutores de Resiliencia”." },
    ]
  };

  let work2 = {
    empresa: "IEPAM",
    puesto: "Web Design/Game Developer",
    fecha: "Februrary 2022 - July 2022",
    desc : [
      { descripcion: "Worked with a team of 5 to gamify learning in a way where elderly people could share their knowledge with everyone using Unity 2D and web development." },
    ]
  };

  let education1 = {
    escuela: "Prepa TEC Santa Catarina",
    grado: "High school",
    fechas: "2016-2019",
    
  }

  let education2 = {
    escuela: "Instituto Tecnológico y de Estudios Superiores de Monterrey, Monterrey",
    grado: "6th Semester Software Engineering Major - Grade: 95/100",
    fechas: "Expected June 2024",
    
  }


  this.workExperience.push(work1);
  this.workExperience.push(work2);

  this.educationList.push(education1);
  this.educationList.push(education2);
}

}