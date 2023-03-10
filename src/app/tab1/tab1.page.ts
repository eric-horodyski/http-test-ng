import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const headers = new HttpHeaders({
      'X-Header-Test': 'test',
      Authorization: 'my-auth-token',
    });
    this.http.get(url, { headers }).subscribe((res) => console.log(res));
  }
}
