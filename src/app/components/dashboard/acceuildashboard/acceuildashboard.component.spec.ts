import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuildashboardComponent } from './acceuildashboard.component';

describe('AcceuildashboardComponent', () => {
  let component: AcceuildashboardComponent;
  let fixture: ComponentFixture<AcceuildashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuildashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuildashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
