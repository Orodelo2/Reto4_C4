import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl:'./form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    acceptTerms: new FormControl(false)
  })

  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
     firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
     lastName: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
     confirmpassword: ['', Validators.required],
     acceptTerms: [false, Validators.requiredTrue]
    })
  }
  get f():{[key : string]:AbstractControl}{
    return this.form.controls;
  }

  //Botón de aceptar el envío del formulario
  onSubmit():void{
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  //Botón para eliminar el envío del formulario
  onReset(): void{
    this.submitted = false;
    this.form.reset();
  }

}
