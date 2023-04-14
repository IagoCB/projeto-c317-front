import { Component } from "@angular/core";
import { Entry } from "../../utils/model/entry.model";

@Component({
  selector: "app-entry-list",
  templateUrl: "./entry-list.component.html",
  styleUrls: ["./entry-list.component.scss"],
})
export class EntryListComponent {
  entries: Entry[] = [];
  displayedColumns = ["name", "date", "value", "classification", "description", "action"];

  constructor() {}

  ngOnInit(): void {}
}
