
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './components/navigation/navigation.component';
import {ShopModule} from './modules/shop/shop.module';




@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ShopModule,
    AppRoutingModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
