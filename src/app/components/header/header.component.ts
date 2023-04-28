import { Component } from "@angular/core";
import { NewEntryModalComponent } from "../modal/new-entry/new-entry-modal.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) {}

  addEntry(): void {
    this.dialog.open(NewEntryModalComponent, {
      width: "auto",
      minWidth: 900,
      minHeight: 250,
      height: "auto",
    });
  }
}
