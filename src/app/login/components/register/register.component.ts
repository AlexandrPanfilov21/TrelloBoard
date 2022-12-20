import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup<any>;

  public hide = true;

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

  public addUser(): void {
    this._authService.registerUser(this.username.value, this.password.value)
      .subscribe()
  }

  public goBack(): void {
    this._router.navigateByUrl('/login');
  }
}
