import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  

  skillList : Array<any> = [];

  languageList : Array<any> = [];

constructor() { }

ngOnInit(): void {

  let skill1 = {
    skill: "C++, C#",
  };
  let skill2 = {
    skill: "Python",
  };
  let skill3 = {
    skill: "HTML, CSS, JS",
  };
  let skill4 = {
    skill: "Unity 2D/3D",
  };
  let skill5 = {
    skill: "Swift",
  };
  let skill6 = {
    skill: "SQL",
  };
  let skill7 = {
    skill: "Microsoft Office",
  };


  let language1 = {
    language: "Spanish",
    level: "Advanced",
  }
  let language2 = {
    language: "English",
    level: "Advanced",
  }
  let language3 = {
    language: "German",
    level: "Beginner",
  }


  this.skillList.push(skill1);
  this.skillList.push(skill2);
  this.skillList.push(skill3);
  this.skillList.push(skill4);
  this.skillList.push(skill5);
  this.skillList.push(skill6);
  this.skillList.push(skill7);
  
  this.languageList.push(language1);
  this.languageList.push(language2);
  this.languageList.push(language3);
}
}
