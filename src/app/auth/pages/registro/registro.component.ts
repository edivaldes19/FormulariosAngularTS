import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from '../../../shared/validator/validator.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {
  public miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    nickname: ['', [Validators.required, this.validatorService.noPuedeSerDextroyer]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  });
  public get emailErrorMSG(): string {
    const errors = this.miFormulario.get('email')?.errors
    if (errors!['required']) return 'El correo electrónico es obligatorio.'
    else if (errors!['pattern']) return 'Formato de correo electrónico inválido.'
    else if (errors!['emailTomado']) return 'El correo electrónico ya pertenece a otro usuario.'
    return 'Ocurrio un error desconocido.'
  }
  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Manuel Valdes',
      email: 'test1@test.com',
      nickname: 'edi_valdes19',
      password: '132456',
      password2: '132456'
    })
  }
  campoNoValido(field: string): boolean {
    return (this.miFormulario.get(field)?.invalid && this.miFormulario.get(field)?.touched) ?? false
  }
  submitFormulario(): void {
    this.miFormulario.markAllAsTouched()
  }
}