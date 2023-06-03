import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Entry } from "src/app/utils/model/entry.model";
import { EntryService } from "src/app/utils/service/entry.service";
import { TypeService } from "src/app/utils/service/type.service";

@Component({
  selector: "app-edit-entry",
  templateUrl: "./edit-entry.component.html",
  styleUrls: ["./edit-entry.component.scss"],
})
export class EditEntryComponent {
  entryForm!: FormGroup;
  entryClassification: Array<string> = [];
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
    this.dateModified = this.handleDate(this.entry.date);
    this.typeService.getAllTypes().subscribe((types) => {
      types.forEach((type) => this.entryClassification.push(type.name));
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  edit(): void {
    const entry = {
      id: this.id,
      name: this.name,
      date: new Date(this.handleDate(this.entry.date)),
      value: this.value,
      classification: this.classification,
      description: this.description,
    };
    this.entryService.updateEntry(entry).subscribe(() => {
      this.entryService.showMessage("Entry Edited");
      this.dialogRef.close();
    });
  }

  handleDate(dateString: string): Date {
    const dateArray = dateString.split("/");
    const convertedDate = new Date(dateArray[1] + "/" + dateArray[0] + "/" + dateArray[2]);
    return new Date(convertedDate);
  }
}
