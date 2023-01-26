import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IItem } from '../interfaces/item';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  itemsList: IItem[] | null = null;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  get user() {
    const { email, img } = this.authService.user!;
    return {
      email,
      img,
    };
  }

  ngOnInit(): void {
    this.apiService.getByOwner().subscribe({
      next: (value) => {
        this.itemsList = value;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
