import { Component } from "@angular/core";
import { EChartsOption } from "echarts";

@Component({
  selector: "app-chart-budget-main",
  templateUrl: "./chart-budget-main.component.html",
  styleUrls: ["./chart-budget-main.component.scss"],
})
export class ChartBudgetMainComponent {
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
    legend: {
      top: "4%",
      left: "center",
    },
    color: this.colorsArray,
    series: [
      {
        name: "Budget",
        type: "pie",
        radius: ["50%", "80%"],
        avoidLabelOverlap: false,
        data: this.dataChart,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
      },
    ],
  };
}
