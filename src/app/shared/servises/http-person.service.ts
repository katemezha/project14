import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyWorker } from '../worker.model';

@Injectable({
  providedIn: 'root'
})
export class HttpPersonService {
  routeApi = 'http://localhost:3000/persons'
  constructor(private http: HttpClient) 
  { 
  //   this.http.get(this.routeApi).subscribe(data => {
  //   console.log(data);
  // });
  }
  getPerson(): Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }

  postPerson(data: MyWorker){
    return this.http.post(this.routeApi, data).toPromise();
  }

 
}
