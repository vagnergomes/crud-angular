import { Observable, subscribeOn } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Schedule } from 'src/app/shared/model/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  a: any;
  apiUrl = "http://localhost:9191/schedule/"

  httpOptions = {
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
    this.a = ""
   }


  public criar(schedule: Schedule){
    const _url = this.apiUrl+"add";
    return this.httpClient.post(_url, schedule);
  }

  public getSchedules() {
    const _url = this.apiUrl+"schedules";
    const r = this.httpClient.get<Schedule[]>(_url);
    //console.log("--Erro: "+r)

    return r;
  }

  public getSchedule(id: number): Observable<Schedule>{
    const _url = this.apiUrl+"schedule/"+id;
    return this.httpClient.get<Schedule>(_url);
  }

  update(id: number, request: Schedule){
    const _url = this.apiUrl+"update/";
    return this.httpClient.put<Schedule>(_url, request);
  }

  delete(id: number){
    const _url = this.apiUrl+"delete/"+id;
    return this.httpClient.delete(_url);
  }

}

