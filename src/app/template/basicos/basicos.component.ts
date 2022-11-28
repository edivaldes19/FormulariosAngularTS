import { Component, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm
  public initForm = {
    producto: 'RTX 4080ti',
    precio: 10,
    existencias: 10
  }
  nombreValido(): boolean {
    return this.miFormulario?.form.controls['producto']?.invalid && this.miFormulario?.form.controls['producto']?.touched
  }
  precioValido(): boolean {
    return this.miFormulario?.form.controls['precio']?.touched && this.miFormulario?.form.controls['precio']?.value < 0
  }
  guardar() {
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    })
  }
}