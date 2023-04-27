import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Entry } from "src/app/utils/model/entry.model";

@Component({
  selector: "app-edit-entry",
  templateUrl: "./edit-entry.component.html",
  styleUrls: ["./edit-entry.component.scss"],
})
export class EditEntryComponent {
  entryForm!: FormGroup;
  entryClassification: Array<string> = ["Basic expanses", "Leisure expenses", "Education"];
  dateModified!: Date;
  id?: number = this.entry.id;
  name: string = this.entry.name;
  date: string = this.entry.date;
  value?: number = this.entry.value;
  classification: string = this.entry.classification;
  description: string = this.entry.description;

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
    this.dateModified = this.handleDate(this.entry.date);
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.entry = {
      id: this.id,
      name: this.name,
      date: this.date,
      value: this.value,
      classification: this.classification,
      description: this.description,
    };

    console.log(this.entry);
  }

  handleDate(dateString: string): Date {
    const dateArray = dateString.split("/");
    const convertedDate = new Date(dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]);
    return new Date(convertedDate);
  }
}
