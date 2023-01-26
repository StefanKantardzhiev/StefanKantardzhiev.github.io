import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IItem } from '../interfaces/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {

  itemsList: IItem[] | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.loadItems().subscribe({
      next: (value) => {
        this.itemsList = value
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
