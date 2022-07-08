import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  constructor(
    private http: HttpClient,
  ) {
  }

  onClick() {
      this.http.get('http://localhost:3000').subscribe((data:any) => console.log(data));
  }
}
