import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBudgetMainComponent } from './chart-budget-main.component';

describe('ChartBudgetMainComponent', () => {
  let component: ChartBudgetMainComponent;
  let fixture: ComponentFixture<ChartBudgetMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartBudgetMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartBudgetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
