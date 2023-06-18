import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { EChartsOption } from "echarts";
import { EntryService } from "src/app/utils/service/entry.service";
import { TypeService } from "src/app/utils/service/type.service";

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
  typesOfBudget: any = [];
  colorAux = [
    ["#fb8c00", "#ffa726"],
    ["#43a047", "#66bb6a"],
    ["#3a66ff ", "#6b8cff "],
  ];
  spend: { name: string; value: number }[] = [];
  colorsArray: string[] = ["#ffa726", "#66bb6a", "#6b8cff"];
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

  constructor(private fb: FormBuilder, private typeService: TypeService, private entryService: EntryService) {}

  ngOnInit(): void {
    const date = new Date();
    const monthDate = date.getMonth() + 1;
    this.typeService.getAllTypes().subscribe((types) => {
      this.getTypesOfBudget(types, this.colorAux);
      this.makeChart();
    });
    this.entryService.getSpend(date.getFullYear(), monthDate).subscribe((spend) => {
      this.spend = spend;
    });
    this.incomeForm.valueChanges.subscribe(() => {
      const income = this.incomeForm.get("income")!.value;
      const debts = this.incomeForm.get("debts")!.value;

      const realIncome = income - debts;

      this.incomeForm.get("realIncome")!.setValue(realIncome);
      this.setMerge();
    });
  }

  makeChart() {
    this.typesOfBudget.map((type: { color: string[]; name: string }) => {
      this.types.push(type.name);
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

  setMerge() {
    this.planned = [];
    this.current = [];
    this.remaining = [];
    this.types = [];
    const formObject = this.incomeForm.getRawValue();

    this.typesOfBudget.map((type: any) => {
      this.types.push(type.name);
      this.planned.push(formObject.realIncome * (type.portion / 100));
      this.spend.map((spend) => {
        if (spend.name === type.name) {
          this.current.push(spend.value);
          this.remaining.push(formObject.realIncome * (type.portion / 100) - spend.value);
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
