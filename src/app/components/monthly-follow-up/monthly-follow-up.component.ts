import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EChartsOption } from "echarts";

@Component({
  selector: "app-monthly-follow-up",
  templateUrl: "./monthly-follow-up.component.html",
  styleUrls: ["./monthly-follow-up.component.scss"],
})
export class MonthlyFollowUpComponent {
  @Input() public title: string = "";
  incomeForm: FormGroup = this.fb.group({
    income: [0],
    debts: [0],
    realIncome: [{ value: 0, disabled: true }],
  });
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
  gastos = [
    {
      name: "Basic expanses",
      value: 1000,
    },
    {
      name: "Leisure expenses",
      value: 1000,
    },
    {
      name: "Education",
      value: 1000,
    },
  ];
  colorsArray: string[] = [];
  types: string[] = [];
  planned: number[] = [];
  current: number[] = [];
  remaining: number[] = [];

  seriesLabel = {
    show: true,
  };

  chartOption: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Remaining", "Current Spend", "Planned"],
    },
    color: this.colorsArray,
    grid: {
      left: 100,
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}",
      },
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: this.types,
      axisLabel: {
        formatter: function (value: string) {
          const [word1, word2] = value.split(" ");
          if (word2) return word1 + "\n " + word2;
          return word1;
        },
        margin: 10,
        rich: {
          value: {
            align: "center",
          },
        },
      },
    },
    series: [
      {
        name: "Remaining",
        type: "bar",
        label: this.seriesLabel,
        data: this.remaining ? this.remaining : [0, 0, 0],
      },
      {
        name: "Current Spend",
        type: "bar",
        label: this.seriesLabel,
        data: this.current ? this.current : [0, 0, 0],
      },
      {
        name: "Planned",
        type: "bar",
        label: this.seriesLabel,
        data: this.planned ? this.planned : [0, 0, 0],
      },
    ],
  };

  mergeOption: EChartsOption = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.makeChart();
  }

  ngOnChanges(): void {
    this.incomeForm.valueChanges.subscribe(() => {
      const income = this.incomeForm.get("income")!.value;
      const debts = this.incomeForm.get("debts")!.value;

      const realIncome = income - debts;

      this.incomeForm.get("realIncome")!.setValue(realIncome);
      this.setMerge();
    });
  }

  makeChart() {
    this.typesOfBudget.map((type) => {
      this.colorsArray.push(type.color[1]);
      this.types.push(type.name);
    });
  }

  setMerge() {
    this.planned = [];
    this.current = [];
    this.remaining = [];
    this.colorsArray = [];
    this.types = [];
    const formObject = this.incomeForm.getRawValue();

    this.typesOfBudget.map((type) => {
      this.colorsArray.push(type.color[1]);
      this.types.push(type.name);
      this.planned.push(formObject.realIncome * (type.portion / 100));
      this.gastos.map((gasto) => {
        if (gasto.name === type.name) {
          this.current.push(gasto.value);
          this.remaining.push(formObject.realIncome * (type.portion / 100) - gasto.value);
        }
      });
    });

    this.mergeOption = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["Remaining", "Current Spend", "Planned"],
      },
      color: this.colorsArray,
      grid: {
        left: 100,
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}",
        },
      },
      yAxis: {
        type: "category",
        inverse: true,
        data: this.types,
        axisLabel: {
          formatter: function (value: string) {
            const [word1, word2] = value.split(" ");
            if (word2) return word1 + "\n " + word2;
            return word1;
          },
          margin: 10,
          rich: {
            value: {
              align: "center",
            },
          },
        },
      },
      series: [
        {
          name: "Remaining",
          type: "bar",
          data: this.remaining,
          label: this.seriesLabel,
        },
        {
          name: "Current Spend",
          type: "bar",
          label: this.seriesLabel,
          data: this.current,
        },
        {
          name: "Planned",
          type: "bar",
          label: this.seriesLabel,
          data: this.planned,
        },
      ],
    };
  }
}
