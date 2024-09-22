import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardcontent2',
  templateUrl: './dashboardcontent2.component.html',
  styleUrls: ['./dashboardcontent2.component.scss']
})
export class Dashboardcontent2Component {
 
  data=[
    {
    id:'PO1',
    heading:'Decision Making Skill',
    description:'Application of tools & techniques relevant to management theories and practices in analyzing & solving business issues',
    toggle:false
  },
  {
    id:'PO2',
    heading:'Communication Skill',
    description:'Application of tools & techniques relevant to management theories and practices in analyzing & solving business issues',
    toggle:false
  },
  {
    id:'PO3',
    heading:'Employability Skill',
    description:'Application of tools & techniques relevant to management theories and practices in analyzing & solving business issues',
    toggle:false
  },
  {
    id:'PO4',
    heading:'Entrepreneurial Skill',
    description:'Application of tools & techniques relevant to management theories and practices in analyzing & solving business issues',
    toggle:false
  },
  {
    id:'PO5',
    heading:'Contribution to Society',
    description:'Application of tools & techniques relevant to management theories and practices in analyzing & solving business issues',
    toggle:false
  },
  {
    id:'PO6',
    heading:'Problem Solving Skill',
    description:'Application of tools & techniques relevant to management theories and practices in analyzing & solving business issues',
    toggle:false
  },
  ]
  data2=[
    {heading:'Course Code',
      name:'BA3102'
    },
    {heading:'Course Name',
      name:'Quantitative techniques'
    },
    {heading:'Course Type',
      name:'Program Elective'
    },
    {heading:'Course Period',
      name:'Semester - 1'
    }
  ]
  
  data3=[
    {subject:'Lecture',
      rank:3
    },
    {subject:'Tutorial',
      rank:0
    },
    {subject:'Practical',
      rank:1
    },
    {subject:'Project',
      rank:0
    }
  ]
  data4=["CO2","CO4","CO5","CO7","CO13","Co14"]
  data5=["PO7","PO10","PO12","PO8"]
  
}
