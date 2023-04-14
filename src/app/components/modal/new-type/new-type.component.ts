import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-new-type",
  templateUrl: "./new-type.component.html",
  styleUrls: ["./new-type.component.scss"],
})
export class NewTypeComponent {
  public typeForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<NewTypeComponent>) {}

  ngOnInit(): void {
    this.typeForm = this.fb.group({
      typeName: ["", [Validators.required]],
      typePortion: ["", [Validators.required]],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
