import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class ButtonComponent {
	@Input() label = '';
	@Input() variant: 'text' | 'solid' | 'outline' = 'solid';
	@Input() customClass = '';
	@Input() enabled = true;

	@Output() buttonClick = new EventEmitter<void>();

	onButtonClick(): void {
		this.buttonClick.emit();
	}
}
