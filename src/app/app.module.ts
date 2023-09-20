import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './public/footer/footer.component';
import { ErrorComponent } from './public/error/error.component';
import { NavBarComponent } from './public/nav-bar/nav-bar.component';
import { SliderComponent } from './components/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LogInComponent } from './components/log-in/log-in.component';
import { CreditComponent } from './components/pages/credit/credit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErrorComponent,
    NavBarComponent,
    SliderComponent,
    LogInComponent,
    CreditComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
