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


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    ContactComponent,
    UsdInrPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,RouterModule,FormsModule,ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'app-user-list', component: UserListComponent},
      {path: 'app-contact', component: ContactComponent},  
      {path: '', redirectTo: '', pathMatch: 'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
