import { Component } from "@angular/core";
import { Info } from "src/app/utils/model/info.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  infos: Info[] = [
    {
      name: "teste 1",
      content: "teste content 1",
      color: ["#fb8c00", "#ffa726"],
    },
    {
      name: "teste 2",
      content: "teste content 2",
      color: ["#8e24aa", "#ab47bc"],
    },
    {
      name: "teste 3",
      content: "teste content 3",
      color: ["#43a047", "#66bb6a"],
    },
    {
      name: "teste 4",
      content: "teste content 4",
      color: ["#3a66ff ", "#6b8cff "],
    },
  ];
}
