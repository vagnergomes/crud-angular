import { ScheduleService } from './../../../../shared/services/schedule.service';
import { Schedule } from './../../../../shared/model/schedule.model';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-delete-schedule',
  templateUrl: './modal-delete-schedule.component.html',
  styleUrls: ['./modal-delete-schedule.component.scss']
})
export class ModalDeleteScheduleComponent implements OnInit {

  schedule: Schedule
  constructor(
    private scheduleService: ScheduleService,
    private snackBar: MatSnackBar) {
    this.schedule = {} as Schedule
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
    this.scheduleService.delete(id).subscribe(res => {
      this.showMessage("Deletado.", false);

    }, (err) =>{
      this.showMessage("Erro ao deletar: " + err['message'], true);
    });
  }

}
