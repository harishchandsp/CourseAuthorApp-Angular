import { Component, OnInit } from '@angular/core';
import { Author } from './author';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-authorpage',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AuthorPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
