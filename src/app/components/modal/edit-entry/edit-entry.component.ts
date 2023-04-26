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

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditEntryComponent>) {}

  ngOnInit(): void {
    this.entryForm = this.fb.group({
      entryName: ["", [Validators.required]],
      entryDate: ["", [Validators.required]],
      entryValue: ["", [Validators.required]],
      entryDescription: [""],
    });
    console.log(this.entry);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
