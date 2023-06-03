import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { EntryService } from "src/app/utils/service/entry.service";
import { TypeService } from "src/app/utils/service/type.service";

@Component({
  selector: "app-new-entry-modal",
  templateUrl: "./new-entry-modal.component.html",
  styleUrls: ["./new-entry-modal.component.scss"],
})
export class NewEntryModalComponent {
  public entryForm!: FormGroup;
  entryClassification: Array<string> = [];

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewEntryModalComponent>,
    private entryService: EntryService,
    private typeService: TypeService
  ) {}

  ngOnInit(): void {
    this.entryForm = this.fb.group({
      name: ["", [Validators.required]],
      date: ["", [Validators.required]],
      value: ["", [Validators.required]],
      classification: ["", [Validators.required]],
      description: [""],
    });
    this.typeService.getAllTypes().subscribe((types) => {
      types.forEach((type) => this.entryClassification.push(type.name));
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log(this.entryForm.value);
    this.entryService.createEntry(this.entryForm.value).subscribe(() => {
      this.dialogRef.close();
      window.location.reload();
    });
  }
}
