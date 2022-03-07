import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-section-a',
  templateUrl: './section-a.component.html',
  styleUrls: ['./section-a.component.css']
})
export class SectionAComponent implements OnInit {

  Form1:FormGroup;

  f1 = [];

  constructor() { }

  ngOnInit(): void {
      this.Form1 = new FormGroup({
        'id':new FormControl(null),
        'nameandAddress': new FormControl(null),
        'regdNo':new FormControl(null),
        'patientname': new FormControl(null),
        'age': new FormControl(null),
        'childrenGroup':new FormGroup({
          'noOfChildren':new FormControl(null),
          'livingSons':new FormControl(null),
          'livingDaughters': new FormControl(null),
        }),
        'otherName':new FormControl(null),
        'postalAddress':new FormControl(null),
        'referral':new FormGroup({
          'referredBy':new FormControl(null),
          'selfReferral':new FormControl(null),
        }),
        'lastDate':new FormControl(null),
      })
  }

  onClickReset(){
    this.Form1.reset();
  }

  getNewId(){
    const oldRecords = localStorage.getItem('aaa');
    if (oldRecords !== null){
      const todoList = JSON.parse(oldRecords);
      return todoList.length+1;
    }else{
      return 1;
    }
  }

  onAdd(){
    const latsetId = this.getNewId();
    this.Form1.value.id  = latsetId;
    const oldRecords = localStorage.getItem('aaa');
    if (this.Form1.valid){
      confirm("Submitted Successfully!");
      console.log(this.Form1.value);
      localStorage.setItem('id',JSON.stringify(latsetId));
      if (oldRecords !== null){
        const formList = JSON.parse(oldRecords);
        formList.push(this.Form1.value);
        localStorage.setItem('aaa',JSON.stringify(formList));
      }else{
        const formArr = [];
        formArr.push(this.Form1.value);
        localStorage.setItem('aaa',JSON.stringify(formArr));
      }
    }
    else{
     confirm("Please enter the required fields!");
     console.log(this.Form1.value);

    }
  }

}
