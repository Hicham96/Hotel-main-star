import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {
  public host:string="http://localhost:8080/hotel";


  constructor(private httpClient: HttpClient) { }


  public getPays(){
    return this.httpClient.get(this.host+"/room");
  }

}
