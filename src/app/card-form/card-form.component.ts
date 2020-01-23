import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(5),
      Validators.minLength(3)
      // Validators.pattern(/\s/)
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(16)
    ]),
    expDate: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.maxLength(3),
      Validators.minLength(3)
    ])
  });

  constructor() {
    console.log(this.cardForm.get('name'));
  }

  ngOnInit() {}

  onSubmit() {
    console.log('form submitted');
  }

  onResetClick() {
    this.cardForm.reset();
  }
}