import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public registerForm!: FormGroup<any>;

  public hide = true;
  public token: any;

  public get username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }

  public get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(){
    this.registerForm = new FormGroup<any>({
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }

  public loginUser(): void {
    this._authService.loginUser(this.username.value, this.password.value)
      .subscribe((token) => {
        this.token = token;
        console.log(token);
      })
  }

  public goBack(): void {
    this._router.navigateByUrl('/table');
  }
}
