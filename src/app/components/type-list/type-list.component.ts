import { Component } from "@angular/core";
import { Type } from "src/app/utils/model/type.model";
import { EditTypeComponent } from "../modal/edit-type/edit-type.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-type-list",
  templateUrl: "./type-list.component.html",
  styleUrls: ["./type-list.component.scss"],
})
export class TypeListComponent {
  types: Type[] = [
    {
      name: "Basic expanses",
      portion: 50,
    },
    {
      name: "Leisure expenses",
      portion: 20,
    },
    {
      name: "Education",
      portion: 30,
    },
  ];
  displayedColumns = ["name", "portion", "action"];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  editType(type: Type): void {
    this.dialog.open(EditTypeComponent, {
      width: "auto",
      minWidth: 900,
      minHeight: 250,
      height: "auto",
      data: type,
    });
  }
}
