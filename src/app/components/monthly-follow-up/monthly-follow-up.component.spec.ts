import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyFollowUpComponent } from './monthly-follow-up.component';

describe('MonthlyFollowUpComponent', () => {
  let component: MonthlyFollowUpComponent;
  let fixture: ComponentFixture<MonthlyFollowUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyFollowUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
