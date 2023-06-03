import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject } from "rxjs";
import { NewEntryModalComponent } from "src/app/components/modal/new-entry/new-entry-modal.component";
import { Entry } from "src/app/utils/model/entry.model";
import { EntryService } from "src/app/utils/service/entry.service";

@Component({
  selector: "app-entry",
  templateUrl: "./entry.component.html",
  styleUrls: ["./entry.component.scss"],
})
export class EntryComponent {
  form!: FormGroup;
  _$entriesFilter: BehaviorSubject<Entry[]> = new BehaviorSubject<Entry[]>([]);

  constructor(public dialog: MatDialog, private fb: FormBuilder, private entryService: EntryService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      startDate: [null],
      endDate: [null],
    });
  }

  addEntry(): void {
    this.dialog.open(NewEntryModalComponent, {
      width: "auto",
      minWidth: 900,
      minHeight: 250,
      height: "auto",
    });
  }

  filter(): void {
    const formValues = this.form.getRawValue();
    const dates = {
      startDate: this.handleDate(formValues.startDate),
      endDate: this.handleDate(formValues.endDate),
    };
    this.entryService.getFilterEntrys(dates).subscribe((entries) => {
      this._$entriesFilter.next(entries);
    });
  }

  handleDate(date: Date): string {
    let day = date.getDate().toString();
    let month = date.getMonth().toString();
    const year = date.getFullYear().toString();

    if (+day < 10) {
      day = `0${day}`;
    }

    if (+month < 10) {
      month = `0${+month + 1}`;
    }

    return `${year}-${month}-${day}`;
  }
}
