import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Country } from '../../model/country';
import { ShopFromService } from '../../services/shop-from.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  checkoutFormGroup!: FormGroup;

  totalPrice: number = 0;
  totalQuantity: number = 0;
  creditCardYears: number[] = [];
  creditCardMonths: number[] = [];
  countries: Country[] = [];

  constructor(
    public formBuilder: FormBuilder,
    public formService: ShopFromService
  ) {}

  ngOnInit() {
    this.checkoutFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: [''],
      }),
      shippingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      billingAddress: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameOnCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: [''],
      }),
    });

    let startMonth: number = new Date().getMonth() + 1;
    this.formService
      .getCreditCardMonth(startMonth)
      .subscribe((data) => (this.creditCardMonths = data));

    this.formService
      .getCreditCardYear()
      .subscribe((data) => (this.creditCardYears = data));

    this.formService
      .getCountries()
      .subscribe((data) => (this.countries = data));
  }

  handleMonthAndYear() {
    let startMonth: number;

    const currentYear: number = new Date().getFullYear();

    let selectedYear: number = Number(
      this.checkoutFormGroup.get('creditCard')!.value['expirationYear']
    );

    if (currentYear === selectedYear) {
      startMonth = new Date().getMonth() + 1;
    } else {
      startMonth = 1;
    }

    this.formService
      .getCreditCardMonth(startMonth)
      .subscribe((data) => (this.creditCardMonths = data));
  }

  copyShippingAddressToBillingAddres(event: Event) {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      this.checkoutFormGroup.controls['billingAddress'].setValue(
        this.checkoutFormGroup.controls['shippingAddress'].value
      );
    } else {
      this.checkoutFormGroup.controls['billingAddress'].reset();
    }
  }

  onSubmit() {
    console.log(this.checkoutFormGroup.get('shippingAddress')!.value);
  }
}
