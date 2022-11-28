import { Component } from '@angular/core'
interface Persona {
  nombre: string
  favoritos: Favorito[]
}
interface Favorito {
  id: number
  nombre: string
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent {
  public nuevoJuego: string = ''
  public persona: Persona = {
    nombre: 'Manuel',
    favoritos: [
      { id: 1, nombre: 'Super Mario Odyssey' },
      { id: 2, nombre: 'Super Mario Galaxy' },
      { id: 3, nombre: 'Super Mario Maker' },
      { id: 4, nombre: 'Super Mario Kart' },
      { id: 5, nombre: 'Super Mario Bross' }
    ]
  }
  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({ ...nuevoFavorito })
    this.nuevoJuego = ''
  }
  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }
  guardar() {
    console.log('Formulario confirmado...')
  }
}