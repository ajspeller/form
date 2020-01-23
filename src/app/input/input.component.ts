import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label = '';
  constructor() {}

  ngOnInit() {}

  showErrors(prop): boolean {
    const { dirty, touched, errors } = this.control;
    console.log(!!errors);
    return dirty && touched && !!errors;
  }
}
