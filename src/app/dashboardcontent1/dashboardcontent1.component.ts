import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardcontent1',
  templateUrl: './dashboardcontent1.component.html',
  styleUrls: ['./dashboardcontent1.component.scss']
})
export class Dashboardcontent1Component {
  selectedDate: string = "2023-2025";
  items=[
    {
    id:'PEO-1',
    name:'Employability'
  },
  {
    id:'PEO-2',
    name:'Entrepreneur'
  },
  {
    id:'PEO-3',
    name:'Research & Development'
  },
  {
    id:'PEO-4',
    name:'Contribution to business world'
  },
  {
    id:'PEO-5',
    name:'Contribution to society'
  }
]

}
