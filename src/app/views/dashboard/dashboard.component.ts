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
      name: "Future outcomes",
      content: "R$ 2540,00",
      color: ["#fb8c00", "#ffa726"],
      iconName: "file_upload",
    },
    {
      name: "Month income",
      content: "R$ 6200,00",
      color: ["#8e24aa", "#ab47bc"],
      iconName: "file_download",
    },
    {
      name: "Status",
      content: "Your budget is positive this month",
      color: ["#43a047", "#66bb6a"],
      iconName: "download_done",
    },
    {
      name: "BBAS3",
      content: "This stock incresed by 0.8% today",
      color: ["#3a66ff ", "#6b8cff "],
      iconName: "insights",
    },
  ];
}
