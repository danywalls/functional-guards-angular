import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

export interface PurchaseFormModel extends FormGroup<{
  name: FormControl<string>;
  email: FormControl<string>;
  amount: FormControl<number>;
  cookies: FormControl<boolean | null>;
}> {
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  PURCHASE_TAX = 0.5;
  purchaseForm!: PurchaseFormModel;

  constructor(private fb: FormBuilder) {
    this.purchaseForm = this.fb.group(
      {
        name: this.fb.nonNullable.control('hello'),
        email: this.fb.nonNullable.control('demo@demo.com'),
        amount: this.fb.nonNullable.control(0),
        cookies: this.fb.control(true)
      }
    )
  }

  checkout() {
    const priceWithTax = this.purchaseForm.controls.amount.value + this.PURCHASE_TAX;
    this.purchaseForm.patchValue({
      amount: priceWithTax
    })
  }

  cancel() {

    this.purchaseForm.reset();
    console.log(this.purchaseForm.controls.amount)
  }
}
