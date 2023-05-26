import { Component } from '@angular/core';
import { ViewStates } from 'src/app/shared';
import { ViewComponent } from '../../shared/components/layouts/view/view.component';

@Component({
    selector: 'app-not-found',
    templateUrl: './notFound.component.html',
    styles: [
        `
			:host {
				width: 100%;
				height: 100%;
			}
		`
    ],
    standalone: true,
    imports: [ViewComponent]
})
export class NotFoundComponent {
	viewStates = ViewStates;
}
