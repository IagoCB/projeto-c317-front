import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { EditEntryComponent } from "../edit-entry/edit-entry.component";
import { Entry } from "src/app/utils/model/entry.model";
import { EntryService } from "src/app/utils/service/entry.service";
import { TypeService } from "src/app/utils/service/type.service";

@Component({
  selector: "app-delete-entry",
  templateUrl: "./delete-entry.component.html",
  styleUrls: ["./delete-entry.component.scss"],
})
export class DeleteEntryComponent {
  entryForm!: FormGroup;
  entryClassification: Array<string> = [];
  dateModified!: Date;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditEntryComponent>,
    @Inject(MAT_DIALOG_DATA)
    public entry: Entry,
    private entryService: EntryService,
    private typeService: TypeService
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
    this.typeService.getAllTypes().subscribe((types) => {
      types.forEach((type) => this.entryClassification.push(type.name));
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete(): void {
    this.entryService.deleteEntry(this.entry).subscribe(() => {
      this.dialogRef.close();
      window.location.reload();
    });
  }

  handleDate(dateString: string): Date {
    const dateArray = dateString.split("/");
    const convertedDate = new Date(dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]);
    return new Date(convertedDate);
  }
}
