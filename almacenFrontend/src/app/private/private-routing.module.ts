import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCreateComponent } from './article/article-create/article-create.component';
import { ArticleEditComponent } from './article/article-edit/article-edit.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { ArticleViewComponent } from './article/article-view/article-view.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { MainContentComponent } from './manager/main-content/main-content.component';
import { ManagerAppComponent } from './manager/manager-app/manager-app.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserViewComponent } from './user/user-view/user-view.component';

const routes: Routes = [
  {
    path: '', component: ManagerAppComponent, children: [
      { path: '', component: MainContentComponent }
    ]
  },
  {
    path: 'producto', component: ManagerAppComponent, children: [
      //products
      { path: 'listar', component: ProductListComponent },
      { path: 'editar/:id', component: ProductEditComponent },
      { path: 'ver/:id', component: ProductViewComponent },
      { path: 'crear', component: ProductCreateComponent }]
  },
  {
    path: 'articulos', component: ManagerAppComponent, children: [
      //products
      { path: 'listar', component: ArticleListComponent },
      { path: 'editar/:id', component: ArticleEditComponent },
      { path: 'ver/:id', component: ArticleViewComponent },
      { path: 'crear', component: ArticleCreateComponent }]
  },
  {
    path: 'usuarios', component: ManagerAppComponent, children: [
      //products
      { path: 'listar', component: UserListComponent },
      { path: 'editar/:id', component: UserEditComponent },
      { path: 'ver/:id', component: UserViewComponent },
      { path: 'crear', component: UserCreateComponent }]
  },
  {
    path: 'cliente', component: ManagerAppComponent, children: [
      //customer
      { path: 'listar', component: CustomerListComponent },
      { path: 'editar/:id', component: CustomerEditComponent },
      { path: 'ver/:id', component: CustomerViewComponent },
      { path: 'crear', component: CustomerCreateComponent }]
  },
  {
    path: 'empleado', component: ManagerAppComponent, children: [
      //employees  
      { path: 'listar', component: EmployeeListComponent },
      { path: 'editar/:id', component: EmployeeEditComponent },
      { path: 'ver/:id', component: EmployeeViewComponent },
      { path: 'crear', component: EmployeeCreateComponent }
    ]
  },
  { path: '**', redirectTo: 'private' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
