import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';
import { BookReviewsComponent } from './pages/book-reviews/book-reviews.component';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';
import { MovieReviewsComponent } from './pages/movie-reviews/movie-reviews.component';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from './shared/shared.module';
const route : Routes = [
  {
    path : '',
    component : MainComponent,
  },
  {
    path : 'top-stories',
    component : TopStoriesComponent,
  },
  {
    path : 'movie-reviews',
    component : MovieReviewsComponent,
  },
  {
    path : 'book-reviews',
    component : BookReviewsComponent,
  },
]

@NgModule({
  declarations: [
    MainComponent,
    TopStoriesComponent,
    MovieReviewsComponent,
    BookReviewsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MaterialModule,
    SharedModule,
    FormsModule
    // PagesModule,
  ],
})
export class MainModule { }
