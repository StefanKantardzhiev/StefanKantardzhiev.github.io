import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { setSession } from 'src/app/shared/session/session';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  errors: string | undefined = undefined;

  loginHandler(): void {
    if (this.form.invalid) {
      return;
    }
    const { email, password } = this.form.value;

    this.authService.login(email!, password!).subscribe({
      next: (user) => {
        setSession(user);
        this.authService.setLoginInfo(user, true);
        this.router.navigate(['/items/catalog']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
