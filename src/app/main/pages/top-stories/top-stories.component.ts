import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})
export class TopStoriesComponent implements OnInit {
  stories:any = [];
  isLoading = true;
  searchValue = 'home';
  searchData = [
    'arts',
    'automobiles',
    'books',
    'business',
    'fashion',
    'food',
    'health',
    'home',
    'insider',
    'magazine',
    'movies',
    'nyregion',
    'obituaries',
    'opinion',
    'politics',
    'realestate',
    'science',
    'sports',
    'sundayreview',
    'technology',
    'theater',
    't-magazine',
    'travel',
    'upshot',
    'us',
    'world'
  ]
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.initTopStories(5);
  }
  initTopStories(i?:number) {
    this._http.get(`${environment.api_base_url}topstories/v2/${this.searchValue}.json?api-key=${environment.nytimes_key}`)
    .subscribe(
      (res:any) => {
        console.log(res.results); 
        this.stories = res.results;
        if(i) {
          this.stories = res.results?.slice(0, i);
        } else {
          this.stories = res.results;
        }
        setTimeout(()=>{
          this.isLoading = false;
        }, 500);
      }
    )
  }
  selectedValue(e: any) {
    console.log(e.value)
    this.searchValue = e.value;
    this.initTopStories();
  }

}
