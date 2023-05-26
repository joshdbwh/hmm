import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserState } from 'src/app/core';
import { ContentComponent } from '../../shared/components/layouts/content/content.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { ViewComponent } from '../../shared/components/layouts/view/view.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [
        `
			:host {
				width: 100%;
				height: 100%;
			}
		`
    ],
    standalone: true,
    imports: [ViewComponent, NgIf, ContentComponent, AsyncPipe]
})
export class HomeComponent {
	isAuthenticated$ = this.store.select(UserState.isLoggedIn);
	user$ = this.store.select(UserState.user);

	constructor(private store: Store) {}
}
