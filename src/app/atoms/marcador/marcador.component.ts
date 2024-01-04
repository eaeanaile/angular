import { Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonComponent} from "../button/button.component";
import {ContadorComponent} from "../contador/contador.component";

@Component({
    selector: 'app-marcador',
    standalone: true,
    templateUrl: './marcador.component.html',
    styleUrl: './marcador.component.css',
    imports: [ButtonComponent, ContadorComponent]
})
export class MarcadorComponent {
  @Input() contador: number = 0;

  SubirMarcador(){
    if(this.contador < 12){
      this.contador++;
    }
  }

  BajarMarcador(){
    if(this.contador > 0){
      this.contador--;
    }
  }
}
