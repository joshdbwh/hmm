import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserState } from 'src/app/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ContentComponent } from '../../shared/components/layouts/content/content.component';
import { NgIf, AsyncPipe } from '@angular/common';
import { ViewComponent } from '../../shared/components/layouts/view/view.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: true,
    imports: [ViewComponent, NgIf, ContentComponent, ButtonComponent, AsyncPipe]
})
export class ProfileComponent {
	user$ = this.store.select(UserState.user);

	constructor(private store: Store) {}
}
