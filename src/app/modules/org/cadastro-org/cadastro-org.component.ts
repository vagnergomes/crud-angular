import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';


import { Org } from 'src/app/shared/model/org.model';
import { OrgService } from 'src/app/shared/services/org.service';

@Component({
  selector: 'app-org',
  templateUrl: './cadastro-org.component.html',
  styleUrls: ['./cadastro-org.component.scss']
})
export class CadastroOrgComponent implements OnInit {
  id: any;
  org: Org;

  color: ThemePalette = 'accent';
  disabled: boolean;
  constructor(
    public orgService: OrgService,
    public snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.org =  {} as Org,
    this.disabled = false;

    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id != null){
      this.orgService.getOrg(this.id).subscribe( res => {
        this.org = res
      })
    }
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
     if(this.id == null){
        this.orgService.criar(this.org).subscribe(res => {
        this.showMessage('Salvo com sucesso.');
        this.limparForm();
     }, (err) => {
      this.showMessage("Erro: " + err['status'] + " : " + err['message'], true);
    })
    }else{
      this.orgService.criar(this.org).subscribe(res => {
        this.showMessage('Editado com sucesso.');
        //this.limparForm();
      }, (err) => {
        this.showMessage("Erro: " + err['status'] + " : " + err['message'], true);
      })
    }
   }




}
