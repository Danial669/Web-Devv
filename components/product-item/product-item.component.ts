import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <img [src]="product.image" [alt]="product.name">
      <h3>{{ product.name }}</h3>
      <div class="actions">
        <button (click)="like()">❤️ {{ product.likes }}</button>
        <button (click)="remove()" class="del">🗑 Удалить</button>
      </div>
      <a [href]="product.link" target="_blank">Купить</a>
    </div>
  `,
  styles: [`
    .card { border: 1px solid #ddd; padding: 15px; border-radius: 8px; text-align: center; }
    img { width: 100%; height: 150px; object-fit: contain; }
    .actions { display: flex; justify-content: center; gap: 10px; margin: 10px 0; }
    .del { background: #ff4d4d; color: white; border: none; padding: 5px; border-radius: 4px; }
  `]
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() onRemove = new EventEmitter<number>();

  like() { this.product.likes++; }
  remove() { this.onRemove.emit(this.product.id); }
}