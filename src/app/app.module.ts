import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './modules/core/shared/components/main-layout/main-layout.component';
import { MainNavbarComponent } from './modules/core/shared/components/main-navbar/main-navbar.component';
import { MainFooterComponent } from './modules/core/shared/components/main-footer/main-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainNavbarComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
