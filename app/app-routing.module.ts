import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { NewItemComponent } from './new-item/new-item.component';
import { ProfileComponent } from './profile/profile.component';
import { RecentItemsComponent } from './shared/recent-items/recent-items.component';
import { AuthActivate } from './shared/guards/auth.activate';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'items/catalog',
    pathMatch: 'full',
    component: ItemsListComponent,
  },
  {
    path: 'items/catalog/recent-buildz',
    pathMatch: 'full',
    component: RecentItemsComponent,
  },
  {
    path: 'items/catalog/create',
    component: NewItemComponent,
    data: {
      title: 'New Item',
      // loginRequired: true,
    },
  },
  {
    path: `items/catalog/:id`,
    pathMatch: 'full',
    component: ItemDetailComponent,
    canActivate: [AuthActivate],
    data: {
      guest: false,
    },
  },
  {
    path: `items/catalog/edit/:id`,
    pathMatch: 'full',
    component: ItemEditComponent,
    canActivate: [AuthActivate],
    data: {
      guest: false,
    },
  },
  {
    path: 'auth/profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
    data: {
      title: 'Profile',
      guest: false,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
