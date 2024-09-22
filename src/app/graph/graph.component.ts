import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent {
  public options:any
  constructor(){

    this.options = {
      data: [
        { week: '1/7', attendance: 50 },
        { week: '8/7', attendance: 70 },
        { week: '15/7', attendance: 30 },
        { week: '22/7', attendance: 80 },
        { week: '29/7', attendance: 60 },
        { week: '5/8', attendance: 70 },
        { week: '12/8', attendance: 80 },
        { week: '19/8', attendance: 60 },
        { week: '26/8', attendance: 70 },
        { week: '2/9', attendance: 90 },
        { week: '9/9', attendance: 75 },
        { week: '16/9', attendance: 60 },
        { week: '23/9', attendance: 55 },
        { week: '30/9', attendance: 50, forecast: true },
      ],
      series: [{
        type: 'line',
        xKey: 'week',
        yKey: 'attendance',
        marker: {
          enabled: true,
          size: 6, 
          fill: '#1c1c1c', 
        },
        stroke: '#A020F0', 
        strokeWidth: 2, 
        lineDash: (datum: any) => datum.forecast ? [5, 5] : undefined,
      }],
      axes: [
        {
          type: 'category',
          position: 'bottom',
          title: {
            text: 'Weeks',
          },
        },
        {
          type: 'number',
          position: 'left',
          title: {
            text: 'Attendance',
          },
          label: {
            format: '{value}%',
          },
          min: 0,
          max: 100,
        },
      ],
      legend: {
        enabled: false,
      },
    };
  }
}
