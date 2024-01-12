import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cambios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cambios.component.html',
  styleUrl: './cambios.component.css'
})
export class CambiosComponent {
 
  posicionDerecha = true; 
  @Output() cambiar = new EventEmitter<boolean>()

    
  rotar(){
    if (this.posicionDerecha) {
      this.posicionDerecha = false;
   } else {
    this.posicionDerecha = true;
   }
   this.cambiar.emit(this.posicionDerecha);
  }

}
