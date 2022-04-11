import { Org } from 'src/app/shared/model/org.model';
import { ScheduleService } from '../../../shared/services/schedule.service';
import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/shared/model/schedule.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';
import {FormControl} from '@angular/forms';
import { OrgService } from 'src/app/shared/services/org.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './cadastro-schedule.component.html',
  styleUrls: ['./cadastro-schedule.component.scss']
})
export class CadastroScheduleComponent implements OnInit {

  orgs: any;
  schedule: Schedule;
  color: ThemePalette = 'accent';
  disabled: boolean;

  //selectForm = new FormControl();

  //toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
    public scheduleService: ScheduleService,
    public orgSevice: OrgService,
    public snackBar: MatSnackBar
  ) {
    this.schedule = {} as Schedule;
    this.disabled = false;

    this.orgs = this.orgSevice.getOrgs().subscribe(res => {
      this.orgs = res;
    })
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
    this.schedule = {} as Schedule;
  }

  criar(){
      this.scheduleService.criar(this.schedule).subscribe(res =>{
      this.showMessage("Sucesso");
      this.limparForm();
    })
  }


}
