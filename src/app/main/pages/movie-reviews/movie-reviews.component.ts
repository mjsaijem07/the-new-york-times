import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css']
})
export class MovieReviewsComponent implements OnInit {
  reviews:any = [];
  isLoading = true;
  reviewer = '';
  sortType = ['by-opening-date', 'by-publication-date']
  sortBy = '';
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.initReviews(5);
  }
  
  initReviews(i?:number) {
    this._http.get(`${environment.api_base_url}movies/v2/reviews/picks.json?api-key=${environment.nytimes_key}`)
    .subscribe(
      (res:any) => {
       console.log(res.results); 
        if(i) {
          this.reviews = res.results?.slice(0, i);
        } else {
          this.reviews = res.results;
        }
        setTimeout(()=>{
          this.isLoading = false;
        }, 500);
      }
    )
  }
  reviewerList:any = [];
  searchReviewer(e:any) {
    console.log(e);
    this._http.get(`${environment.api_base_url}movies/v2/critics/${this.reviewer}.json?api-key=${environment.nytimes_key}`)
    .subscribe(
      (res:any) => {
        this.reviewerList = res.results;
        console.log(this.reviewerList);
      }
    )
  }
  searchReviewOFocus = false;
  searchReviewerFocus(e:any) {
    this.searchReviewOFocus = true;
  }
  searchReviewerFocusOut(e:any) {
    this.searchReviewOFocus = false;
  }
  sortingResult:any = [];
  sorting(e:any) {
    this.sortingResult = [];
    console.log(e.value)
    this.sortBy = e.value;
    this._http.get(`${environment.api_base_url}movies/v2/reviews/all.json?${this.sortBy}&api-key=${environment.nytimes_key}`)
    .subscribe(
      (res:any) => {
        console.log(res.results); 
        this.sortingResult = res.results;
      }
    )
  }
  clear() {
    this.reviewer = '';
    this.sortBy = '';
    this.reviewerList = [];
    this.sortingResult = [];
  }
}
