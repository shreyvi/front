import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private dataService: DataService) {}


  hide = true;
  phoneNo = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);
  FirstName!: string;
  LastName!: string;
  Contact!: string;
  Department!: string;


  ngOnInit() {
    this.GetUserDetails();
  }
  
  GetUserDetails(){
    const id = '12';
    this.dataService.getLoggedInUserData(id).subscribe(
      (data) =>{
        this.FirstName = data.fetchresult[0].FirstName;
        this.LastName = data.fetchresult[0].LastName;
        this.Contact = data.fetchresult[0].Contact;
        this.Department = data.fetchresult[0].Department;
      },
      (error) =>{

      },
    );
  }
  update(){
    if(this.FirstName && this.LastName && this.Department && this.Contact){
      const data = {
        firstName: this.FirstName,
        lastName: this.LastName, 
        contact: this.Contact, 
        department: this.Department
      }
      const id = '12';
      this.dataService.UpdateLoggedInUserData(id, data).subscribe(
        () => {
          console.log('Update Successfully');
          this.GetUserDetails();
        },
        (error) =>{
          console.error("error While UPdateing User!", error)
        }
      )
    }
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }
  
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'Password is required';
    }
    return this.password.hasError('minlength')
      ? 'Password should be at least 8 characters long'
      : '';
  }

  getPhoneNoError() {
    if(this.phoneNo.hasError('required')){
      return 'Phone is required';
    } else if(this.phoneNo.hasError('minlength')){
      return 'Minimum Length Should be 10 Digit';
    } else if(this.phoneNo.hasError('maxlength')){
      return 'Maximum Length Should be 10 Digit';
    } else {
      return '';
    }
  }

}

