import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  pages = [
    {
      title: 'Top Stories',
      route: 'top-stories'
    },
    {
      title: 'Movie Reviews',
      route: 'movie-reviews'
    },
    {
      title: 'Book Reviews',
      route: 'book-reviews'
    }
  ]
  ngOnInit(): void {
  }

}