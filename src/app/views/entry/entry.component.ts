import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NewEntryModalComponent } from "src/app/components/modal/new-entry-modal/new-entry-modal.component";

@Component({
  selector: "app-entry",
  templateUrl: "./entry.component.html",
  styleUrls: ["./entry.component.scss"],
})
export class EntryComponent {
  constructor(public dialog: MatDialog) {}

  addEntry(): void {
    const dialogRef = this.dialog.open(NewEntryModalComponent, {
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
