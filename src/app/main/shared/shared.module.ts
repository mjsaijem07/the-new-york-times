import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from 'src/app/material.module';
import { LoadingComponent } from './loading/loading.component';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HeaderComponent,
    LoadingComponent,
    ContactUsFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    ContactUsFormComponent
  ],
  entryComponents: [
    LoadingComponent,
    ContactUsFormComponent
  ]
})
export class SharedModule { }
