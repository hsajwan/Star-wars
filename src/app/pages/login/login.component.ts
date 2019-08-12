import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router'
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loginMessage: string;

  constructor(private formBuilder: FormBuilder,
    private restService: RestService,
    private router: Router,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  login(formData: any) {
    this.spinnerService.show();
    this.restService.getData('people/').subscribe((data: any) => {
      this.spinnerService.hide();
      data.results.forEach(element => {
        if (formData.username === element.name && formData.password === element.birth_year) {
          this.router.navigate(['search']);
        } else {
          this.loginMessage = 'Invalid username or password';
        }
      });
    }, (err) => {
      this.spinnerService.hide();
      this.loginMessage = 'We are facing some issue, Please try after some time';
    });
  }

}
