import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//J'importe le module forms
import { FormsModule} from '@angular/forms';

//J'importe le module Router
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';

//J'importe mon tableau de type Route
import { ROUTES } from './app.routes';
import { MovieComponent } from './movie/movie.component';
import { HightlightDirective } from './hightlight.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    NavbarComponent,
    MovieComponent,
    HightlightDirective,
    DisplayMoviesDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
