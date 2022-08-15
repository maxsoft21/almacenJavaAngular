import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ContentHeaderComponent } from '../shared/content-header/content-header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { PrivateRoutingModule } from './private-routing.module';
import { ManagerModule } from './manager/manager.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { MaterialModule } from '../shared/material.module';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { ArticleCreateComponent } from './article/article-create/article-create.component';
import { ArticleEditComponent } from './article/article-edit/article-edit.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleViewComponent } from './article/article-view/article-view.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductViewComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    EmployeeViewComponent,
    EmployeeEditComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerViewComponent,
    ProductComponent,
    NavbarComponent,
    SidebarComponent,
    ContentHeaderComponent,
    FooterComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    UserViewComponent,
    ArticleCreateComponent,
    ArticleEditComponent,
    ArticleListComponent,
    ArticleViewComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ManagerModule,
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class PrivateModule { }
