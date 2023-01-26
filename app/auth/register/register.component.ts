import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { setSession } from '../../shared/session/session';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    img: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  registerHandler(): void {
    if (this.form.invalid) {
      return;
    }
    const { email, password, img } = this.form.value;
    this.authService.register(email!, password!, img!).subscribe({
      next: (user) => {
        setSession(user);
        this.authService.setLoginInfo(user, true);
        this.router.navigate(['/']);
      },
    });
  }
}
