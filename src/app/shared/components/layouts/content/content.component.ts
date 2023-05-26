import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.scss'],
    standalone: true,
    imports: [NgIf]
})
export class ContentComponent {
	@Input() title: string = '';
	@Input() actionName?: string;
	@Output() action = new EventEmitter<void>();

	emitAction(): void {
		this.action.emit();
	}
}
