import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RestService } from '../../services/rest.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
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
    private spinnerService: Ng4LoadingSpinnerService) {
    let loginStatus = sessionStorage.getItem('login');
    if (loginStatus === 'true') {
      this.spinnerService.show();
      this.loginMessage = 'You are already logged in. Redirecting to Search Screen'
      setTimeout(() => {
        this.router.navigate(['search']);
      }, 3000);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnDestroy() {
    this.spinnerService.hide();
  }

  login(formData: any) {
    this.spinnerService.show();
    this.restService.getData('people/').subscribe((data: any) => {
      this.spinnerService.hide();
      data.results.forEach(element => {
        if (formData.username === element.name && formData.password === element.birth_year) {
          sessionStorage.setItem('login', 'true');
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
