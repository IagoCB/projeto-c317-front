import { Component } from "@angular/core";
import { Entry } from "../../utils/model/entry.model";
import { MatDialog } from "@angular/material/dialog";
import { EditEntryComponent } from "../modal/edit-entry/edit-entry.component";

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
  ];
  displayedColumns = ["name", "date", "value", "classification", "description", "action"];

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  editEntry(entry: Entry): void {
    const dialogRef = this.dialog.open(EditEntryComponent, {
      width: "auto",
      minWidth: 900,
      minHeight: 250,
      height: "auto",
    });

    dialogRef.componentInstance.entry = entry;
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });
  }

  handleDate(date: Date): string {
    let day = date.getDate().toString();
    let month = date.getMonth().toString();
    const year = date.getFullYear();

    if (+day < 10) {
      day = `0${day}`;
    }
    console.log(day)

    if (+month < 10) {
      month= `0${month}`;
    }
    console.log(month);

    return `${day}/${month}/${year}`;
  }
}
