import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './photos/photos.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    ContactComponent,
    UsdInrPipe,
    FooterComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,RouterModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot([
      {path: 'app-user-list', component: UserListComponent},
      {path: 'app-photos', component: PhotosComponent},  
      {path: 'app-contact', component: ContactComponent},  
      {path: '', redirectTo: '', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
