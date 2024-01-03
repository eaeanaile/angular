import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  
  @Input() contador: number = 0;
  @Output() darClick = new EventEmitter<number>();
  

  manejadorInternoClick(){
    this.darClick.emit();
  }

  SubirMarcador(){
    this.contador++;
  }

  BajarMarcador(){
    this.contador = this.contador - 1;
  }
}
