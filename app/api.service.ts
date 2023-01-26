import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';
import { IItem } from './interfaces/item';
import { IUser } from './interfaces/user';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  user: IUser | null = null;

  loadItems() {
    return this.http.get<IItem[]>(`${apiUrl}/items/catalog`);
  }
  loadRecent() {
    return this.http.get<IItem[]>(`${apiUrl}/items/catalog/recent-buildz`);
  }

  loadItemById(id: string) {
    return this.http.get<IItem>(`${apiUrl}/items/catalog/${id}`);
  }

  updateItem(id: string | undefined, item: {}) {
    return this.http.put<IItem>(`${apiUrl}/items/catalog/edit/${id}`, item);
  }

  deleteItem(id: string | undefined) {
    return this.http.delete(`${apiUrl}/items/catalog/${id}`);
  }

  getByOwner() {
    return this.http.get<IItem[]>(`${apiUrl}/auth/profile`);
  }

  addPc(data: {}) {
    return this.http.post(`${apiUrl}/items/catalog/create`, data);
  }
}
