import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';
import * as $ from '../../../../node_modules/jquery/dist/jquery.min.js';
import { MyWorkerType, MyWorker, MyWorkersDatabase } from 'src/app/shared/worker.model';
import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-worker',
  templateUrl: './edit-worker.component.html',
  styleUrls: ['./edit-worker.component.css']
})
export class EditWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  workers: MyWorker[] = MyWorkersDatabase;
  personForm: FormGroup;
  disabledForms = false;
  public mask = ['+','(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/,'-', /\d/, /\d/];

  @Input() comeName;
  @Input() comeSurname;
  @Input() comeId;
  @Input() comePhone;

  name: string;
  surname: string;
  phone: number;
  id:number;

  constructor() {
  }

  ngOnInit(): void {
    this.personForm = new FormGroup({
      firstName: new FormControl({value: this.name, disabled: this.disabledForms}, [Validators.required]),
      lastName: new FormControl({value: this.surname, disabled: this.disabledForms}, [Validators.required]),
      phone: new FormControl({value: this.phone, disabled: this.disabledForms}, [Validators.maxLength(11),
        Validators.minLength(11),]),
      
    })

  }

  onEditWorker() {
    console.log(this.comeId+"  "+this.comeName+" "+this.comeSurname+" "+this.comePhone) // значения взятые с род блока 
    this.id = this.comeId;
    this.name = this.comeName
    this.surname = this.comeSurname;
    this.phone = this.comePhone;
    console.log(this.id + " " + this.name + " " + this.surname+" "+this.phone);
  }
  saveChanges(){
    for(let i = 0; i < this.workers.length; i++){
      if(this.workers[i].id == this.id){
        if((this.name !== '')&&(this.surname !== '') ){
          this.workers[i].name = this.name;
          this.workers[i].surname = this.surname;
          this.workers[i].phone = this.phone;
          console.log(this.name);
          break;
        }
        console.log('some input is empty')
      }
    }
  }

}

  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
  })

