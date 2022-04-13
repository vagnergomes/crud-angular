import { Org } from 'src/app/shared/model/org.model';
import { ScheduleService } from '../../../shared/services/schedule.service';
import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/shared/model/schedule.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';
import {FormControl} from '@angular/forms';
import { OrgService } from 'src/app/shared/services/org.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment'




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
  dataForm: any;
  horaForm: any;
  picker: any;
  minDate = new Date(2022, 4, 12);
  maxDate = new Date(2022, 4, 15);



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

  public montarData(){

  }


  criar(){
    let newDate: moment.Moment = moment.utc(this.dataForm).local();
    this.dataForm = newDate.format("YYYY-MM-DD") + "T" ;
    this.horaForm = newDate.format("HH:mm:ss")
    this.schedule.data = this.dataForm+this.horaForm
    console.log("---DataForm: " + this.schedule.data)
    if(this.id == null){
      this.scheduleService.criar(this.schedule).subscribe((res) => {
        this.showMessage("Salvo com sucesso.", false);
        this.limparForm();
        }, (err) => {
          this.showMessage("Erro: " + err['status'] + ":" + err['message'], true);
        });
      }
      else{
        this.scheduleService.criar(this.schedule).subscribe(res => {
          this.showMessage("Editado com sucesso", false);
        }, (err) => {
          this.showMessage("Erro: " + err['status'] + " : " + err['message'], true);
        });
      }
  }




}
