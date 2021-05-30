import { Component, OnInit } from '@angular/core';
import {Product} from '../../product';
import {ShopService} from '../../services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[] = this.ShopApi.cartProducts;
  loading = true;
  cart: Product[] = JSON.parse(localStorage.getItem('cart') as string);
  constructor(private ShopApi: ShopService) { }

  ngOnInit(): void {
    this.loading = false;
  }

  plusItem(product: Product) {
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

  minusItem(product: Product) {
    const productId = product.id;
    this.cart.forEach((cartProduct) => {
      console.log();
      if (cartProduct.id === productId) {
        if (cartProduct.count <= cartProduct.available) {
          cartProduct.count--;
          this.products.forEach((prod) => {
            if (prod.id === productId) {
              prod.count = cartProduct.count;
            }
          });
        }
      }
    });
    if (product.count === 0) {
      this.cart = this.cart.filter((item) => item.id !== productId);
      // this.products = this.cart.filter((item) => item.id !== productId);
    }
    this.ShopApi.setcartProducts(JSON.stringify(this.cart));
    // this.cart = JSON.parse(localStorage.getItem('cart') as string);
    console.log(this.cart);
  }

  get total(){
    return this.cart.reduce((sum, good) => sum + good.price * good.count, 0);
  }
}
