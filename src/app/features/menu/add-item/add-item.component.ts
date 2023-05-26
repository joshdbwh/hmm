import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BaseMenuItem, Menus } from 'src/app/core';
import { Store } from '@ngxs/store';
import { MenuItemFormComponent } from '../../../shared/components/forms/menu-item-form/menu-item-form.component';
import { ContentComponent } from '../../../shared/components/layouts/content/content.component';
import { ViewComponent } from '../../../shared/components/layouts/view/view.component';

const MenuItemPlaceholder: BaseMenuItem = {
	name: '',
	price: 0,
	tagline: '',
	description: '',
	image: '',
	calories: 0,
	category: ''
};

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styles: [
        `
			:host {
				width: 100%;
				height: 100%;
			}
		`
    ],
    standalone: true,
    imports: [ViewComponent, ContentComponent, MenuItemFormComponent]
})
export class AddItemComponent {
	menuItem = MenuItemPlaceholder;
	constructor(private location: Location, private store: Store) {}

	submit(menu: BaseMenuItem): void {
		this.store.dispatch(
			new Menus.AddMenuItemFormSubmitted({
				menuItem: menu
			})
		);
	}

	cancel(): void {
		this.location.back();
	}
}
