import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from "../app/atoms/button/button.component";
import {ContadorComponent} from "../app/atoms/contador/contador.component";
import { MarcadorComponent } from "./molecules/marcador/marcador.component"
import { CambiosComponent } from "./atoms/cambios/cambios.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ContadorComponent, ButtonComponent, MarcadorComponent, CambiosComponent]
})
export class AppComponent {

    posicionDerecha = true; 
    
    rotar(){
      if (this.posicionDerecha) {
        this.posicionDerecha = false;
     } else {
      this.posicionDerecha = true;
     }
     console.log("valor de posicion", this.posicionDerecha)
    }
}
