import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/auth/interfaces/usuario.interface';
import { map, delay } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {
  constructor(private http: HttpClient) { }
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${control.value}`).pipe(map(users => users.length === 0 ? null : { emailTomado: true }))
  }
}