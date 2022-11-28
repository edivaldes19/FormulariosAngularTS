import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)'
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
  noPuedeSerDextroyer(arg: FormControl): ValidationErrors | null {
    const valor: string = arg.value?.trim()
    if (valor.toLocaleLowerCase() === 'dextroyer') return { noDextroyer: true }
    return null
  }
  camposIguales(f1: string, f2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password1 = formGroup.get(f1)?.value
      const password2 = formGroup.get(f2)?.value
      if (password1 !== password2) {
        formGroup.get(f2)?.setErrors({ noIguales: true })
        return { noIguales: true }
      }
      formGroup.get(f2)?.setErrors(null)
      return null
    }
  }
}