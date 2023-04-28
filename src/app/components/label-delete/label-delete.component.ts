import { Component, Input } from "@angular/core";

@Component({
  selector: "app-label-delete",
  templateUrl: "./label-delete.component.html",
  styleUrls: ["./label-delete.component.scss"],
})
export class LabelDeleteComponent {
  @Input() public title = "teste";
  @Input() public subtitle = "isso é um teste";
}
