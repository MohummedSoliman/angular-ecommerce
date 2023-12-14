import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProductListComponent,
    ProductCategoryComponent,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-ecommerce';
}
