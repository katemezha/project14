import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { HttpPersonService } from 'src/app/shared/servises/http-person.service';
import { async } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  phone: number;
  type = 0;
  public mask = ['+','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];
  addForm: FormGroup
  @Output() addWorker = new EventEmitter<MyWorker>();
  @Output() addPerson = new EventEmitter<MyWorker>();
  constructor(private httpPersonservice: HttpPersonService) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      // type: new FormControl(null, [Validators.required])
    })
  }

  async onAddWorker() {

    this.addWorker.emit({
      name: this.name,
      surname: this.surname,
      phone: this.phone,
      type: this.type,
    });
    this.addWorker.emit(this.addForm.value);
  }
  
}
