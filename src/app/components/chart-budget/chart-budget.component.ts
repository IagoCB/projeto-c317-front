import { Component } from "@angular/core";
import { EChartsOption } from "echarts";

@Component({
  selector: "app-chart-budget",
  templateUrl: "./chart-budget.component.html",
  styleUrls: ["./chart-budget.component.scss"],
})
export class ChartBudgetComponent {
  typesOfBudget = [
    {
      name: "Basic expanses",
      portion: 50,
      color: ["#fb8c00", "#ffa726"],
    },
    {
      name: "Leisure expenses",
      portion: 20,
      color: ["#43a047", "#66bb6a"],
    },
    {
      name: "Education",
      portion: 30,
      color: ["#3a66ff ", "#6b8cff "],
    },
  ];
  colorsArray: string[] = [];
  dataChart: object[] = [];

  ngOnInit(): void {
    this.makeChart();
  }

  setMyStyles(type: any) {
    let styles = {
      background: "linear-gradient(225.55deg, " + type.color[0] + " 0%, " + type.color[1] + " 100%)",
    };
    return styles;
  }

  makeChart() {
    this.typesOfBudget.map((type) => {
      this.colorsArray.push(type.color[1]);
      this.dataChart.push({ name: type.name, value: type.portion });
    });
  }

  chartOption: EChartsOption = {
    tooltip: {
      trigger: "item",
    },
    color: this.colorsArray,
    series: [
      {
        name: "Budget",
        type: "pie",
        radius: "90%",
        data: this.dataChart,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        labelLine: {
          show: false,
        },
        label: {
          show: false,
        },
      },
    ],
  };
}
