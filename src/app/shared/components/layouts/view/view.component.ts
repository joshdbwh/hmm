import { Component, Input } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { NgIf, NgTemplateOutlet } from '@angular/common';

export enum ViewStates {
  Valid = 'valid',
  NotFound = 'not_found',
}

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgTemplateOutlet,
        ContentComponent,
    ],
})
export class ViewComponent {
  @Input() viewStatus: ViewStates.Valid | ViewStates.NotFound =
    ViewStates.Valid;

  viewStates = ViewStates;
}
