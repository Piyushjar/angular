import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,RouterModule,FormsModule,
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
