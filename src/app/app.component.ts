import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the-new-york-times';
  isLoading = true;
  ngAfterViewInit() {
    this.isLoading = false;
    console.log(this.isLoading);
  }
}
