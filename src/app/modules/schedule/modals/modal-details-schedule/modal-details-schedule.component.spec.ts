import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailsScheduleComponent } from './modal-details-schedule.component';

describe('ModalDetailsScheduleComponent', () => {
  let component: ModalDetailsScheduleComponent;
  let fixture: ComponentFixture<ModalDetailsScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailsScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
