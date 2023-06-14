import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FAQComponent } from './faq/faq.component';
import { HydeandSeekComponent } from './hydeand-seek/hydeand-seek.component';
import { NewsComponent } from './news/news.component';
import { TheHouseComponent } from './the-house/the-house.component';
import { MasterPieceComponent } from './master-piece/master-piece.component';
import { OurSpaceComponent } from './our-space/our-space.component';
import { BooksPageComponent } from './books-page/books-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: 'faq', component: FAQComponent},
  { path: 'news', component: NewsComponent},
  { path: 'masterpiece', component: MasterPieceComponent},
  { path: 'hydeandseek', component: HydeandSeekComponent},
  { path: 'thehouse', component: TheHouseComponent},
  { path: 'ourspace', component: OurSpaceComponent},
  { path: 'books', component:BooksPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
