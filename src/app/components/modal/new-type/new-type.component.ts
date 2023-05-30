import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { Type } from "src/app/utils/model/type.model";
import { TypeService } from "src/app/utils/service/type.service";

@Component({
  selector: "app-new-type",
  templateUrl: "./new-type.component.html",
  styleUrls: ["./new-type.component.scss"],
})
export class NewTypeComponent {
  public typeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<NewTypeComponent>,
    private typeService: TypeService
  ) {}

  ngOnInit(): void {
    this.typeForm = this.fb.group({
      name: ["", [Validators.required]],
      portion: ["", [Validators.required]],
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.typeService.createType(this.typeForm.value).subscribe(() => {
      this.typeService.showMessage("Type Criado");
      this.dialogRef.close();
    });
  }
}
