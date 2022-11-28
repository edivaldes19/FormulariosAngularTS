import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Persona {
  genero: string,
  notificaciones: boolean
}
@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent implements OnInit {
  public miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  })
  public persona: Persona = {
    genero: 'F',
    notificaciones: true
  }
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.miFormulario.reset({ ...this.persona, terminos: false })
    this.miFormulario.valueChanges.subscribe(({ genero, notificaciones }) => this.persona = { genero, notificaciones })
  }
  guardar(): void {
    const formValue = { ...this.miFormulario.value }
    delete formValue.terminos
    this.persona = formValue
  }
}