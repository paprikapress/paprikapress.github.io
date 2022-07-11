import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import {ChildComponent} from "./child/child.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {FavoritecolorComponent} from "./favouritecolor/favouritecolor.component";

const routes: Routes = [
  {
    path: 'child',
    component: ChildComponent
  },

  { path: 'favouritecolor',
    component: FavoritecolorComponent },  // Wildcard route for a 404 page

  { path: 'page',
    component: PageNotFoundComponent },  // Wildcard route for a 404 page

];




@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
