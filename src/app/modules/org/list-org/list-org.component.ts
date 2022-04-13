import { ModalDetailsOrgComponent } from './../modals/modal-details-org/modal-details-org.component';
import { Component, OnInit } from '@angular/core';
import { catchError, empty, Observable } from 'rxjs';
import { Org } from 'src/app/shared/model/org.model';
import { OrgService } from 'src/app/shared/services/org.service';
import {MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-org',
  templateUrl: './list-org.component.html',
  styleUrls: ['./list-org.component.scss']
})
export class ListOrgComponent implements OnInit {
  org: Org;
  orgs: Observable<Org[]>;
  displayedColumns: string[]
   = ['name', 'description', 'type', 'n_register', 'city', 'province',
  'visible', 'active', 'details', 'editar', 'deletar'];

  constructor(
    public orgService: OrgService,
    public dialogDetails: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.org = {} as Org;
    this.orgs = this.orgService.getOrgs().pipe(
      catchError(error =>{
        this.showMessage("Erro ao buscar: " + error['message'], true);
        return empty();
      })
    );
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

  public openDetails(org: Org){
    this.orgService.getOrg(org.id).subscribe( res => {
      this.org = res
      const dialogRef = this.dialogDetails.open(ModalDetailsOrgComponent, {
        height: '400px'
      });
      dialogRef.componentInstance.org = this.org;
      dialogRef.afterClosed().subscribe(result => {
    });
    })


  }

}
