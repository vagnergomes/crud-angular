import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteScheduleComponent } from './modal-delete-schedule.component';

describe('ModalDeleteScheduleComponent', () => {
  let component: ModalDeleteScheduleComponent;
  let fixture: ComponentFixture<ModalDeleteScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
