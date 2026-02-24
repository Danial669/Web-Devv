import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/categoty.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  categories: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Аксессуары' },
    { id: 4, name: 'Бытовая техника' }
  ];

products: Product[] = [
    // КАТЕГОРИЯ 1: Смартфоны
    { 
        id: 1, 
        categoryId: 1, 
        name: 'iPhone 15 Pro', 
        description: 'Титановый корпус, камера 48 МП, чип A17 Pro', 
        price: 550000, 
        rating: 4.9, 
        likes: 0, 
        image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 2, 
        categoryId: 1, 
        name: 'Samsung S24 Ultra', 
        description: 'AI функции, 200 МП камера, S Pen', 
        price: 520000, 
        rating: 4.8, 
        likes: 0, 
        image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g.jpg', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 3, 
        categoryId: 1, 
        name: 'Google Pixel 8', 
        description: 'Чистый Android, лучшая камера', 
        price: 350000, 
        rating: 4.7, 
        likes: 0, 
        image: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8.jpg', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 4, 
        categoryId: 1, 
        name: 'Xiaomi 14', 
        description: 'Камера Leica, Snapdragon 8 Gen 3', 
        price: 400000, 
        rating: 4.6, 
        likes: 0, 
        image: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 5, 
        categoryId: 1, 
        name: 'Nothing Phone 2', 
        description: 'Уникальный дизайн, Glyph интерфейс', 
        price: 280000, 
        rating: 4.5, 
        likes: 0, 
        image: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone-2.jpg', 
        images: [], 
        link: 'https://kaspi.kz' 
    },

    // КАТЕГОРИЯ 2: Ноутбуки
    { 
        id: 6, 
        categoryId: 2, 
        name: 'MacBook Air M3', 
        description: 'Тонкий и мощный, 13.6" дисплей', 
        price: 600000, 
        rating: 5.0, 
        likes: 0, 
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba13-midnight-select-202402?wid=200&hei=200&fmt=jpeg&qlt=90&.v=1708369359005', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 7, 
        categoryId: 2, 
        name: 'Asus ROG Zephyrus', 
        description: 'Игровой монстр, RTX 4080', 
        price: 850000, 
        rating: 4.9, 
        likes: 0, 
        image: 'https://dlcdnwebimgs.asus.com/gain/45b1b3e1-3f62-4f9a-9c7a-442e6bb9b2a0/w200', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 8, 
        categoryId: 2, 
        name: 'Dell XPS 13', 
        description: 'Безрамочный экран, InfinityEdge', 
        price: 700000, 
        rating: 4.7, 
        likes: 0, 
        image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/black/notebook-xps-13-9320-t-black-gallery-1.psd?fmt=png-alpha&wid=200', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 9, 
        categoryId: 2, 
        name: 'HP Spectre x360', 
        description: 'Трансформер, сенсорный экран', 
        price: 650000, 
        rating: 4.8, 
        likes: 0, 
        image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c09055255_200x200.png', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 10, 
        categoryId: 2, 
        name: 'Lenovo Legion 5', 
        description: 'Классика гейминга, AMD Ryzen', 
        price: 550000, 
        rating: 4.6, 
        likes: 0, 
        image: 'https://p3-ofp.static.pub/fes/cms/2022/11/24/h84bcjgg69jtmvjq3snt3hxvxy4b4k859232.png?w=200&h=200', 
        images: [], 
        link: 'https://kaspi.kz' 
    },

    // КАТЕГОРИЯ 3: Аксессуары
    { 
        id: 11, 
        categoryId: 3, 
        name: 'AirPods Pro 2', 
        description: 'Шумоподавление, USB-C зарядка', 
        price: 120000, 
        rating: 4.8, 
        likes: 0, 
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FV1?wid=200&hei=200&fmt=jpeg&qlt=90&.v=1725492496114', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 12, 
        categoryId: 3, 
        name: 'Samsung Galaxy Watch 6', 
        description: 'Умные часы, измерение здоровья', 
        price: 150000, 
        rating: 4.7, 
        likes: 0, 
        image: 'https://images.samsung.com/is/image/samsung/p6pim/kz/2307/gallery/kz-galaxy-watch6-40mm-lte-sm-r935nzkaskz-536990273?wid=200&hei=200&fmt=jpg', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 13, 
        categoryId: 3, 
        name: 'Logitech MX Master 3S', 
        description: 'Эргономичная мышь, тихие клики', 
        price: 45000, 
        rating: 4.9, 
        likes: 0, 
        image: 'https://resource.logitech.com/w_200,h_200,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-graphite-top-view.png', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 14, 
        categoryId: 3, 
        name: 'Keychron K2', 
        description: 'Механическая клавиатура, RGB подсветка', 
        price: 55000, 
        rating: 4.8, 
        likes: 0, 
        image: 'https://cdn.keychron.com/cdn/shop/products/Keychron-K2-White-LED-Backlight-Aluminum-Frame-Gateron-Red-Switch-Keyboard.jpg?v=1692609383&width=200', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 15, 
        categoryId: 3, 
        name: 'Xiaomi Mi Band 8', 
        description: 'Фитнес-трекер, AMOLED экран', 
        price: 25000, 
        rating: 4.6, 
        likes: 0, 
        image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/mi-smart-band-8/specs-header.png?w=200&h=200', 
        images: [], 
        link: 'https://kaspi.kz' 
    },

    // КАТЕГОРИЯ 4: Техника (Бытовая техника)
    { 
        id: 16, 
        categoryId: 4, 
        name: 'Dyson V15 Detect', 
        description: 'Беспроводной пылесос, лазерная подсветка', 
        price: 350000, 
        rating: 4.9, 
        likes: 0, 
        image: 'https://www.dyson.kz/content/dam/dyson/images/products/vacuum-cleaners/stick/v15-detect/v15-detect-absolute-gold/v15-detect-absolute-gold-hero.jpg?wid=200&hei=200', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 17, 
        categoryId: 4, 
        name: 'Philips Airfryer XXL', 
        description: 'Аэрофритюрница, без масла', 
        price: 80000, 
        rating: 4.8, 
        likes: 0, 
        image: 'https://www.philips.kz/c-dam/b2c/ru_KZ/products/airfryer/hd9650-90/master-image.png?w=200&h=200', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 18, 
        categoryId: 4, 
        name: 'Xiaomi Robot Vacuum S10', 
        description: 'Робот-пылесос, лазерная навигация', 
        price: 130000, 
        rating: 4.7, 
        likes: 0, 
        image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/mi-robot-vacuum-s10/specs-header.png?w=200&h=200', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 19, 
        categoryId: 4, 
        name: 'KitchenAid Artisan', 
        description: 'Планетарный миксер, 10 скоростей', 
        price: 250000, 
        rating: 5.0, 
        likes: 0, 
        image: 'https://www.kitchenaid.kz/content/dam/global/kitchenaid/products/stand-mixers/ksm150/ksm150-psr-hero.png?wid=200&hei=200', 
        images: [], 
        link: 'https://kaspi.kz' 
    },
    { 
        id: 20, 
        categoryId: 4, 
        name: 'Samsung Family Hub', 
        description: 'Умный холодильник с экраном', 
        price: 950000, 
        rating: 4.8, 
        likes: 0, 
        image: 'https://images.samsung.com/is/image/samsung/p6pim/kz/rs68n8941sl/feature/rs68n8941sl-008-front-gray?wid=200&hei=200&fmt=jpg', 
        images: [], 
        link: 'https://kaspi.kz' 
    }
];
}