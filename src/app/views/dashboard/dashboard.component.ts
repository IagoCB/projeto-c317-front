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
    },
    {
      name: "teste 2",
      content: "teste content 2",
    },
    {
      name: "teste 3",
      content: "teste content 3",
    },
    {
      name: "teste 4",
      content: "teste content 4",
    },
  ];
}
