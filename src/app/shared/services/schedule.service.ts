import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Schedule } from '../model/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  apiUrl = "http://localhost:9191/"

  httpOptions = {
    headers: new HttpHeaders({
      'content-type':'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }


  criar(schedule: Schedule){
    const _url = this.apiUrl+"schedule/add";
    return this.httpClient.post(_url, schedule);
  }

}

