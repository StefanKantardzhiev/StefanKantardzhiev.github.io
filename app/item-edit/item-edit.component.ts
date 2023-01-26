import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth/auth.service';
import { IItem } from '../interfaces';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss'],
})
export class ItemEditComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService,
    private acivatedRoute: ActivatedRoute
  ) {}

  id: string = '';
  item: IItem | null = null;
  token: string | null = localStorage.getItem('token');

  ngOnInit(): void {
    this.id = this.acivatedRoute.snapshot.params['id'];
    this.apiService.loadItemById(this.id).subscribe({
      next: (item) => {
        this.item = item;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    price: ['', [Validators.required, Validators.min(5)]],
  });

  updateItemHandler(): void {
    if (this.form.invalid) {
      return;
    }
    const { title, description, price } = this.form.value;
    // const _ownerId = this.authService.user?._id;
    // this.id = this.acivatedRoute.snapshot.params['id'];
    const item = { title, description, price };
    this.apiService.updateItem(this.id, item).subscribe({
      next: () => this.router.navigate([`items/catalog/${this.id}`]),
      error: (err) => console.log(err),
    });
  }
}
