import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {
  // public miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(0),
  //   existencias: new FormControl(10)
  // })
  public miFormulario: FormGroup = this.formBuilder.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]
  })
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Sin nombre',
      precio: 0,
      existencias: 0
    })
  }
  campoEsValido(field: string): boolean {
    return this.miFormulario.controls[field].errors! && this.miFormulario.controls[field].touched!
  }
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }
    this.miFormulario.reset()
  }
}