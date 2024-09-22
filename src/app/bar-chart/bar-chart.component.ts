import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None  
})
export class BarChartComponent {
  public options: any;
   chartData = [
    { category: 'Assignment', completed: 75, pending: 25, },
    { category: 'Quiz', completed: 100, pending: 0 },
    { category: 'Presentation', completed: 50, pending: 50 },
    { category: 'Lab', completed: 75, pending: 25 },
    { category: 'Viva', completed: 100, pending: 0 }
  ];
  
    constructor() {
      this.options = {
        data: this.chartData,
        series: [
          {
            type: 'bar',
            xKey: 'category',
            yKey: 'completed',
            yName: 'Completed',
            fill: '#8bc34a'
          },
          {
            type: 'bar',
            xKey: 'category',
            yKey: 'pending',
            yName: 'Pending',
            fill: '#e0e0e0'
          }
        ],
        axes: [
          {
            type: 'category',
            position: 'bottom',
            label: {
              rotation: 0,
            }
          },
          {
            type: 'number',
            position: 'left',
            title: {
              text: 'Percentage',
            },
            label: {
              format: '0%'
            }
          }
        ],
        legend: {
          position: 'top'
        }
      };
    }  
  
}
