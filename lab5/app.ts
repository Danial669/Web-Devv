import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './service/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/categoty.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <header>
      <h1>Мой Магазин</h1>
      <div class="categories">
        <button *ngFor="let cat of categories" (click)="selectCategory(cat.id)">
          {{ cat.name }}
        </button>
      </div>
    </header>

    <main>
      <app-product-list *ngIf="selectedCategoryProducts.length" [products]="selectedCategoryProducts"></app-product-list>
      <p *ngIf="!selectedCategoryProducts.length" class="empty">Выберите категорию для просмотра товаров</p>
    </main>
  `,
  styles: [`
    .categories { display: flex; gap: 10px; justify-content: center; margin-bottom: 30px; }
    button { padding: 10px 20px; cursor: pointer; border-radius: 20px; border: 1px solid #007bff; background: white; }
    button:hover { background: #007bff; color: white; }
    .empty { text-align: center; color: #888; margin-top: 50px; }
  `]
})
export class App {
  categories: Category[];
  selectedCategoryProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.categories;
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryProducts = this.productService.products.filter(
      p => p.categoryId === categoryId
    );
  }
}