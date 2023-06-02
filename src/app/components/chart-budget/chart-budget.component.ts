import { Component } from "@angular/core";
import { EChartsOption, color } from "echarts";
import { TypeService } from "src/app/utils/service/type.service";

@Component({
  selector: "app-chart-budget",
  templateUrl: "./chart-budget.component.html",
  styleUrls: ["./chart-budget.component.scss"],
})
export class ChartBudgetComponent {
  typesOfBudget: any = [];
  colorAux = [
    ["#fb8c00", "#ffa726"],
    ["#43a047", "#66bb6a"],
    ["#3a66ff ", "#6b8cff "],
  ];
  colorsArray: string[] = [];
  dataChart: any = [];

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    this.typeService.getAllTypes().subscribe((types) => {
      this.getTypesOfBudget(types, this.colorAux);
      this.makeChart();
    });
  }

  setMyStyles(type: any) {
    let styles = {
      background: "linear-gradient(225.55deg, " + type.color[0] + " 0%, " + type.color[1] + " 100%)",
    };
    return styles;
  }

  makeChart() {
    this.typesOfBudget.map((type: { color: string[]; name: any; portion: any }) => {
      this.colorsArray.push(type.color[1]);
      this.dataChart.push({ name: type.name, value: type.portion });
    });
  }

  getTypesOfBudget(types: any[], cores: string[][]): void {
    const lengthColors = cores.length;
    const lengthTypes = types.length;

    for (let i = 0; i < lengthTypes; i++) {
      const corIndex = i % lengthColors;

      this.typesOfBudget.push({ ...types[i], color: cores[corIndex] });
    }
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
