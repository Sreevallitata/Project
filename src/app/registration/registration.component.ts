import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  email: string = '';
  password: string = '';
  re_enter_password: string = '';
  fn: string;
  ln: string;

  constructor(private api_srvc: ApiService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
  }

  onFormSubmit(form: NgForm) {
    this.api_srvc.postAccount(form)
      .subscribe(res => {
        this.router.navigate(['/login']);
      }, (err) => {

        console.log(err);
      });
  }
}
