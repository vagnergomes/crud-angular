import { MatDialog } from '@angular/material/dialog';
import { ScheduleService } from './../../../shared/services/schedule.service';
import { catchError, empty, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/shared/model/schedule.model';
import { ModalDetailsScheduleComponent } from '../modals/modal-details-schedule/modal-details-schedule.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalDeleteScheduleComponent } from '../modals/modal-delete-schedule/modal-delete-schedule.component';


@Component({
  selector: 'app-list',
  templateUrl: './list-schedule.component.html',
  styleUrls: ['./list-schedule.component.scss']
})
export class ListScheduleComponent implements OnInit {

  schedule: Schedule;
  schedules: Observable<Schedule[]>;
  displayedColumns: string[]
  = ['name', 'description', 'active', 'org_name', 'details', 'editar', 'deletar'];

  constructor(
    private scheduleService: ScheduleService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.schedule = {} as Schedule;
    this.schedules = this.scheduleService.getSchedules().pipe(
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

  public openDetails(schedule: Schedule){
    this.scheduleService.getSchedule(schedule.id).subscribe(res =>{
      this.schedule = res
      const dialogRef = this.dialog.open(ModalDetailsScheduleComponent, {
      height: '400px'
    })
    dialogRef.componentInstance.schedule = this.schedule;
    dialogRef.afterClosed().subscribe(result => {
    });
  });
  }

  public openDelete(schedule: Schedule){
    const dialogRef = this.dialog.open(ModalDeleteScheduleComponent,{
      height: '200px'
    })
    dialogRef.componentInstance.schedule = schedule
    dialogRef.afterClosed().subscribe(result =>{

    });
  }
}
