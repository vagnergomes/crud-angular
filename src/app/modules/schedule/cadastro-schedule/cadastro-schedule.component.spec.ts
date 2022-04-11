import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroScheduleComponent } from './cadastro-schedule.component';

describe('CadastroScheduleComponent', () => {
  let component: CadastroScheduleComponent;
  let fixture: ComponentFixture<CadastroScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
