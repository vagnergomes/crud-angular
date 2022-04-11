import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroOrgComponent } from './cadastro-org.component';

describe('OrgComponent', () => {
  let component: CadastroOrgComponent;
  let fixture: ComponentFixture<CadastroOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
