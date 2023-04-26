import { Component, Input } from '@angular/core';

@Component({
  selector: "app-label-new",
  templateUrl: "./label-new.component.html",
  styleUrls: ["./label-new.component.scss"],
})
export class LabelNewComponent {
  @Input() public title = "teste";
  @Input() public subtitle = "isso é um teste";
}
