import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { EditTypeComponent } from "../edit-type/edit-type.component";
import { Type } from "src/app/utils/model/type.model";
import { TypeService } from "src/app/utils/service/type.service";

@Component({
  selector: "app-delete-type",
  templateUrl: "./delete-type.component.html",
  styleUrls: ["./delete-type.component.scss"],
})
export class DeleteTypeComponent {
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
    this.typeForm.controls["typeName"].disable();
    this.typeForm.controls["typePortion"].disable();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  delete(): void {
    console.log(this.type);
    this.typeService.deleteType(this.type).subscribe();
    this.dialogRef.close();
  }
}
