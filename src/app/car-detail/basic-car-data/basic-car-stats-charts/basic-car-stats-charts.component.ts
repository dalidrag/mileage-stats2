import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

import { FillUp } from '../../../common/fillUp';

@Component({
  selector: 'app-basic-car-stats-charts',
  templateUrl: './basic-car-stats-charts.component.html',
  styleUrls: ['./basic-car-stats-charts.component.css']
})
export class BasicCarStatsChartsComponent implements OnChanges {
  fuelOptions: Object;
  distanceOptions: Object;
  costOptions: Object;
  chart: Object;
  @Input()
  fillUps: FillUp[];
  datedFillUps: FillUp[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.fillUps = changes.fillUps.currentValue;

    let averageFuellEfficiency, totalDistanceTravelled, totalCost: number[][];
    if (!this.fillUps || this.fillUps.length < 2) {
      averageFuellEfficiency = [];
      totalDistanceTravelled = [];
      totalCost = [];
    }
    else {
      this.datedFillUps = this.createArrayOfDatedFillUps(this.fillUps);
      averageFuellEfficiency = this.createAverageEfficiencyArray(this.datedFillUps);
      totalDistanceTravelled = this.createDistanceTravelledArray(this.datedFillUps);
      totalCost = this.createTotalCostArray(this.datedFillUps);
    }
    this.fuelOptions = {
      title : { text : null },
      series: [{
        name: 'Average Fuel Efficiency',
        data: averageFuellEfficiency
      }],
      chart: { width: 270 , height: 135 },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      yAxis: {
        title: { text: null}
      },
      xAxis: {
        type: 'datetime'
      }
    };
    this.distanceOptions = {
      title : { text : null },
      series: [{
        name: 'Total Distance Travelled',
        data: totalDistanceTravelled
      }],
      chart: { width: 270 , height: 135 },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      yAxis: {
        title: { text: null}
      },
      xAxis: {
        type: 'datetime'
      }
    };
    this.costOptions = {
      title : { text : null },
      series: [{
        name: 'Total Cost',
        data: totalCost
      }],
      chart: { width: 270 , height: 135 },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      yAxis: {
        title: { text: null}
      },
      xAxis: {
        type: 'datetime'
      }
    };
  }

  saveChart(chart) {
    this.chart = chart;
  }

    //
    // methods that follow are used for statistical calculations
    //

    /**
     * Creates array of average fuel spending efficiency to insert into a chart
     *
     * @method createAverageEfficiencyArray
     * @param datedFillUps Fill ups, sorted by date, which will be used for calculations
     * @return {Array} Elements of the array are tuples [date, efficiency]
     */
    createAverageEfficiencyArray(datedFillUps: FillUp[]) {
      // create an array containing [date, distanceTravelled/fuelspent] entries
      let distanceTravelled: number = 0;
      let averageFuelEfficiency = datedFillUps.map((fillUp, index)=> {
        if (index > 0) {
          let distanceTravelledCurrent = fillUp.odometer - distanceTravelled;
          distanceTravelled = fillUp.odometer;
          return [new Date(fillUp.date).valueOf(), distanceTravelledCurrent/fillUp.quantity];
        }
        else {
          distanceTravelled = fillUp.odometer;
          return null;  // for the first fill up we have no value
        }
      })
      // cut out the first element
      return averageFuelEfficiency.slice(1, averageFuelEfficiency.length);
    }
    /**
     * Creates array of distance travelled to insert into a chart
     *
     * @method createDistanceTravelledArray
     * @param datedFillUps Fill ups, sorted by date, which will be used for calculations
     * @return {Array} Elements of the array are tuples [date, distance travelled]
     */
    createDistanceTravelledArray(datedFillUps: FillUp[]) {
      let distanceTravelled: number = 0;
      let totalDistanceTravelled = datedFillUps.map((fillUp, index)=> {
        if (index > 0) {
          let distanceTravelledCurrent = fillUp.odometer - distanceTravelled;
          distanceTravelled = fillUp.odometer;
          return [new Date(fillUp.date).valueOf(), distanceTravelledCurrent];
        }
        else {
          distanceTravelled = fillUp.odometer;
          return null;  // for the first fill up we have no value
        }
      })
        // cut out the first element
      return totalDistanceTravelled.slice(1, totalDistanceTravelled.length);
    }
    /**
     * Creates array of total cost to insert into a chart
     *
     * @method createTotalCostArray
     * @param datedFillUps Fill ups, sorted by date, which will be used for calculations
     * @return {Array} Elements of the array are tuples [date, cost]
     */
    createTotalCostArray(datedFillUps: FillUp[]) {
      return datedFillUps.map((fillUp) => {
        return [new Date(fillUp.date).valueOf(), fillUp.quantity * fillUp.pricePerGalon]
      });
    }

   /** A helper method for the three statistical functions
    *
    * @method createArrayOfDatedFillUps
    * @param allFillUps All fill ups for the car
    * @return {Array} Arrays of fill ups for the car from the last 12 months
    */
    createArrayOfDatedFillUps(allFillUps: FillUp[]): FillUp[] {
      // First filter fill ups so we have only the needed ones
      let datedFillUps: FillUp[];
      let dateNow = new Date();
      let yearAgo = new Date().setMonth(dateNow.getMonth() - 12);
      datedFillUps = allFillUps.filter((fillUp) => {  // filter out all fill ups
        let fillUpDate = new Date(fillUp.date);       // in the future or older then 12 months
        return (dateNow > fillUpDate) && (fillUpDate.valueOf() > yearAgo)
      });
      // arange them in the order of ascending dates
      return datedFillUps.sort((fillUp1, fillUp2) => fillUp1.date > fillUp2.date ? 1 : -1);
    }
}
