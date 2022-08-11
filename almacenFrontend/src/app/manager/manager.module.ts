import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { ManagerAppComponent } from './manager-app/manager-app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ManagerAppComponent,children: [
    {path: '', component: MainContentComponent}
  ]},
  { path: '**', redirectTo: 'buttons' }
];

@NgModule({
  declarations: [
    MainContentComponent,
    ManagerAppComponent,
    SidenavComponent,
    ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ManagerModule { }
