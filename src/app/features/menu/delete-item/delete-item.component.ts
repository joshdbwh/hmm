import { Component } from '@angular/core';
import { Location, NgIf, AsyncPipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Menus, MenusState } from 'src/app/core';
import { Store } from '@ngxs/store';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ContentComponent } from '../../../shared/components/layouts/content/content.component';
import { ViewComponent } from '../../../shared/components/layouts/view/view.component';

@Component({
    selector: 'app-delete-item',
    templateUrl: './delete-item.component.html',
    styleUrls: ['./delete-item.component.scss'],
    standalone: true,
    imports: [ViewComponent, ContentComponent, NgIf, ButtonComponent, AsyncPipe]
})
export class DeleteItemComponent {
	menuItemId$ = this.activatedRoute.params.pipe(map((params) => params.id));

	menuItem$ = this.menuItemId$.pipe(
		switchMap((id) => this.store.select(MenusState.menuItem(id)))
	);

	constructor(
		private activatedRoute: ActivatedRoute,
		private location: Location,
		private router: Router,
		private store: Store
	) {}

	deleteMenuItem(id: string): void {
		this.store.dispatch(
			new Menus.DeleteMenuItemInitiated({
				menuId: id
			})
		);
	}

	cancel(): void {
		this.back();
	}

	back(): void {
		this.location.back();
	}

	navigateHome(): void {
		this.router.navigate(['/menu']);
	}
}
