import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private formBuilder:FormBuilder){

  }
  submitted=false;
  title = 'forms-demo';

  registerForm:FormGroup;

  ngOnInit(){
    this.registerForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required,Validators.email],
      password:["",Validators.required,Validators.maxLength(8)]
    })
  }

  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return;
    }
    else{
      console.log("Submitted")
      alert("Form submitted for Approval")
    }
  }
}
