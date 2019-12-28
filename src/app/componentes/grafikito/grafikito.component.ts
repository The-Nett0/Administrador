import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafikito',
  templateUrl: './grafikito.component.html',
  styleUrls: ['./grafikito.component.css']
})
export class GrafikitoComponent implements OnInit {
  @Input() public doughnutChartLabels: Label[] = [];
  @Input() public doughnutChartData: MultiDataSet = [];
  @Input()   public doughnutChartType: ChartType = 'doughnut';
  
  constructor() { }

  ngOnInit() {
  }

}
