import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { EntryService } from "src/app/utils/service/entry.service";

@Component({
  selector: "app-new-entry-modal",
  templateUrl: "./new-entry-modal.component.html",
  styleUrls: ["./new-entry-modal.component.scss"],
})
export class NewEntryModalComponent {
  public entryForm!: FormGroup;
  entryClassification: Array<string> = ["Basic expanses", "Leisure expenses", "Education"];

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<NewEntryModalComponent>, private entryService: EntryService) {}

  ngOnInit(): void {
    this.entryForm = this.fb.group({
      name: ["", [Validators.required]],
      date: ["", [Validators.required]],
      value: ["", [Validators.required]],
      classification: ["", [Validators.required]],
      description: [""],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {

    console.log(this.entryForm.value)
    //this.entryService.createEntry(this.entryForm).subscribe(() => {
    //  this.entryService.showMessage('Entry Created')
    //  this.dialogRef.close();
    //})

    const chartFormObject = this.entryForm.getRawValue();
    console.log(chartFormObject.entryDate);
    this.dialogRef.close();
  }
}
