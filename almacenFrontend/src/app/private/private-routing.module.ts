import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'producto', component: ProductComponent, children: [
      //products
      { path: 'listar', component: ProductListComponent },
      { path: 'editar', component: ProductEditComponent },
      { path: 'ver', component: ProductViewComponent },
      { path: 'crear', component: ProductCreateComponent }]
  },
  {
    path: 'cliente', component: ProductComponent, children: [
      //customer
      { path: 'listar', component: CustomerListComponent },
      { path: 'editar', component: CustomerEditComponent },
      { path: 'ver', component: CustomerViewComponent },
      { path: 'crear', component: CustomerCreateComponent }]
  },
  {
    path: 'empleado', component: ProductComponent, children: [
      //employees  
      { path: 'listar', component: EmployeeListComponent },
      { path: 'editar', component: EmployeeEditComponent },
      { path: 'ver', component: EmployeeViewComponent },
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
