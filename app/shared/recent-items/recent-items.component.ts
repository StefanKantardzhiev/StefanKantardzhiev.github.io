import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { IItem } from '../../interfaces/item';

@Component({
  selector: 'app-recent-items',
  templateUrl: './recent-items.component.html',
  styleUrls: ['./recent-items.component.scss'],
})
export class RecentItemsComponent implements OnInit {
  recentList: IItem[] | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadRecent().subscribe({
      next: (value) => {
        this.recentList = value;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
