import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { EditEntryComponent } from "../edit-entry/edit-entry.component";
import { Entry } from "src/app/utils/model/entry.model";

@Component({
  selector: "app-delete-entry",
  templateUrl: "./delete-entry.component.html",
  styleUrls: ["./delete-entry.component.scss"],
})
export class DeleteEntryComponent {
  entryForm!: FormGroup;
  entryClassification: Array<string> = ["Basic expanses", "Leisure expenses", "Education"];
  dateModified!: Date;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditEntryComponent>,
    @Inject(MAT_DIALOG_DATA)
    public entry: Entry
  ) {}

  ngOnInit(): void {
    this.entryForm = this.fb.group({
      entryName: ["", [Validators.required]],
      entryDate: ["", [Validators.required]],
      entryValue: ["", [Validators.required]],
      entryDescription: [""],
    });
    this.entryForm.controls["entryName"].disable();
    this.entryForm.controls["entryDate"].disable();
    this.entryForm.controls["entryValue"].disable();
    this.entryForm.controls["entryDescription"].disable();
    this.dateModified = this.handleDate(this.entry.date);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.dialogRef.close();
  }

  handleDate(dateString: string): Date {
    const dateArray = dateString.split("/");
    const convertedDate = new Date(dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]);
    return new Date(convertedDate);
  }
}
