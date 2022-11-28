import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {
  public miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Super Mario Odyssey', Validators.required],
      ['Super Mario Party', Validators.required],
      ['Super Smash Bross', Validators.required]
    ], Validators.required)
  })
  public nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required)
  public get favoritosArr(): FormArray {
    return this.miFormulario.get('favoritos') as FormArray
  }
  constructor(private formBuilder: FormBuilder) { }
  campoEsValido(field: string): boolean {
    return this.miFormulario.controls[field].errors! && this.miFormulario.controls[field].touched!
  }
  agregarFavorito(): void {
    if (this.nuevoFavorito.invalid) return
    this.favoritosArr.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset()
  }
  borrar(index: number): void {
    this.favoritosArr.removeAt(index)
  }
  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched()
      return
    }
  }
}