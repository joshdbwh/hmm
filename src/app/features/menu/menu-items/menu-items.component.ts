import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { MenusState, UserState } from 'src/app/core';
import { MenuItemCardComponent } from './menu-item-card/menu-item-card.component';
import { GridComponent } from '../../../shared/components/layouts/grid/grid.component';
import { ContentComponent } from '../../../shared/components/layouts/content/content.component';
import { NgIf, NgTemplateOutlet, NgFor, AsyncPipe } from '@angular/common';
import { ViewComponent } from '../../../shared/components/layouts/view/view.component';

@Component({
    selector: 'app-menu-items',
    templateUrl: './menu-items.component.html',
    styles: [
        `
			:host {
				width: 100%;
				height: 100%;
			}
		`
    ],
    standalone: true,
    imports: [ViewComponent, NgIf, ContentComponent, NgTemplateOutlet, GridComponent, NgFor, MenuItemCardComponent, AsyncPipe]
})
export class MenuItemsComponent {
	menuItems$ = this.store.select(MenusState.menuItems);
	isAdmin$ = this.store.select(UserState.isAdmin);

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private store: Store
	) {}

	addMenuItem(): void {
		this.router.navigate(['add'], { relativeTo: this.activatedRoute });
	}
}
