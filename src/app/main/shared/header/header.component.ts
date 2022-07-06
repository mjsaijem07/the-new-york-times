import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  map,
} from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerTitle = '';
  route = '';
  constructor(
    public _location: Location,
    private _router: Router,
    private cdref: ChangeDetectorRef,
    ) { }
  ngOnInit(): void {
    this.initHeader();
  }
  ngAfterViewInit(): void {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.initHeader();
      });

    this.cdref.detectChanges();
  }
  initHeader() {
    this.route = this._location.path();
    console.log(this.route.length);
    if(this.route.length == 0) {
      this.headerTitle = 'The New York Times Developer Network'
    } else if(this.route.includes('top-stories')) {
      this.headerTitle = 'Top Stories'
    } else if(this.route.includes('movie-reviews')) {
      this.headerTitle = 'Movie Reviews'
    } else if(this.route.includes('book-reviews')) {
      this.headerTitle = 'Book Reviews'
    }
    console.log(this.headerTitle);
  }
  back() {
    this._location.back()
  }
} 