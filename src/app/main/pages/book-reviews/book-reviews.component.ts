import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-book-reviews',
  templateUrl: './book-reviews.component.html',
  styleUrls: ['./book-reviews.component.css']
})
export class BookReviewsComponent implements OnInit {
  books:any = [];
  isLoading = true;
  search_result:any = [];
  isbn = '';
  title = '';
  author = '';
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    let list_name = 'Expeditions Disasters and Adventures';
    this.initBooks(10, list_name);
  }
  
  initBooks(i?:number, list_name = '') {
    this._http.get(`${environment.api_base_url}books/v3/lists.json?list=${list_name}&api-key=${environment.nytimes_key}`)
    .subscribe(
      (res:any) => {
        console.log(res.results); 
         if(i) {
           this.books = res.results?.slice(0, i);
         } else {
           this.books = res.results;
         }
         setTimeout(()=>{
           this.isLoading = false;
         }, 500);
      }
    )
  }
  params = new URLSearchParams();
  searchIsbn(e:any){
    this.params.append('isbn', e);
    this.searchEvent();
  }
  searchTitle(e:any) {
    this.params.append('title', e);
    this.searchEvent();
  }
  searchAuthor(e:any) {
    this.params.append('author', e);
    this.searchEvent();
  }
  searchEvent() {
    let params = this.params.toString();
    this._http.get(`${environment.api_base_url}books/v3/reviews.json?${params}&api-key=${environment.nytimes_key}`)
    .subscribe(
      (res:any) => {
        this.search_result = res.results;
        console.log(res.results); 
      }
    )
  }
  
}
