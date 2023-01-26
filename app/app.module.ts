import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { RecentItemsComponent } from './shared/recent-items/recent-items.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { appInterceptorProvider } from './app.interceptor';
import { NewItemComponent } from './new-item/new-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    RecentItemsComponent,
    NewItemComponent,
    ProfileComponent,
    ItemDetailComponent,
    ItemEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
