import { Component } from "@angular/core";
import { EChartsOption } from "echarts";
import { TypeService } from "src/app/utils/service/type.service";

@Component({
  selector: "app-chart-budget-main",
  templateUrl: "./chart-budget-main.component.html",
  styleUrls: ["./chart-budget-main.component.scss"],
})
export class ChartBudgetMainComponent {
  typesOfBudget: any = [];
  colorAux = [
    ["#fb8c00", "#ffa726"],
    ["#43a047", "#66bb6a"],
    ["#3a66ff ", "#6b8cff "],
  ];
  colorsArray: string[] = [];
  dataChart: object[] = [];

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    this.typeService.getAllTypes().subscribe((types) => {
      this.getTypesOfBudget(types, this.colorAux);
      this.makeChart();
    });
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
