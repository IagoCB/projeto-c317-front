import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Entry } from "src/app/utils/model/entry.model";

@Component({
  selector: "app-edit-entry",
  templateUrl: "./edit-entry.component.html",
  styleUrls: ["./edit-entry.component.scss"],
})
export class EditEntryComponent {
  @Input()
  entry!: Entry;
  public entryForm!: FormGroup;
  entryClassification: Array<String> = ["a", "b", "c"];
  public dateModified!: Date;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditEntryComponent>) {}

  ngOnInit(): void {
    this.entryForm = this.fb.group({
      entryName: ["", [Validators.required]],
      entryDate: ["", [Validators.required]],
      entryValue: ["", [Validators.required]],
      entryDescription: [""],
    });
    this.dateModified = this.handleDate(this.entry.date);
    console.log(this.entry);
    console.log(this.handleDate("24/02/2022"));
  }

  cancel(): void {
    this.dialogRef.close();
  }

  handleDate(dateString: String): Date {
    const dateArray = dateString.split("/");
    const convertedDate = new Date(dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]);
    return new Date(convertedDate);
  }
}
