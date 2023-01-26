import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent {
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService
  ) {}

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    price: ['', [Validators.required, Validators.min(5)]],
    img: ['', [Validators.required]],
  });

  newItemHandler(): void {
    if (this.form.invalid) {
      return;
    }
    const { title, description, price, img } = this.form.value;
    const _ownerId = this.authService.user?._id;
    const item = { title, description, price, img, _ownerId };
    this.apiService.addPc(item).subscribe({
      next: () => this.router.navigate(['/items/catalog']),
      error: (err) => console.log(err),
    });
  }
}
