import { Component } from "@angular/core";
import { Entry } from "../../utils/model/entry.model";
import { MatDialog } from "@angular/material/dialog";
import { EditEntryComponent } from "../modal/edit-entry/edit-entry.component";
import { DeleteEntryComponent } from "../modal/delete-entry/delete-entry.component";
import { EntryService } from "src/app/utils/service/entry.service";

@Component({
  selector: "app-entry-list",
  templateUrl: "./entry-list.component.html",
  styleUrls: ["./entry-list.component.scss"],
})
export class EntryListComponent {
  entries: Entry[] = [];
  displayedColumns = ["name", "date", "value", "classification", "description", "action"];

  constructor(public dialog: MatDialog, private entryService: EntryService) {}
  ngOnInit(): void {
    this.entryService.getAllEntrys().subscribe((entries) => {
      this.entries = entries;
    });
  }

  editEntry(entry: Entry): void {
    this.dialog.open(EditEntryComponent, {
      width: "auto",
      minWidth: 900,
      minHeight: 250,
      height: "auto",
      data: entry,
    });
  }

  deleteEntry(entry: Entry): void {
    this.dialog.open(DeleteEntryComponent, {
      width: "auto",
      minWidth: 900,
      minHeight: 250,
      height: "auto",
      data: entry,
    });
  }

  handleDate(date: Date): string {
    let day = date.getDate().toString();
    let month = date.getMonth().toString();
    const year = date.getFullYear();

    if (+day < 10) {
      day = `0${day}`;
    }

    if (+month < 10) {
      month = `0${month}`;
    }

    return `${day}/${month}/${year}`;
  }
}
