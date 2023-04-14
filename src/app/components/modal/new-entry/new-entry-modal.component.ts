import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-new-entry-modal",
  templateUrl: "./new-entry-modal.component.html",
  styleUrls: ["./new-entry-modal.component.scss"],
})
export class NewEntryModalComponent {
  public entryForm!: FormGroup;
  entryClassification: Array<String> = ["a", "b", "c"];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<NewEntryModalComponent>) {}

  ngOnInit(): void {
    this.entryForm = this.fb.group({
      entryName: ["", [Validators.required]],
      entryDate: ["", [Validators.required]],
      entryValue: ["", [Validators.required]],
      entryDescription: [""],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
