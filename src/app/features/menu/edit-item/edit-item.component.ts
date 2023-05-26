import { Component } from '@angular/core';
import { Location, NgIf, AsyncPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { BaseMenuItem, Menus, MenusState } from 'src/app/core';
import { Store } from '@ngxs/store';
import { MenuItemFormComponent } from '../../../shared/components/forms/menu-item-form/menu-item-form.component';
import { ContentComponent } from '../../../shared/components/layouts/content/content.component';
import { ViewComponent } from '../../../shared/components/layouts/view/view.component';

@Component({
    selector: 'app-edit-item',
    templateUrl: './edit-item.component.html',
    styles: [
        `
			:host {
				width: 100%;
				height: 100%;
			}
		`
    ],
    standalone: true,
    imports: [ViewComponent, ContentComponent, NgIf, MenuItemFormComponent, AsyncPipe]
})
export class EditItemComponent {
	menuItemId$ = this.activatedRoute.params.pipe(map((params) => params.id));
	menuItem$ = this.menuItemId$.pipe(
		tap((id) => (this.id = id)),
		switchMap((id) =>
			this.store.select(MenusState.menuItem(id)).pipe(
				map((menuItem) => {
					return <BaseMenuItem>{
						...menuItem,
						price:
							menuItem && menuItem.price > 0
								? (menuItem.price / 100).toFixed(2)
								: 0
					};
				})
			)
		)
	);

	private id: number | undefined;

	constructor(
		private activatedRoute: ActivatedRoute,
		private location: Location,
		private store: Store
	) {}

	cancel(): void {
		this.location.back();
	}

	submit(menu: BaseMenuItem): void {
		if (!this.id) {
			return;
		}
		this.store.dispatch(
			new Menus.EditMenuItemFormSubmitted({
				menuItem: {
					...menu,
					id: this.id.toString()
				}
			})
		);
	}
}
