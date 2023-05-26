import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldModel } from '../form.model';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf]
})
export class FormFieldComponent {
	@Input() form!: FormFieldModel;
	@Input() parentFormGroup!: FormGroup;
}
