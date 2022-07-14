import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChildComponent} from './child/child.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {FavoritecolorComponent} from './favouritecolor/favouritecolor.component';
import {HelloComponent} from './hello/hello.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatRadioModule} from "@angular/material/radio";
import {ThermometerComponent} from './thermometer/thermometer.component';

@NgModule({
  declarations: [
    AppComponent,

    ChildComponent,
    PageNotFoundComponent,
    FavoritecolorComponent,
    HelloComponent,
    ThermometerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSliderModule,
    AppRoutingModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
