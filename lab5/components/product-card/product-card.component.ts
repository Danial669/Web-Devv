import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  @Input({ required: true }) product!: Product;
  currentImage: string = '';

  ngOnInit() {
    this.currentImage = this.product.image;
  }

  setMainImage(img: string) {
    this.currentImage = img;
  }

  share(platform: 'wa' | 'tg') {
    const text = `Посмотри, что я нашел: ${this.product.name}`;
    const url = this.product.link;
    const shareUrl = platform === 'wa' 
      ? `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
      : `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    
    window.open(shareUrl, '_blank');
  }
}