import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Org } from 'src/app/shared/model/org.model';
@Injectable({
  providedIn: 'root'
})
export class OrgService {
  apiUrl = "http://localhost:9191/org/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
   }

  public criar(org: Org){
    const _url = this.apiUrl+"add";
    return this.httpClient.post(_url, org);
  }

  public getOrgs(){
    const _url = this.apiUrl+"orgs";
    return this.httpClient.get<Org[]>(_url);
   }

   public getOrg(id: number): Observable<Org>{
     const _url = this.apiUrl+"org/"+id;
     return this.httpClient.get<Org>(_url);
   }

   update(id: number, request: Org){
    const _url = this.apiUrl+"update/";
    return this.httpClient.put<Org>(_url, request);
  }

  delete(id: number){
    const _url = this.apiUrl+"delete/"+id;
    return this.httpClient.delete(_url);
  }
}
