import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import { FavoritecolorComponent } from './favouritecolor/favouritecolor.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PageNotFoundComponent,
    FavoritecolorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      {path: 'child', component: ChildComponent},
      {path: 'pageNotFound', component: PageNotFoundComponent},
      {path: 'favouritecolor', component: FavoritecolorComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
