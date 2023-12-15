import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-component',
  standalone: true,
  imports: [],
  templateUrl: './search-component.component.html',
  styleUrl: './search-component.component.css',
})
export class SearchComponentComponent {
  constructor(public router: Router) {}

  ngOnInit() {}

  search(keyword: string) {
    this.router.navigateByUrl(`search/${keyword}`);
  }
}
