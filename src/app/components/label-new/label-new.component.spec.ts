import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelNewComponent } from './label-new.component';

describe('LabelNewComponent', () => {
  let component: LabelNewComponent;
  let fixture: ComponentFixture<LabelNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
