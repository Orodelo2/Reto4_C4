import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  passupdate: FormGroup = new FormGroup({
    email: new FormControl('')
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.passupdate = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
    });
  }

  get f (): {[key:string]: AbstractControl}{
    return this.passupdate.controls;
  }

  onSubmit(): void{
    this.submitted = true;
    if(this.passupdate.invalid){
      return;
    }
    console.log(JSON.stringify(this.passupdate.value, null, 2));
  }

}
