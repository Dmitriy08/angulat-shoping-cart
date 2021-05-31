import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../product';
@Injectable({
    providedIn: 'root'
})
export class ShopService {
    apiUrl = 'http://my-json-server.typicode.com/achubirka/db/products';
    products: Product[] = [];
    cart: Product[] = JSON.parse(localStorage.getItem('cart') as string) || [];

    constructor(private http: HttpClient) {
    }

    loadProducts() {
        const url = this.apiUrl;
        const request = this.http.get(url, {observe: 'response'});

        return new Observable(observer => {
            request.subscribe(response => {
                this.products = (response.body as Product[]);
                observer.next(response.body);
                observer.complete();
            });
        });
    }

    get cartProducts(){
        return this.cart;
    }
    setcartProducts(cart: any){
        localStorage.setItem('cart', cart);
    }
}
