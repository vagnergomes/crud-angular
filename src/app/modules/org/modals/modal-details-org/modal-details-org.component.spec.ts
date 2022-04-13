import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailsOrgComponent } from './modal-details-org.component';

describe('ModalDetailsOrgComponent', () => {
  let component: ModalDetailsOrgComponent;
  let fixture: ComponentFixture<ModalDetailsOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailsOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailsOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
