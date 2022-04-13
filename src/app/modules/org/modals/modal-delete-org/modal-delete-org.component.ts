import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { OrgService } from 'src/app/shared/services/org.service';
import { Org } from 'src/app/shared/model/org.model';

@Component({
  selector: 'app-modal-delete-org',
  templateUrl: './modal-delete-org.component.html',
  styleUrls: ['./modal-delete-org.component.scss']
})
export class ModalDeleteOrgComponent implements OnInit {

  org: Org
  constructor(
    private orgService: OrgService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.org = {} as Org
  }

  ngOnInit(): void {
  }

  showMessage(msg: any, isError: boolean): void {
    this.snackBar.open(msg, "X", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  public deletar(id: number){
    this.orgService.delete(id).subscribe(res =>{
      this.showMessage("Deletado com sucesso.", false);
    }, (err) => {
      if(err['status'] === 200)
        this.showMessage("Deletado com sucesso.", false);
      else
        this.showMessage("Erro ao deletar: " + err[status] + " : " + err['message'], true);
    })
  }



}
