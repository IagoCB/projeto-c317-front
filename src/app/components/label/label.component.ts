import { Component, Input } from "@angular/core";

@Component({
  selector: "app-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"],
})
export class LabelComponent {
  @Input() public title: string = "";
  @Input() public subtitle: string = "";
}
