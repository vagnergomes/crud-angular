import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';


import { Org } from 'src/app/shared/model/org.model';
import { OrgService } from 'src/app/shared/services/org.service';

@Component({
  selector: 'app-org',
  templateUrl: './cadastro-org.component.html',
  styleUrls: ['./cadastro-org.component.scss']
})
export class CadastroOrgComponent implements OnInit {
  org: Org;

  color: ThemePalette = 'accent';
  disabled: boolean;
  constructor(
    public orgSevice: OrgService,
    public snackBar: MatSnackBar
  ) {
    this.org =  {} as Org,
    this.disabled = false;
   }

  ngOnInit(): void {
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  limparForm(){
    this.org = {} as Org;
  }

   public criar(){
     this.orgSevice.criar(this.org).subscribe(res => {
      this.showMessage('Sucesso');
      this.limparForm();
     })
   }




}
