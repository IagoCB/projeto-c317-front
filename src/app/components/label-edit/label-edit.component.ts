import { Component, Input } from '@angular/core';

@Component({
  selector: "app-label-edit",
  templateUrl: "./label-edit.component.html",
  styleUrls: ["./label-edit.component.scss"],
})
export class LabelEditComponent {
  @Input() public title = "teste";
  @Input() public subtitle = "isso é um teste";
}
