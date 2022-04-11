import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Org } from 'src/app/shared/model/org.model';
@Injectable({
  providedIn: 'root'
})
export class OrgService {
  apiUrl = "http://localhost:9191/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public criar(org: Org){
    const _url = this.apiUrl+"org/add";
    return this.httpClient.post(_url, org);
  }

  public getOrgs(){
    const _url = this.apiUrl+"org/orgs";
    return this.httpClient.get<Org[]>(_url);
   }
}
