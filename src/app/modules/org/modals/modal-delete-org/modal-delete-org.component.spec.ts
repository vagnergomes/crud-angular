import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteOrgComponent } from './modal-delete-org.component';

describe('ModalDeleteOrgComponent', () => {
  let component: ModalDeleteOrgComponent;
  let fixture: ComponentFixture<ModalDeleteOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
