import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CustomerLoginComponent,
    CustomerListComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    CustomerLoginComponent
  ]
})
export class CustomerModule { }
