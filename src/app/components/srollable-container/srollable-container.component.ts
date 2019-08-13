import { Component, OnChanges, Input } from '@angular/core';
import { Planet } from '../../models/planet.model';

@Component({
  selector: 'app-srollable-container',
  templateUrl: './srollable-container.component.html',
  styleUrls: ['./srollable-container.component.scss']
})
export class SrollableContainerComponent implements OnChanges {
  @Input() data: any[];
  public sortedData: Planet[] = [];
  constructor() { }

  ngOnChanges() {
    this.dataToDisplay();
  }

  dataToDisplay() {
    if (this.data) {
      let sortedData = this.requiredData().reverse();
      let max = +sortedData[0].population;
      let barLength = 300;
      let fraction = barLength / max;
      sortedData.forEach((element) => {
        element.progress = fraction * element.population;
      });
      this.sortedData = sortedData;
      console.log(this.sortedData);
    }
  }

  requiredData() {
    let data = this.data.sort(function (a, b) {
      if (isNaN(parseInt(a.population))) {
        a.population = 0;
      } else if (isNaN(parseInt(b.population))) {
        b.population = 0
      }
      return parseInt(a.population) - parseInt(b.population);
    });
    return data;
  }

}
