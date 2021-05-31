import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from './components/cart/cart.component';
import {ShopComponent} from './components/shop/shop.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import {ThanksComponent} from './components/thanks/thanks.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ShopService} from './services/shop.service';
import {ReactiveFormsModule} from '@angular/forms';



const routes: Routes = [
    {
        path: '', children: [
            {path: '', component: ShopComponent},
            {path: 'cart', component: CartComponent},
            {path: 'checkout', component: CheckoutComponent},
            {path: 'thanks', component: ThanksComponent}
        ]
    }
];

@NgModule({
    declarations: [
        CartComponent,
        ShopComponent,
        CheckoutComponent,
        ThanksComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule
    ],
    exports: [
        RouterModule
    ],
    providers: [
        ShopService
    ]
})
export class ShopModule {
}
