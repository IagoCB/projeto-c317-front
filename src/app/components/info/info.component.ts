import { Component, Input } from "@angular/core";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.scss"],
})
export class InfoComponent {
  @Input() public name: string = "";
  @Input() public content: string = "";
  @Input() public color: string[] = [""];

  setMyStyles() {
    let styles = {
      background: "linear-gradient(225.55deg, " + this.color[0] + " 0%, " + this.color[1] + " 100%)",
    };
    return styles;
  }
}
