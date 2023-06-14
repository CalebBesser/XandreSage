import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { FAQComponent } from './faq/faq.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MasterPieceComponent } from './master-piece/master-piece.component';
import { HydeandSeekComponent } from './hydeand-seek/hydeand-seek.component';
import { TheHouseComponent } from './the-house/the-house.component';
import { OurSpaceComponent } from './our-space/our-space.component';
import { BooksPageComponent } from './books-page/books-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogComponent,
    HomeComponent,
    NewsComponent,
    FAQComponent,
    ContactsComponent,
    MasterPieceComponent,
    HydeandSeekComponent,
    TheHouseComponent,
    OurSpaceComponent,
    BooksPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
