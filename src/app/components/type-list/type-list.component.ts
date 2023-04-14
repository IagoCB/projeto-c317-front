import { Component } from "@angular/core";
import { Type } from "src/app/utils/model/type.model";

@Component({
  selector: "app-type-list",
  templateUrl: "./type-list.component.html",
  styleUrls: ["./type-list.component.scss"],
})
export class TypeListComponent {
  types: Type[] = [
    {
      name: "sla",
      portion: 10,
    },
  ];
  displayedColumns = ["name", "portion", "action"];

  constructor() {}

  ngOnInit(): void {}
}