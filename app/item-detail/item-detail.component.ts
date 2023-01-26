import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth/auth.service';
import { IItem } from '../interfaces';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {
  item!: IItem | null;
  owner: boolean = false;
  errors: Object | undefined;
  hasItem: boolean = false;
  token: string | null = localStorage.getItem('token');

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.apiService.loadItemById(id).subscribe({
      next: (item) => {
        this.item = item;
        this.hasItem = true;
        if (this.authService.user?._id == item._ownerId) {
          this.owner = true;
        } else {
          this.owner = false;
        }
      },
      error: (err) => {
        this.errors = err.error?.error;
        console.log(err);
      },
    });
  }

  deleteItemHandler(): void {
    if (this.authService.user?._id != this.item?._ownerId || !this.token) {
      this.router.navigate(['**']);
    }
    const id = this.item?._id;
    this.apiService.deleteItem(id).subscribe({
      next: () => this.router.navigate(['/items/catalog']),
      error: (err) => {
        console.log(err);
      },
    });
  }
}
