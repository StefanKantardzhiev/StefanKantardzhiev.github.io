import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/home/home.component';
import { AppEmailDirective } from './validators/app-email.directive';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, AppEmailDirective],
  imports: [CommonModule, AppRoutingModule,ReactiveFormsModule],
  exports: [HomeComponent, AppEmailDirective],
})
export class SharedModule {}
