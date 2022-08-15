import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { ManagerAppComponent } from './manager-app/manager-app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material.module';

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
    RouterModule
  ]
})
export class ManagerModule { }
