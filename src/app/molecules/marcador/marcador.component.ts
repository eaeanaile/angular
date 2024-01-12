import { Component, EventEmitter, Input, Output} from '@angular/core';
import {ButtonComponent} from "../../atoms/button/button.component";
import {ContadorComponent} from "../../atoms/contador/contador.component";
import { CambiosComponent } from '../../atoms/cambios/cambios.component';


@Component({
    selector: 'app-marcador',
    standalone: true,
    templateUrl: './marcador.component.html',
    styleUrl: './marcador.component.css',
    imports: [ButtonComponent, ContadorComponent, CambiosComponent]
})

export class MarcadorComponent {
  @Input() contador: number = 0;
  @Input() bloqueadorMarcador: boolean = true;

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
