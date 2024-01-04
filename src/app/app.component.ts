import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ButtonComponent} from "../app/atoms/button/button.component";
import {ContadorComponent} from "../app/atoms/contador/contador.component";
import { MarcadorComponent } from "./atoms/marcador/marcador.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ContadorComponent, ButtonComponent, MarcadorComponent]
})
export class AppComponent {

}
