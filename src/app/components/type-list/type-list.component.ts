import { Component } from "@angular/core";
import { Type } from "src/app/utils/model/type.model";
import { EditTypeComponent } from "../modal/edit-type/edit-type.component";
import { MatDialog } from "@angular/material/dialog";
import { DeleteTypeComponent } from "../modal/delete-type/delete-type.component";
import { TypeService } from "src/app/utils/service/type.service";

@Component({
  selector: "app-type-list",
  templateUrl: "./type-list.component.html",
  styleUrls: ["./type-list.component.scss"],
})
export class TypeListComponent {
  types: Type[] = [];
  displayedColumns = ["name", "portion", "action"];

  constructor(public dialog: MatDialog, private typeService: TypeService) {}

  ngOnInit(): void {
    this.typeService.getAllTypes().subscribe((types) => {
      this.types = types;
    });
  }

  editType(type: Type): void {
    this.dialog.open(EditTypeComponent, {
      width: "auto",
      minWidth: 900,
      minHeight: 250,
      height: "auto",
      data: type,
    });
  }

  deleteType(type: Type): void {
    this.dialog.open(DeleteTypeComponent, {
      width: "auto",
      minWidth: 900,
      minHeight: 250,
      height: "auto",
      data: type,
    });
  }
}
