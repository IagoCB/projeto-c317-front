import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NewTypeComponent } from "src/app/components/modal/new-type/new-type.component";

@Component({
  selector: "app-type",
  templateUrl: "./type.component.html",
  styleUrls: ["./type.component.scss"],
})
export class TypeComponent {
  constructor(public dialog: MatDialog) {}
  addType(): void {
    const dialogRef = this.dialog.open(NewTypeComponent, {
      width: "auto",
      minWidth: 900,
      minHeight: 250,
      height: "auto",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }
}
