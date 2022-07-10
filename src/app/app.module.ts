import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'child', component: ChildComponent},
      {path: 'pageNotFound', component: PageNotFoundComponent},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
