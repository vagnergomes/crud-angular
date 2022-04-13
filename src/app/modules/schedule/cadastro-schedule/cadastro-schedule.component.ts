import { Org } from 'src/app/shared/model/org.model';
import { ScheduleService } from '../../../shared/services/schedule.service';
import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/shared/model/schedule.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';
import {FormControl} from '@angular/forms';
import { OrgService } from 'src/app/shared/services/org.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './cadastro-schedule.component.html',
  styleUrls: ['./cadastro-schedule.component.scss']
})
export class CadastroScheduleComponent implements OnInit {
  id: any;
  orgs: any;
  schedule: any;
  color: ThemePalette = 'accent';
  disabled: boolean;

  //selectForm = new FormControl();
  //toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(
    public scheduleService: ScheduleService,
    public orgSevice: OrgService,
    public snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.schedule = {} as Schedule;
    this.disabled = false;

    this.orgs = this.orgSevice.getOrgs().subscribe(res => {
    this.orgs = res;
    });

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != null){
      this.schedule = this.scheduleService.getSchedule(this.id).subscribe(res =>{
        this.schedule = res
      })
    }
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

  limparForm(){
    this.schedule = {} as Schedule;
  }

  criar(){
    if(this.id == null){
      this.scheduleService.criar(this.schedule).subscribe((res) => {
        this.showMessage("Sucesso", false);
        this.limparForm();
        }, (err) => {
          this.showMessage("Erro: " + err['message'], true);
        });
      }
      else{
        this.scheduleService.criar(this.schedule).subscribe(res => {
          this.showMessage("Editado com sucesso", false);
        }, (err) => {
          this.showMessage("Erro: " + err['message'], true);
        });
      }
  }




}
