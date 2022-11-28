import { Component } from '@angular/core'
@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent {
  public persona = {
    genero: 'M',
    notificaciones: true,
  }
  public terminosYCondiciones: boolean = false
}