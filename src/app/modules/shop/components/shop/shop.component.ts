import {Component, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ShopService} from '../../services/shop.service';

@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
    products: Product[] = [];
    loading = true;
    cart: Product[] = this.ShopApi.cartProducts;

    constructor(private ShopApi: ShopService) {
    }

    ngOnInit(): void {
        this.cart = JSON.parse(localStorage.getItem('cart') as string);
        console.log('init', this.cart);
        this.ShopApi.loadProducts().subscribe((products) => {
            this.products = (products as Product[]);
            this.loading = false;

            this.products.forEach(item => {
                item.count = 0;
                this.cart.forEach(cartItem => {
                    if (cartItem.id === item.id) {
                        item.count = cartItem.count;
                    }
                });
            });
        });
    }


    AddToCart(product: Product) {

        const productId = product.id;
        if (product.count === 0) {
            this.cart.push(product);
        }
        this.cart.forEach((itemCart) => {
            if (itemCart.id === productId) {
                if (itemCart.count < itemCart.available) {
                    itemCart.count++;
                    this.products.forEach(item => {
                        if (item.id === productId) {
                            item.count = itemCart.count;
                        }
                    });
                }
            }
        });
        this.ShopApi.setcartProducts(JSON.stringify(this.cart));
    }
}
