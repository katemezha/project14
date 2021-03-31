import { Component } from '@angular/core';
import { EditWorkerComponent } from '../../src/app/ui/edit-worker/edit-worker.component';
import {
  MyWorker,
  MyWorkersDatabase,
  MyWorkerType,
} from './shared/worker.model';
import { HttpClient } from '@angular/common/http';
import { HttpPersonService } from './shared/servises/http-person.service';
import { __await } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  routeApi = 'http://localhost:3000/persons'

  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;
  constructor(private http: HttpClient, private httpPersonservice: HttpPersonService) { this.http.get(this.routeApi).subscribe(data => {
    console.log(data);
  });
  }
  ngOnInit() {
    this.getData()
  }
  

  async getData(){
    try {
      this.workers = await this.httpPersonservice.getPerson();
    } catch (error) {
      console.log(error)
    }
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  async onAddWorker( event: MyWorker) {
    
    let id =
      this.workers.length > 0
        ? this.workers[this.workers.length - 1].id + 1
        : 0;
    event.id = id;
    this.workers.push(event);
    try {
     
     await this.httpPersonservice.postPerson(event)
   } catch (error) {
     console.log(error)
   }
  }
}
