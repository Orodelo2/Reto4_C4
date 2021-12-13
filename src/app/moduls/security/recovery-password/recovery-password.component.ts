import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {
  updateP: FormGroup = new FormGroup({
    email:new FormControl('')
  });

  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.updateP = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]]
    });
  }

  get f (): {[key:string]: AbstractControl}{
    return this.updateP.controls;
  }

  onSubmit(): void{
    this.submitted = true;
    if(this.updateP.invalid){
      return;
    }
    console.log(JSON.stringify(this.updateP.value, null, 2));
  }

}
