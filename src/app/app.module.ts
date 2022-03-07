import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

import {RouterModule} from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SectionAComponent } from './section-a/section-a.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SectionBComponent } from './section-b/section-b.component';
import { FormListComponent } from './form-list/form-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SectionAComponent,
    HomeComponent,
    NotFoundComponent,
    SectionBComponent,
    FormListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'sectionA',component:SectionAComponent},
      {path:'sectionB',component:SectionBComponent},
      {path:'form',component:FormListComponent},
      {path:'**',component:NotFoundComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
