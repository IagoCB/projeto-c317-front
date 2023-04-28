import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LabelDeleteComponent } from "./label-delete.component";

describe("LabelDeleteComponent", () => {
  let component: LabelDeleteComponent;
  let fixture: ComponentFixture<LabelDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LabelDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LabelDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
