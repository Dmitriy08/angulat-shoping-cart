import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  loginForm: FormGroup;
  testField: FormControl;

  constructor() {

    this.testField = new FormControl();

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required, this.customValid]),
    });


  }

  ngOnInit(): void {
  }

  customValid(control: FormControl) {
    console.log(control.value);
    if (+control.value.length < 25) {
      return {custom: {message: 'asdfasfdasdfasfdafsd'}};
    }
    return null;
  }

  customValidWithParams(test1: any) {

    return (control: FormControl) => {
      if (+control.value > 25) {
        return {custom: {message: 'asdfasfdasdfasfdafsd'}};
      }
      return null;
    }

  }

  submitAction(event: any) {
    event.preventDefault();
    localStorage.setItem('cart', JSON.stringify([]));
    console.log('FORM DATA ===', this.loginForm.value);
  }
}
