import { Component } from "@angular/core";
import { Entry } from "../../utils/model/entry.model";
import { MatDialog } from "@angular/material/dialog";
import { EditEntryComponent } from "../modal/edit-entry/edit-entry.component";
import { DeleteEntryComponent } from "../modal/delete-entry/delete-entry.component";

@Component({
  selector: "app-entry-list",
  templateUrl: "./entry-list.component.html",
  styleUrls: ["./entry-list.component.scss"],
})
export class EntryListComponent {
  entries: Entry[] = [
    {
      id: 1,
      name: "Eletric bill",
      date: this.handleDate(new Date()),
      value: 125.5,
      classification: "Basic expanses",
      description: "Just a eletric bill",
    },
    {
      id: 2,
      name: "Water bill",
      date: this.handleDate(new Date()),
      value: 77.6,
      classification: "Basic expanses",
      description: "Just a water bill",
    },
    {
      id: 3,
      name: "GTX 4080",
      date: this.handleDate(new Date()),
      value: 8799,
      classification: "Leisure expenses",
      description: "Graphic cart for computer",
    },
    {
      id: 4,
      name: "Mouse razer",
      date: this.handleDate(new Date()),
      value: 350,
      classification: "Leisure expenses",
      description: "",
    },
    {
      id: 5,
      name: "Rent",
      date: this.handleDate(new Date()),
      value: 1456.7,
      classification: "Basic expanses",
      description: "Rent for the house",
    },
    {
      id: 6,
      name: "Eletric bill",
      date: this.handleDate(new Date()),
      value: 125.5,
      classification: "Basic expanses",
      description: "Just a eletric bill",
    },
    {
      id: 7,
      name: "Water bill",
      date: this.handleDate(new Date()),
      value: 77.6,
      classification: "Basic expanses",
      description: "Just a water bill",
    },
    {
      id: 8,
      name: "GTX 4080",
      date: this.handleDate(new Date()),
      value: 8799,
      classification: "Leisure expenses",
      description: "Graphic cart for computer",
    },
    {
      id: 9,
      name: "Mouse razer",
      date: this.handleDate(new Date()),
      value: 350,
      classification: "Leisure expenses",
      description: "",
    },
    {
      id: 10,
      name: "Rent",
      date: this.handleDate(new Date()),
      value: 1456.7,
      classification: "Basic expanses",
      description: "Rent for the house",
    },
    {
      id: 11,
      name: "Eletric bill",
      date: this.handleDate(new Date()),
      value: 125.5,
      classification: "Basic expanses",
      description: "Just a eletric bill",
    },
    {
      id: 12,
      name: "Water bill",
      date: this.handleDate(new Date()),
      value: 77.6,
      classification: "Basic expanses",
      description: "Just a water bill",
    },
    {
      id: 13,
      name: "GTX 4080",
      date: this.handleDate(new Date()),
      value: 8799,
      classification: "Leisure expenses",
      description: "Graphic cart for computer",
    },
    {
      id: 14,
      name: "Mouse razer",
      date: this.handleDate(new Date()),
      value: 350,
      classification: "Leisure expenses",
      description: "",
    },
    {
      id: 15,
      name: "Rent",
      date: this.handleDate(new Date()),
      value: 1456.7,
      classification: "Basic expanses",
      description: "Rent for the house",
    },
  ];
  displayedColumns = ["name", "date", "value", "classification", "description", "action"];

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

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
