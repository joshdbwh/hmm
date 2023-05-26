import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styles: [
        `
      :host {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
      }
    `,
    ],
    standalone: true,
    imports: [RouterOutlet],
})
export class MenuComponent {}
