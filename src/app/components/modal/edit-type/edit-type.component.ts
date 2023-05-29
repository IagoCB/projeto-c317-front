import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Type } from "src/app/utils/model/type.model";
import { TypeService } from "src/app/utils/service/type.service";
@Component({
  selector: "app-edit-type",
  templateUrl: "./edit-type.component.html",
  styleUrls: ["./edit-type.component.scss"],
})
export class EditTypeComponent {
  public typeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditTypeComponent>,
    @Inject(MAT_DIALOG_DATA)
    public type: Type,
    private typeService: TypeService
  ) {}

  ngOnInit(): void {
    this.typeForm = this.fb.group({
      typeName: ["", [Validators.required]],
      typePortion: ["", [Validators.required]],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  edit(): void {
    this.typeService.updateType(this.type).subscribe((types) => {
      this.type = types;
    });
    this.dialogRef.close();
  }
}
