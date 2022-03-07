import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css']
})
export class FormListComponent implements OnInit {
  formList:any = localStorage.getItem('aaa');

  resFormList = JSON.parse(this.formList);

  constructor() { }

  ngOnInit(): void {
  }



}
