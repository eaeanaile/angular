import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from "./contador/contador.component";
import { ButtonComponent } from "./button/button.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ContadorComponent, ButtonComponent]
})
export class AppComponent {
  contador: number = 0;

  SubirMarcador(){
    this.contador++;
  }

  BajarMarcador(){
    this.contador = this.contador - 1;
  }
}
