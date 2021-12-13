import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
  formlogin: FormGroup = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formlogin = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]]
    });
  }

  get f(): {[key:string]: AbstractControl}{
    return this.formlogin.controls;
  }

  onSubmit(): void{
    this.submitted = true;
    if(this.formlogin.invalid){
      return;
    }
    console.log(JSON.stringify(this.formlogin.value, null, 2));
  }

}
